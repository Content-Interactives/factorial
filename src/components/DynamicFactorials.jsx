import React, { useState, useEffect, useCallback } from 'react';

export const DynamicFactorialAnimation = ({ factorial, onAnimationComplete }) => {
  // Edge case: if factorial is 1, skip animations and return result immediately
  if (factorial === 1) {
    // Call onAnimationComplete immediately since there's no animation
    React.useEffect(() => {
      if (onAnimationComplete) {
        const timer = setTimeout(onAnimationComplete, 300);
        return () => clearTimeout(timer);
      }
    }, [onAnimationComplete]);

    return (
      <div className="absolute top-[35%] left-[50%] translate-x-[-50%] w-[80%]">
        <div className="flex flex-row gap-1.5 justify-center items-center flex-wrap grow-in-animation">
          <div className="text-3xl font-bold">
            1
          </div>
        </div>
      </div>
    );
  }

  // Generate the sequence of calculations for any factorial
  const generateCalculationSteps = (n) => {
    if (n <= 1) return [{ left: 1, right: null, result: 1, isLast: true }];
    
    const steps = [];
    let current = n;
    
    for (let i = n - 1; i >= 1; i--) {
      const result = current * i;
      steps.push({
        left: current,
        right: i,
        result: result,
        isLast: i === 1
      });
      current = result;
    }
    
    return steps;
  };

  const steps = generateCalculationSteps(factorial);
  const [currentStep, setCurrentStep] = useState(-1); // -1 means no animation started
  const [animationPhase, setAnimationPhase] = useState('idle'); // 'idle', 'calculating', 'showing-result', 'complete'
  const [showInitialExpression, setShowInitialExpression] = useState(false);

  const startNextStep = useCallback(() => {
    const nextStep = currentStep + 1;
    
    if (nextStep >= steps.length) {
      setAnimationPhase('complete');
      if (onAnimationComplete) {
        setTimeout(onAnimationComplete, 500);
      }
      return;
    }

    setCurrentStep(nextStep);
    setAnimationPhase('calculating');
    
    // After calculation animation, show result
    setTimeout(() => {
      setAnimationPhase('showing-result');
      
      // Move to next step
      setTimeout(() => {
        // Don't call startNextStep recursively here - use a state update instead
        setCurrentStep(nextStep + 1);
        if (nextStep + 1 < steps.length) {
          setAnimationPhase('calculating');
        } else {
          setAnimationPhase('complete');
          if (onAnimationComplete) {
            setTimeout(onAnimationComplete, 500);
          }
        }
      }, 600);
    }, 600);
  }, [currentStep, steps.length, onAnimationComplete]);

  // Start animation when component mounts or factorial changes
  useEffect(() => {
    if (factorial > 0) {
      setCurrentStep(-1);
      setAnimationPhase('idle');
      setShowInitialExpression(false);
      // Small delay to ensure component is mounted, then show initial expression
      setTimeout(() => {
        setShowInitialExpression(true);
        // Wait for grow-in animation to complete, then start calculations
        setTimeout(() => {
          setCurrentStep(0);
          setAnimationPhase('calculating');
        }, 600); // 300ms for grow-in + 300ms buffer
      }, 100);
    }
  }, [factorial]);

  // Handle phase transitions
  useEffect(() => {
    if (animationPhase === 'calculating' && currentStep >= 0 && currentStep < steps.length) {
      // After calculation animation, show result
      setTimeout(() => {
        setAnimationPhase('showing-result');
      }, 600);
    } else if (animationPhase === 'showing-result' && currentStep >= 0 && currentStep < steps.length) {
      // Move to next step
      setTimeout(() => {
        const nextStep = currentStep + 1;
        if (nextStep < steps.length) {
          setCurrentStep(nextStep);
          setAnimationPhase('calculating');
        } else {
          setAnimationPhase('complete');
          // Call onAnimationComplete to signal that calculations are done
          // but the component will still show the final answer
          if (onAnimationComplete) {
            setTimeout(onAnimationComplete, 500);
          }
        }
      }, 600);
    }
  }, [animationPhase, currentStep, steps.length, onAnimationComplete]);

  // Generate all numbers that should be displayed
  const generateDisplayElements = () => {
    const elements = [];
    
    // If no animation started, show initial multiplication
    if (currentStep === -1 || animationPhase === 'idle') {
      for (let i = factorial; i >= 1; i--) {
        elements.push({ type: 'number', value: i, key: `initial-${i}` });
        if (i > 1) {
          elements.push({ type: 'operator', value: '×', key: `op-${i}` });
        }
      }
      return elements;
    }

    // If animation is complete, show only the final answer
    if (animationPhase === 'complete') {
      const finalStep = steps[steps.length - 1];
      elements.push({ 
        type: 'final-answer', 
        value: finalStep.result, 
        key: 'final-answer' 
      });
      return elements;
    }

    // Show current step
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      
      if (animationPhase === 'calculating') {
        // Show current calculation being performed
        elements.push({ 
          type: 'calculating-left', 
          value: step.left, 
          key: `calc-left-${currentStep}` 
        });
        elements.push({ 
          type: 'calculating-op', 
          value: '×', 
          key: `calc-op-${currentStep}` 
        });
        elements.push({ 
          type: 'calculating-right', 
          value: step.right, 
          key: `calc-right-${currentStep}` 
        });
      } else if (animationPhase === 'showing-result') {
        // Show the result of current calculation
        elements.push({ 
          type: 'result', 
          value: step.result, 
          key: `result-${currentStep}`,
          isNew: true 
        });
      }
      
      // Add remaining numbers for future steps (only if not the last step)
      if (currentStep < steps.length - 1) {
        for (let stepIndex = currentStep + 1; stepIndex < steps.length; stepIndex++) {
          const futureStep = steps[stepIndex];
          elements.push({ type: 'operator', value: '×', key: `future-op-${stepIndex}` });
          elements.push({ type: 'number', value: futureStep.right, key: `future-${stepIndex}` });
        }
      }
    }

    return elements;
  };

  const elements = generateDisplayElements();

  // Check if leftmost number has more than 10 digits
  const getLeftmostNumber = () => {
    for (const element of elements) {
      if (['number', 'result', 'calculating-left', 'calculating-right', 'final-answer'].includes(element.type)) {
        return element.value;
      }
    }
    return 0;
  };

  const leftmostNumber = getLeftmostNumber();
  const hasLargeNumber = leftmostNumber.toString().length > 10;

  const getElementClassName = (element) => {
    const baseFontSize = hasLargeNumber ? 'text-lg' : 'text-2xl';
    const baseClasses = `${baseFontSize} font-bold`;
    
    switch (element.type) {
      case 'number':
        return `${baseClasses}`;
      
      case 'result':
        return `${baseClasses} ${element.isNew ? 'grow-in-animation' : ''}`;
      
      case 'calculating-left':
        return `${baseClasses} number-moves-right`;
      
      case 'calculating-right':
        return `${baseClasses} number-moves-left`;
      
      case 'calculating-op':
        return `${baseClasses} fade-out-in-place-animation`;
      
      case 'operator':
        return `${baseClasses}`;
      
      case 'final-answer':
        return `${baseClasses}`;
      
      default:
        return baseClasses;
    }
  };

  if (factorial <= 0) return null;

  
  // Don't render anything until we're ready to show the initial expression
  if (!showInitialExpression && (currentStep === -1 || animationPhase === 'idle')) {
    return null;
  }

  return (
    <div className="absolute top-[35%] left-[50%] translate-x-[-50%] w-[80%]">
      <div className={`flex flex-row gap-1.5 justify-center items-center flex-wrap`}>
        {elements.map((element) => (
          <div
            key={element.key}
            className={getElementClassName(element)}
          >
            {element.value}
          </div>
        ))}
      </div>
    </div>
  );
};
