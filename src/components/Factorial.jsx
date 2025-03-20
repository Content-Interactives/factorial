import React, { useState } from 'react';
import { Input } from '../components/ui/input';

// Format large numbers using a * 10^b notation with superscript
const formatLargeNumber = (num) => {
  // Convert BigInt to scientific notation
  if (typeof num === 'bigint') {
    const strValue = num.toString();
    const exponent = strValue.length - 1;
    const coefficient = parseFloat(strValue.substring(0, 1) + "." + strValue.substring(1, 3));
    return `${coefficient.toFixed(2)}×10<sup>${exponent}</sup>`;
  }
  
  // If number is NaN
  if (isNaN(num)) {
    return "Invalid result";
  }
  
  // If number is larger than 1 million, use a * 10^b notation
  if (num > 1000000) {
    const exp = Math.floor(Math.log10(num));
    const coef = num / Math.pow(10, exp);
    return `${coef.toFixed(2)}×10<sup>${exp}</sup>`;
  }
  // Otherwise use locale string formatting
  return num.toLocaleString();
};

const FactorialCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Calculate factorial of a number using BigInt for large numbers
  const calculateFactorial = (n) => {
    // Check if input is valid
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error("Factorial is only defined for non-negative integers");
    }
    
    // Base case
    if (n === 0 || n === 1) return 1n;
    
    // Use iterative approach with BigInt to handle large numbers
    let result = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
      result *= i;
    }
    
    return result;
  };

  // Format the factorial calculation steps
  const formatFactorialSteps = (n) => {
    if (n === 0 || n === 1) return `${n}! = 1`;
    
    const factorial = calculateFactorial(n);
    
    // For large numbers, don't show all multiplication steps
    if (n > 10) {
      return `${n}! = ${n} × ${n-1} × ${n-2} × ... × 2 × 1 = ${formatLargeNumber(factorial)}`;
    }
    
    const steps = Array.from({length: n}, (_, i) => n - i).join(' × ');
    const formattedResult = formatLargeNumber(factorial);
    return `${n}! = ${steps} = ${formattedResult}`;
  };

  // Handle input change
  const handleInputChange = (e) => {
    // Filter out any characters that aren't digits
    let value = e.target.value.replace(/[^0-9]/g, '');
    
    // Enforce maximum input of 1000
    if (value && parseInt(value) > 1000) {
      value = '1000';
    }
    
    // Update input value with filtered content
    setInputValue(value);
  };

  // Calculate factorial from input value
  const calculateFactorialFromInput = () => {
    if (inputValue.trim()) {
      try {
        // Parse input as integer
        const num = parseInt(inputValue);
        
        if (isNaN(num)) {
          setError("Please enter a valid number");
          setResult(null);
          return;
        }
        
        if (num < 0) {
          setError("Factorial is only defined for non-negative integers");
          setResult(null);
          return;
        }
        
        // Calculate factorial
        const factorial = calculateFactorial(num);
        setResult({
          input: num,
          factorial: factorial,
          steps: formatFactorialSteps(num)
        });
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to calculate factorial");
        setResult(null);
      }
    } else {
      setError("Please enter a number");
      setResult(null);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md bg-white rounded-lg overflow-hidden">
      <div className="p-4 space-y-4">
        
        {/* Input section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Enter a number to find its factorial:
          </label>
          <div className="flex space-x-2">
            <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Example: 5"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button 
              onClick={calculateFactorialFromInput}
              className="px-2 bg-green-500 hover:bg-green-600 text-white text-sm py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={inputValue === ''}
            >
              Calculate
            </button>
          </div>
        </div>
        
        {/* Results section - only appears when needed */}
        {(error || result) && (
          <div className="bg-gray-50 p-4 rounded-md">
            {error && (
              <div className="bg-red-50 p-3 rounded-md border border-red-200">
                <p className="text-sm font-medium text-red-800">
                  {error}
                </p>
              </div>
            )}
            
            {result && !error && (
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-md border border-green-200">
                  <p className="text-sm font-medium text-green-800 mb-1">
                    Steps: 
                    <br />
                    <span className="pl-4 font-normal" dangerouslySetInnerHTML={{ __html: result.steps }}></span>
                  </p>
                  <p className="text-sm font-medium text-green-800">
                    Result: 
                    <br />
                    <span className="pl-4 font-normal" dangerouslySetInnerHTML={{ __html: formatLargeNumber(result.factorial) }}></span>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FactorialCalculator;