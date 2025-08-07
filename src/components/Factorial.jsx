import React, { useState } from 'react';

// Assets Imports
import FlexiTeacher from '../assets/All Flexi Poses/PNG/Flexi_Teacher.png';
import FlexiPoint from '../assets/All Flexi Poses/PNG/Flexi_Point.png';
import FlexiThumbsUp from '../assets/All Flexi Poses/PNG/Flexi_ThumbsUp.png';
import FlexiStars from '../assets/All Flexi Poses/PNG/Flexi_Stars.png';
import FlexiExcited from '../assets/All Flexi Poses/PNG/Flexi_Excited.png';
import FlexiTelescope from '../assets/All Flexi Poses/PNG/Flexi_Telescope.png';

// UI Components Imports
import { Container } from './ui/reused-ui/Container.jsx'
import { FlexiText } from './ui/reused-ui/FlexiText.jsx'
import { GlowButton } from './ui/reused-ui/GlowButton.jsx'
import { MultiGlowButton } from './ui/reused-ui/MultiGlowButton.jsx'

// UI Animation Imports
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';
import './ui/reused-animations/glow.css';

// CSS Imports
import './Factorial.css';

// Function Imports
import { DynamicFactorialAnimation } from './DynamicFactorials.jsx';


const FactorialCalculator = () => {
  // State Management
  const [isAnimating, setIsAnimating] = useState(false);

  // Introduction States
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [removeIntroduction, setRemoveIntroduction] = useState(false);

  // Introduction -> Step 1 States
  // Factorials
  const [removeFactorials, setRemoveFactorials] = useState(true);
  const [show5Factorial, setShow5Factorial] = useState(false);
  const [show4Factorial, setShow4Factorial] = useState(false);
  const [show3Factorial, setShow3Factorial] = useState(false);
  const [show2Factorial, setShow2Factorial] = useState(false); 
  // UI
  const [showStep1Text, setShowStep1Text] = useState(false);
  const [showStep1Button, setShowStep1Button] = useState(false);
  const [removeStep1Text, setRemoveStep1Text] = useState(true);

  // Step 1 -> Step 2 States
  // Factorials
  const [moveFactorialsLeft, setMoveFactorialsLeft] = useState(false);
  // Equal Signs
  const [show5EqualSign, setShow5EqualSign] = useState(false);
  const [show4EqualSign, setShow4EqualSign] = useState(false);
  const [show3EqualSign, setShow3EqualSign] = useState(false);
  const [show2EqualSign, setShow2EqualSign] = useState(false);
  // Multiplication Operations
  const [show5Multiplication, setShow5Multiplication] = useState(false);
  const [show4Multiplication, setShow4Multiplication] = useState(false);
  const [show3Multiplication, setShow3Multiplication] = useState(false);
  const [show2Multiplication, setShow2Multiplication] = useState(false); 
  // UI
  const [showStep2Text, setShowStep2Text] = useState(false);
  const [showStep2Button, setShowStep2Button] = useState(false);
  const [removeStep2Text, setRemoveStep2Text] = useState(true);
  
  // Step 2 -> Step 3 States
  // 5!
  const [factorial5Start5Times4, setFactorial5Start5Times4] = useState(false);
  const [factorial5Show20, setFactorial5Show20] = useState(false);
  const [factorial5Start20Times3, setFactorial5Start20Times3] = useState(false);
  const [factorial5Show60, setFactorial5Show60] = useState(false);
  const [factorial5Start60Times2, setFactorial5Start60Times2] = useState(false);
  const [factorial5Show120, setFactorial5Show120] = useState(false);
  const [factorial5Start120Times1, setFactorial5Start120Times1] = useState(false);
  const [factorial5ShowAnswer, setFactorial5ShowAnswer] = useState(false);
  // 4!
  const [factorial4Start4Times3, setFactorial4Start4Times3] = useState(false);
  const [factorial4Show12, setFactorial4Show12] = useState(false);
  const [factorial4Start12Times2, setFactorial4Start12Times2] = useState(false);
  const [factorial4Show24, setFactorial4Show24] = useState(false);
  const [factorial4Start24Times1, setFactorial4Start24Times1] = useState(false);
  const [factorial4ShowAnswer, setFactorial4ShowAnswer] = useState(false);
  // 3!
  const [factorial3Start3Times2, setFactorial3Start3Times2] = useState(false);
  const [factorial3Show6, setFactorial3Show6] = useState(false);
  const [factorial3Start6Times1, setFactorial3Start6Times1] = useState(false);
  const [factorial3ShowAnswer, setFactorial3ShowAnswer] = useState(false);
  // 2!
  const [factorial2Start2Times1, setFactorial2Start2Times1] = useState(false);
  const [factorial2ShowAnswer, setFactorial2ShowAnswer] = useState(false);
  // UI
  const [showStep3Text, setShowStep3Text] = useState(false);
  const [showStep3Button, setShowStep3Button] = useState(false);
  const [removeStep3Text, setRemoveStep3Text] = useState(true);

  // Step 3 -> Solve Prompt States
  const [moveFactorialsRight, setMoveFactorialsRight] = useState(false);
  const [showFactorials, setShowFactorials] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(5);
  const [answer, setAnswer] = useState('25');
  const [showDynamicAnswer, setShowDynamicAnswer] = useState(false);
  const [removeSolvePrompt, setRemoveSolvePrompt] = useState(true);
  const [removeSolveFlexi, setRemoveSolveFlexi] = useState(true);
  const [showSolveFlexi, setShowSolveFlexi] = useState(false);
  const [inputsModified, setInputsModified] = useState(false);
  const [hideSolveButton, setHideSolveButton] = useState(false);

  // Solve States
  const [showUserInputText, setShowUserInputText] = useState(false);
  const [hideAnswer, setHideAnswer] = useState(false);
  const [showDynamicAnimation, setShowDynamicAnimation] = useState(false);
  const [solvingAnimationComplete, setSolvingAnimationComplete] = useState(false);
  
  // Factorial calculation function
  const calculateFactorial = (n) => {
    if (n <= 0) return 1;
    if (n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // Reset Button Click Handler
  const handleResetButtonClick = () => {
    // State Management
    setIsAnimating(false);

    // Introduction States
    setShowIntroduction(true);
    setRemoveIntroduction(false);

    // Introduction -> Step 1 States
    // Factorials
    setRemoveFactorials(true);
    setShow5Factorial(false);
    setShow4Factorial(false);
    setShow3Factorial(false);
    setShow2Factorial(false);
    // UI
    setShowStep1Text(false);
    setShowStep1Button(false);
    setRemoveStep1Text(true);

    // Step 1 -> Step 2 States
    // Factorials
    setMoveFactorialsLeft(false);
    // Equal Signs
    setShow5EqualSign(false);
    setShow4EqualSign(false);
    setShow3EqualSign(false);
    setShow2EqualSign(false);
    // Multiplication Operations
    setShow5Multiplication(false);
    setShow4Multiplication(false);
    setShow3Multiplication(false);
    setShow2Multiplication(false);
    // UI
    setShowStep2Text(false);
    setShowStep2Button(false);
    setRemoveStep2Text(true);
    
    // Step 2 -> Step 3 States
    // 5!
    setFactorial5Start5Times4(false);
    setFactorial5Show20(false);
    setFactorial5Start20Times3(false);
    setFactorial5Show60(false);
    setFactorial5Start60Times2(false);
    setFactorial5Show120(false);
    setFactorial5Start120Times1(false);
    setFactorial5ShowAnswer(false);
    // 4!
    setFactorial4Start4Times3(false);
    setFactorial4Show12(false);
    setFactorial4Start12Times2(false);
    setFactorial4Show24(false);
    setFactorial4Start24Times1(false);
    setFactorial4ShowAnswer(false);
    // 3!
    setFactorial3Start3Times2(false);
    setFactorial3Show6(false);
    setFactorial3Start6Times1(false);
    setFactorial3ShowAnswer(false);
    // 2!
    setFactorial2Start2Times1(false);
    setFactorial2ShowAnswer(false);
    // UI
    setShowStep3Text(false);
    setShowStep3Button(false);
    setRemoveStep3Text(true);

    // Step 3 -> Solve Prompt States
    setMoveFactorialsRight(false);
    setShowFactorials(false);
    setShowInput(false);
    setInputValue(5);
    setAnswer('120');
    setShowDynamicAnswer(false);
    setRemoveSolvePrompt(true);
    setRemoveSolveFlexi(true);
    setShowSolveFlexi(false);
    setInputsModified(false);
    setHideSolveButton(false);

    // Solve States
    setShowUserInputText(false);
    setHideAnswer(false);
    setShowDynamicAnimation(false);
    setSolvingAnimationComplete(false);
  };

  // Introduction -> Solve Prompt
  const handleTryCalculatingButtonClick = () => {
    setIsAnimating(true);
    setShowIntroduction(false);
    setTimeout(() => {
      setRemoveIntroduction(true);
      setRemoveSolvePrompt(false);
      setShowInput(true);
      setTimeout(() => {
        setShowDynamicAnswer(true);
        setTimeout(() => {
          setRemoveSolveFlexi(false);
          setShowSolveFlexi(true);
          setIsAnimating(false);
        }, 500);
      }, 300);
    }, 800);
  }

  //Introduction -> Step 1
  const handleBeginLessonButtonClick = () => {
    setIsAnimating(true);
    setShowIntroduction(false);
    setTimeout(() => {
      setRemoveIntroduction(true);
      setRemoveFactorials(false);
      setShowFactorials(true);
      setShow5Factorial(true);
      setTimeout(() => {
        setShow4Factorial(true);
        setTimeout(() => {
          setShow3Factorial(true);
          setTimeout(() => {
            setShow2Factorial(true);
            setTimeout(() => {
              setRemoveStep1Text(false);
              setShowStep1Text(true);
              setTimeout(() => {
                setShowStep1Button(true);
                setIsAnimating(false);
              }, 300);
            }, 600);
          }, 500);
        }, 500);
      }, 500);
    }, 800);
  };

  //Step 1 -> Step 2
  const handleContinueButton1Click = () => {
    setIsAnimating(true);
    setShowStep1Text(false);
    setTimeout(() => {
      setRemoveStep1Text(true);
      setMoveFactorialsLeft(true);
      setTimeout(() => {
        setShow5EqualSign(true);
        setTimeout(() => {
          setShow5Multiplication(true);
          setTimeout(() => {
            setShow4EqualSign(true);
            setTimeout(() => {
              setShow4Multiplication(true);
              setTimeout(() => {
                setShow3EqualSign(true);
                setTimeout(() => {
                  setShow3Multiplication(true);
                  setTimeout(() => {
                    setShow2EqualSign(true);
                    setTimeout(() => {
                      setShow2Multiplication(true);
                      setTimeout(() => {
                        setShowStep2Text(true);
                        setRemoveStep2Text(false);
                        setTimeout(() => {
                          setShowStep2Button(true);
                          setIsAnimating(false);
                        }, 300);
                      }, 800);
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 800);
    }, 800);
  }

  //Step 2 -> Step 3
  const handleContinueButton2Click = () => {
    setIsAnimating(true);
    setShowStep2Text(false);
    setTimeout(() => {
      setRemoveStep2Text(true);
      setShowStep2Button(false);
      setTimeout(() => {
        // 5!
        setFactorial5Start5Times4(true);
        setTimeout(() => {
          setFactorial5Show20(true);
          setTimeout(() => {
            setFactorial5Start20Times3(true);
            setTimeout(() => {
              setFactorial5Show60(true);
              setTimeout(() => {
                setFactorial5Start60Times2(true);
                setTimeout(() => {
                  setFactorial5Show120(true);
                  setTimeout(() => {
                    setFactorial5Start120Times1(true);
                    setTimeout(() => {
                      setFactorial5ShowAnswer(true);
                      setTimeout(() => {
                        // 4!
                        setFactorial4Start4Times3(true);
                        setTimeout(() => {
                          setFactorial4Show12(true);
                          setTimeout(() => {
                            setFactorial4Start12Times2(true);
                            setTimeout(() => {
                              setFactorial4Show24(true);
                              setTimeout(() =>{
                                setFactorial4Start24Times1(true);
                                setTimeout(() => {
                                  setFactorial4ShowAnswer(true);
                                  setTimeout(() => {
                                    // 3!
                                    setFactorial3Start3Times2(true);
                                    setTimeout(() => {
                                      setFactorial3Show6(true);
                                      setTimeout(() => {
                                        setFactorial3Start6Times1(true);
                                        setTimeout(() => {
                                          setFactorial3ShowAnswer(true);
                                          setTimeout(() => {
                                            // 2!
                                            setFactorial2Start2Times1(true);
                                            setTimeout(() => {
                                              setFactorial2ShowAnswer(true);
                                              setTimeout(() => {
                                                setShowStep3Text(true);
                                                setRemoveStep3Text(false);
                                                setTimeout(() => {
                                                  setShowStep3Button(true);
                                                  setIsAnimating(false);
                                                  }, 300);
                                                }, 800);
                                              }, 300);
                                            }, 600);
                                          }, 300);
                                        }, 600);
                                      }, 300);
                                    }, 600);
                                  }, 300);
                                }, 600);
                              }, 300);
                            }, 600);
                          }, 300);
                        }, 600);
                      }, 300);
                    }, 600);
                  }, 300);
                }, 600);
              }, 300);
            }, 600);
          }, 300);
        }, 300);
      }, 300);
  }

  // Step 3 -> Step 4
  const handleContinueButton3Click = () => {
    setIsAnimating(true);
    setShowStep3Text(false);
    setTimeout(() => {
      setRemoveStep3Text(true);
      setMoveFactorialsRight(true);
      setTimeout(() => {
        setShowFactorials(false);
        setTimeout(() => {
          setRemoveFactorials(true);
          setTimeout(() => {
            setShowInput(true);
            setRemoveSolvePrompt(false);
            setTimeout(() => {
              setShowDynamicAnswer(true);
              setTimeout(() => {
                setRemoveSolveFlexi(false);
                setShowSolveFlexi(true);
                setIsAnimating(false);
              }, 500);
            }, 300);
          }, 300);
        }, 500);
      }, 300);
    }, 300);
  }

  // Solve Button Click Handler
  const handleSolveButtonClick = () => {
    setIsAnimating(true);
    setHideSolveButton(true);
    setShowSolveFlexi(false);
    setTimeout(() => {
      setInputsModified(false);
      setShowInput(false);
      setTimeout(() => {
        setShowUserInputText(true);
        setHideAnswer(true);
        setTimeout(() => {
          setShowDynamicAnimation(true);
        }, 300);
      }, 300);
    }, 500);
  }

  const handleSolveButtonClickPart2 = () => {
    setAnswer(calculateFactorial(inputValue));
    setHideAnswer(false);
    setShowDynamicAnimation(false);
    setShowInput(true);
    setShowDynamicAnimation(false);
    setShowUserInputText(false);
    setTimeout(() => {
      setShowSolveFlexi(true);
      setHideSolveButton(false);
      setIsAnimating(false);
    }, 600);
  }

  return (
    <Container text="Factorial Calculator" showResetButton={true} onReset={handleResetButtonClick} disableResetButton={isAnimating}>
      {/* Introduction Step */}
      {!removeIntroduction && (
        <>
          <FlexiText 
            className={`${showIntroduction ? '' : 'fade-out-up-animation'}`}
          >
            Welcome to the Factorial Calculator! Click one of the buttons below to begin the lesson or try solving your own factorial problem.
          </FlexiText>
          <MultiGlowButton
            buttons={[
              { text: 'Begin Lesson', onClick: handleBeginLessonButtonClick },
              { text: 'Try Calculating', onClick: handleTryCalculatingButtonClick },
            ]}
          />
        </>
      )}

      {/* Factorials */}
      {!removeFactorials && (
         <div className={`w-[100%] h-[100%] ${showFactorials ? '' : 'fade-out-in-place-animation'}`}>
          {/* 5 */}
          <div className={`absolute top-[11%] w-[100%] h-[35px] ${moveFactorialsRight ? 'move-factorial-5-right' : ''}`}>
            <div 
              className={`factorial-text absolute transform left-[50%] translate-x-[-50%] text-3xl font-bold ${moveFactorialsLeft ? 'move-factorials-left' : show5Factorial ? 'grow-in-centered-animation' : 'no-show-animation'}`}
              >5!</div>
            <div  
              className={`factorial-text absolute left-[22%] translate-x-[-50%] text-3xl font-bold ${show5EqualSign ? 'fade-in-right-animation' : 'no-show-animation'}`}
              > = 
            </div>
            <div
              className={`flex flex-row gap-1.5 factorial-text absolute left-[31%] translate-x-[-50%] text-3xl font-bold ${show5Multiplication ? 'fade-in-right-animation' : 'no-show-animation'}`}
              >
              <div className={`${factorial5Show60 ? 'no-show-animation' : factorial5Start20Times3 ? 'number-moves-right' : factorial5Show20 ? 'grow-in-animation' : 'no-show-animation'}`}>
                20
              </div>
              <div className={`${factorial5Show120 ? 'no-show-animation' : factorial5Start60Times2 ? 'number-moves-right' : factorial5Show60 ? 'grow-in-animation' : 'no-show-animation'}`}>
                60
              </div>
              <div className={`${factorial5ShowAnswer ? 'no-show-animation' : factorial5Start120Times1 ? 'number-moves-right' : factorial5Show120 ? 'grow-in-animation' : 'no-show-animation'}`}>
                120
              </div>
              <div className={`${factorial5ShowAnswer ? 'grow-in-animation' : 'no-show-animation'}`}>
                120
              </div>
              <div className={`${factorial5Show20 ? 'no-show-animation' : factorial5Start5Times4 ? 'number-moves-right' : ''}`}>
                5
              </div>
              <div className={`${factorial5Show20 ? 'no-show-animation' : factorial5Start5Times4 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial5Show20 ? 'no-show-animation' : factorial5Start5Times4 ? 'number-moves-left' : ''}`}>
                4
              </div>
              <div className={`${factorial5Show60 ? 'no-show-animation' : factorial5Start20Times3 ? 'fade-out-in-place-animation' : factorial5Show60 ? 'grow-in-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial5Show60 ? 'no-show-animation' : factorial5Start20Times3 ? 'number-moves-left' : factorial5Show60 ? 'grow-in-animation' : ''}`}>
                3
              </div>
              <div className={`${factorial5Show120 ? 'no-show-animation' : factorial5Start60Times2 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial5Show120 ? 'no-show-animation' : factorial5Start60Times2 ? 'number-moves-left' : ''}`}>
                2
              </div>
              <div className={`${factorial5ShowAnswer ? 'no-show-animation' : factorial5Start120Times1 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial5ShowAnswer ? 'no-show-animation' : factorial5Start120Times1 ? 'number-moves-left' : ''}`}>
                1
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className={`absolute top-[22%] w-[100%] h-[35px] ${moveFactorialsRight ? 'move-factorial-4-right' : ''}`}>
            <div 
              className={`factorial-text absolute left-[50%] translate-x-[-50%] text-3xl font-bold ${moveFactorialsLeft ? 'move-factorials-left' : show4Factorial ? 'grow-in-centered-animation' : 'no-show-animation'}`}
              >4! </div>
            <div  
              className={`factorial-text absolute left-[22%] translate-x-[-50%] text-3xl font-bold ${show4EqualSign ? 'fade-in-right-animation' : 'no-show-animation'}`}
              > = 
            </div>
            <div
              className={`flex flex-row gap-1.5 factorial-text absolute left-[31%] translate-x-[-50%] text-3xl font-bold ${show4Multiplication ? 'fade-in-right-animation' : 'no-show-animation'}`}
              >
              <div className={`${factorial4Show24 ? 'no-show-animation' : factorial4Start12Times2 ? 'number-moves-right' : factorial4Show12 ? 'grow-in-animation' : 'no-show-animation'}`}>
                12
              </div>
              <div className={`${factorial4ShowAnswer ? 'no-show-animation' : factorial4Start24Times1 ? 'number-moves-right' : factorial4Show24 ? 'grow-in-animation' : 'no-show-animation'}`}>
                24
              </div>
              <div className={`${factorial4ShowAnswer ? 'grow-in-animation' : 'no-show-animation'}`}>
                24
              </div>
              <div className={`${factorial4Show12 ? 'no-show-animation' : factorial4Start4Times3 ? 'number-moves-right' : ''}`}>
                4
              </div>
              <div className={`${factorial4Show12 ? 'no-show-animation' : factorial4Start4Times3 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial4Show12 ? 'no-show-animation' : factorial4Start4Times3 ? 'number-moves-left' : ''}`}>
                3
              </div>
              <div className={`${factorial4Show24 ? 'no-show-animation' : factorial4Start12Times2 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial4Show24 ? 'no-show-animation' : factorial4Start12Times2 ? 'number-moves-left' : ''}`}>
                2
              </div>
              <div className={`${factorial4ShowAnswer ? 'no-show-animation' : factorial4Start24Times1 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial4ShowAnswer ? 'no-show-animation' : factorial4Start24Times1 ? 'number-moves-left' : ''}`}>
                1
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className={`absolute top-[33%] w-[100%] h-[35px] ${moveFactorialsRight ? 'move-factorial-3-right' : ''} `}>
            <div 
              className={`factorial-text absolute left-[50%] translate-x-[-50%] text-3xl font-bold ${moveFactorialsLeft ? 'move-factorials-left' : show3Factorial ? 'grow-in-centered-animation' : 'no-show-animation'}`}
              >3! </div>
            <div  
              className={`factorial-text absolute left-[22%] translate-x-[-50%] text-3xl font-bold ${show3EqualSign ? 'fade-in-right-animation' : 'no-show-animation'}`}
              > = 
            </div>
            <div
              className={`flex flex-row gap-1.5 factorial-text absolute left-[31%] translate-x-[-50%] text-3xl font-bold ${show3Multiplication ? 'fade-in-right-animation' : 'no-show-animation'}`}
              >
              <div className={`${factorial3ShowAnswer ? 'no-show-animation' : factorial3Start6Times1 ? 'number-moves-right' : factorial3Show6 ? 'grow-in-animation' : 'no-show-animation'}`}>
                6
              </div>
              <div className={`${factorial3ShowAnswer ? 'grow-in-animation' : 'no-show-animation'}`}>
                6
              </div>
              <div className={`${factorial3Show6 ? 'no-show-animation' : factorial3Start3Times2 ? 'number-moves-right' : ''}`}>
                3
              </div>
              <div className={`${factorial3Show6 ? 'no-show-animation' : factorial3Start3Times2 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial3Show6 ? 'no-show-animation' : factorial3Start3Times2 ? 'number-moves-left' : ''}`}>
                2
              </div>
              <div className={`${factorial3ShowAnswer ? 'no-show-animation' : factorial3Start6Times1 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial3ShowAnswer ? 'no-show-animation' : factorial3Start6Times1 ? 'number-moves-left' : ''}`}>
                1
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className={`absolute top-[44%] w-[100%] h-[35px] ${moveFactorialsRight ? 'move-factorial-2-right' : ''}`}>
            <div 
              className={`factorial-text absolute left-[50%] translate-x-[-50%] text-3xl font-bold ${moveFactorialsLeft ? 'move-factorials-left' : show2Factorial ? 'grow-in-centered-animation' : 'no-show-animation'}`}
              >2! </div>
            <div  
              className={`factorial-text absolute left-[22%] translate-x-[-50%] text-3xl font-bold ${show2EqualSign ? 'fade-in-right-animation' : 'no-show-animation'}`}
              > = 
            </div>
            <div
              className={`flex flex-row gap-1.5 factorial-text absolute left-[31%] translate-x-[-50%] text-3xl font-bold ${show2Multiplication ? 'fade-in-right-animation' : 'no-show-animation'}`}
              >
              <div className={`${factorial2ShowAnswer ? 'grow-in-animation' : 'no-show-animation'}`}>
                2
              </div>
              <div className={`${factorial2ShowAnswer ? 'no-show-animation' : factorial2Start2Times1 ? 'number-moves-right' : ''}`}>
                2
              </div>
              <div className={`${factorial2ShowAnswer ? 'no-show-animation' : factorial2Start2Times1 ? 'fade-out-in-place-animation' : ''}`}>
                ×
              </div>
              <div className={`${factorial2ShowAnswer ? 'no-show-animation' : factorial2Start2Times1 ? 'number-moves-left' : ''}`}>
                1
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 1 Text */}
      {!removeStep1Text &&
        <>
          <FlexiText
            className={`${showStep1Text ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
            flexiImage={FlexiTeacher}
            >
              A factorial is a math operation that looks like an exclamation mark on the right of a number.
          </FlexiText>
          <GlowButton
            className={`${showStep1Button ? 'grow-in-animation' : 'no-show-animation'}`}
            onClick={() => {handleContinueButton1Click()}}
          >Continue
          </GlowButton>
        </>
      }

      {/* Step 2 Text */}
      {!removeStep2Text &&
        <>
          <FlexiText
            className={`${showStep2Text ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
            flexiImage={FlexiTelescope}
          >
            Factorials are equivalent to multiplying all the whole numbers between it and 1.
          </FlexiText>
          <GlowButton
            className={`${showStep2Button ? 'grow-in-animation' : 'no-show-animation'}`}
            onClick={() => {handleContinueButton2Click()}}
          >Continue
          </GlowButton>
        </>
      }

      {/* Step 3 Text */}
      {!removeStep3Text &&
        <>
          <FlexiText
            className={`${showStep3Text ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
            flexiImage={FlexiStars}
          >
            Now that you know how to calculate factorials, try solving your numbers!
          </FlexiText>
          <GlowButton
            className={`${showStep3Button ? 'grow-in-animation' : 'no-show-animation'}`}
            onClick={() => {handleContinueButton3Click()}}
          >Continue
          </GlowButton>
        </>
      }

      {/* Solve Prompt */}
      {!removeSolveFlexi && (
        <FlexiText
          className={`${showSolveFlexi ? 'fade-in-up-animation' : 'fade-out-up-animation'}`}
          flexiImage={FlexiThumbsUp}
        >
          Enter your own number above to find its factorial!
        </FlexiText>
      )}

      {/* Solve Prompt */}
      {!removeSolvePrompt && (
        <div className={`w-[100%] absolute top-[20%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-y-5 h-[100px]`}>
          <div className={`flex items-center justify-center flex-row gap-1.5 ${showInput ? 'grow-in-animation' : 'shrink-out-animation'}`}>
            <input 
              type="text" 
              className={`inputs text-2xl font-bold text-[#5750E3] text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none z-50`} 
              placeholder=""
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                if (value === '' || value === '0') {
                  setInputValue('');
                } else {
                  const numValue = parseInt(value);
                  setInputValue(Math.min(numValue, 20));
                  setInputsModified(true);
                }
                setAnswer('?');
              }}
              onBlur={(e) => {
                if (e.target.value === '' || e.target.value === '0') {
                  setInputValue(1);
                  setInputsModified(true);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === '-' || e.key === '+' || e.key === '.' || e.key === 'e' || e.key === 'E') {
                  e.preventDefault();
                }
              }}
              />
            <div className='text-4xl font-bold text-[#5750E3]'>
              !
            </div>
          </div>

          <div className={`${answer.toString().length > 9 ? 'text-lg' : 'text-4xl'} font-bold ${hideAnswer ? 'fade-out-in-place-animation' : 'grow-in-animation'}`}>
            {`= ${answer}`}
          </div>
        </div>
      )}

      {/* Solving Elements */}
      {!removeSolvePrompt && (
        <>
          <div className={`text-4xl font-bold text-[#5750E3] absolute top-[20%] left-[50%] translate-x-[-50%] ${showUserInputText ? 'grow-in-centered-animation' : 'no-show-animation'}`}>
            {inputValue}!
          </div>
          {showDynamicAnimation && (
            <div className={`h-[400px] w-[100%] ${showDynamicAnimation ? 'grow-in-animation' : 'shrink-out-animation'}`}>
              <DynamicFactorialAnimation
                factorial={inputValue}
                onAnimationComplete={() => {
                  handleSolveButtonClickPart2();
                }}
              />
            </div>
          )}
        </>
      )}

      {/* Solve Button */}
      {inputsModified && (
        <GlowButton
          className={`${hideSolveButton ? 'shrink-out-animation' : inputsModified ? 'grow-in-animation' : 'no-show-animation'}`}
          onClick={() => {handleSolveButtonClick()}}
        >Solve  
        </GlowButton>
      )}
      
    </Container>
  );
};

export default FactorialCalculator;