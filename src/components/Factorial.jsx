import React, { useState } from 'react';

// Assets Imports
import FlexiTeacher from '../assets/All Flexi Poses/PNG/Flexi_Teacher.png';
import FlexiPoint from '../assets/All Flexi Poses/PNG/Flexi_Point.png';
import FlexiThumbsUp from '../assets/All Flexi Poses/PNG/Flexi_ThumbsUp.png';
import FlexiStars from '../assets/All Flexi Poses/PNG/Flexi_Stars.png';
import FlexiExcited from '../assets/All Flexi Poses/PNG/Flexi_Excited.png';

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

const FactorialCalculator = () => {
  // State Management
  const [isAnimating, setIsAnimating] = useState(false);

  // Introduction States
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [removeIntroduction, setRemoveIntroduction] = useState(false);

  // Introduction -> Step 1 States
  // Factorials
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


  
  
  // Reset Button Click Handler
  const handleResetButtonClick = () => {
  };

  // Calculate Button Click Handler
  const handleCalculateButtonClick = () => {
  };

  //Introduction -> Step 1
  const handleBeginLessonButtonClick = () => {
    setShowIntroduction(false);
    setTimeout(() => {
      setRemoveIntroduction(true);
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
              }, 300);
            }, 600);
          }, 500);
        }, 500);
      }, 500);
    }, 800);
  };

  //Step 1 -> Step 2
  const handleContinueButton1Click = () => {
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
    setShowStep2Text(false);
    setTimeout(() => {
      setShowStep2Button(false);
    }, 300);
  }

  return (
    <Container text="Factorial Calculator" showResetButton={true} onReset={handleResetButtonClick} disableResetButton={isAnimating}>
      {/* Introduction Step */}
      {!removeIntroduction && (
        <>
          <FlexiText 
            className={`${showIntroduction ? '' : 'fade-out-up-animation'}`}
            flexiImage={FlexiTeacher}
          >
            Welcome to the Factorial Calculator! Click one of the buttons below to begin the lesson or try solving your own factorial problem.
          </FlexiText>
          <MultiGlowButton
            buttons={[
              { text: 'Begin Lesson', onClick: handleBeginLessonButtonClick },
              { text: 'Try Calculating', onClick: handleBeginLessonButtonClick },
            ]}
          />
        </>
      )}

      {/* Factorials */}
      <div className={`w-[100%] h-[100%]`}>
        {/* 5 */}
        <div className={`absolute top-[11%] w-[100%] h-[35px]`}>
          <div 
            className={`factorial-text absolute transform left-[50%] translate-x-[-50%] text-3xl font-bold ${moveFactorialsLeft ? 'move-factorials-left' : show5Factorial ? 'grow-in-centered-animation' : 'no-show-animation'}`}
            >5!</div>
          <div  
            className={`factorial-text absolute left-[23%] translate-x-[-50%] text-3xl font-bold ${show5EqualSign ? 'fade-in-right-animation' : 'no-show-animation'}`}
            > = 
          </div>
          <div
            className={`factorial-text absolute left-[33%] translate-x-[-50%] text-3xl font-bold ${show5Multiplication ? 'fade-in-right-animation' : 'no-show-animation'}`}
            >
            5 x 4 x 3 x 2 x 1
          </div>
        </div>
        {/* 4 */}
        <div className={`absolute top-[22%] w-[100%] h-[35px]`}>
          <div 
            className={`factorial-text absolute left-[50%] translate-x-[-50%] text-3xl font-bold ${moveFactorialsLeft ? 'move-factorials-left' : show4Factorial ? 'grow-in-centered-animation' : 'no-show-animation'}`}
            >4! </div>
          <div  
            className={`factorial-text absolute left-[23%] translate-x-[-50%] text-3xl font-bold ${show4EqualSign ? 'fade-in-right-animation' : 'no-show-animation'}`}
            > = 
          </div>
          <div
            className={`factorial-text absolute left-[33%] translate-x-[-50%] text-3xl font-bold ${show4Multiplication ? 'fade-in-right-animation' : 'no-show-animation'}`}
            >
            4 x 3 x 2 x 1
          </div>
        </div>
        {/* 3 */}
        <div className={`absolute top-[33%] w-[100%] h-[35px]`}>
          <div 
            className={`factorial-text absolute left-[50%] translate-x-[-50%] text-3xl font-bold ${moveFactorialsLeft ? 'move-factorials-left' : show3Factorial ? 'grow-in-centered-animation' : 'no-show-animation'}`}
            >3! </div>
          <div  
            className={`factorial-text absolute left-[23%] translate-x-[-50%] text-3xl font-bold ${show3EqualSign ? 'fade-in-right-animation' : 'no-show-animation'}`}
            > = 
          </div>
          <div
            className={`factorial-text absolute left-[33%] translate-x-[-50%] text-3xl font-bold ${show3Multiplication ? 'fade-in-right-animation' : 'no-show-animation'}`}
            >
            3 x 2 x 1
          </div>
        </div>
        {/* 2 */}
        <div className={`absolute top-[44%] w-[100%] h-[35px]`}>
          <div 
            className={`factorial-text absolute left-[50%] translate-x-[-50%] text-3xl font-bold ${moveFactorialsLeft ? 'move-factorials-left' : show2Factorial ? 'grow-in-centered-animation' : 'no-show-animation'}`}
            >2! </div>
          <div  
            className={`factorial-text absolute left-[23%] translate-x-[-50%] text-3xl font-bold ${show2EqualSign ? 'fade-in-right-animation' : 'no-show-animation'}`}
            > = 
          </div>
          <div
            className={`factorial-text absolute left-[33%] translate-x-[-50%] text-3xl font-bold ${show2Multiplication ? 'fade-in-right-animation' : 'no-show-animation'}`}
            >
            2 x 1
          </div>
        </div>
      </div>

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
            flexiImage={FlexiTeacher}
          >
            Factorials are equivalent to multiplying all the wholenumbers between it and 1.
          </FlexiText>
          <GlowButton
            className={`${showStep2Button ? 'grow-in-animation' : 'no-show-animation'}`}
            onClick={() => {handleContinueButton2Click()}}
          >Continue
          </GlowButton>
        </>
      }
    </Container>
  );
};

export default FactorialCalculator;