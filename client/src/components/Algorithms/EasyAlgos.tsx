import React from 'react'
// import { useState } from 'react'


function EasyAlgos() {
    // const [twoNumberSolutionBlur, setTwoNumberSolutionBlur] = useState(false);
    const twoSumExample = `
    array = [3, 5, -4, 8, 11, 1, -1, 6];
    targetSum = 10;

    function twoNumberSum(array, targetSum) {
        // code here
    }
    `
    const twoSumNested = `
    function twoSumNested(array, targetSum) {
        console.log("targetNumber:", targetSum)

        const newArrayResult = [];
        
           for (let index = 0; index < array.length - 1; index++) {
              let sum1 = array[index];
                console.log("sum1:", sum1)
             
              for (let j = index + 1; j < array.length; j++) {
                let sum2 = array[j];
                let result = sum1 + sum2;
                
                console.log("sum2:", sum2)
                console.log("result", result)
      
                if(result === targetSum){
                  console.log("twoSumResult", sum1 + " " + sum2)
                  newArrayResult.push(sum1)
                  newArrayResult.push(sum2)
                  return newArrayResult;  
                }
                console.log("finalResult;", newArrayResult)
            } 
         }
        return [];
    `

    const twoSumObject = `
    function twoNumberSum(array, targetSum) {
        console.log("data", array, "target", targetSum);
        let nums = {};
        
        for (let index = 0; index < array.length; index++) {    
          let num = array[index];
          let potentialMatch = targetSum - num;
          
          if(potentialMatch in nums){
            console.log("Final object data", nums)
            console.log("found two sums", [potentialMatch, num])         
            return [potentialMatch, num]
          }else{
            console.log("add to object", nums) 
            nums[num] = "check";
          } 
          
        }  
        
        return [];
      }
    `

    const twoSumPointers = `
    function twoNumberSum(array, targetSum) {
        function sortNumber(a, b) {
         return a - b;
        }

        array.sort(sortNumber);
        console.log(array);
        
        let startPointer = 0;
        let endPointer = array.length -1;
      
        while (startPointer < endPointer){
            let currentSum = array[startPointer] + array[endPointer];
            if(currentSum === targetSum){
              console.log("return both sums")
              return [array[startPointer], array[endPointer] ]
              
              }else if(currentSum < targetSum){
                  console.log("increase the left pointer")
                  startPointer += 1;
              }else if (currentSum > targetSum ){
                console.log("decrease the right pointer")
                  endPointer -= 1;
              }
          
        }
        return [];
      
      }
      
    `
    const validationSubsequenceExample = `
      array = [5, 1, 22, 25, 6, -1, 8, 10];
      sequence = [1, 6, -1, 10];

      function isValidSubsequence(array, sequence) {
        // code here
      }

    //   answer is true
          
    `

    const validationSubsequenceS1 = `
    function isValidSubsequence(array, sequence) {
        let sequencePosition = 0;
        
        for (let value of array) {
           if(sequencePosition === sequence.length){
              break;
            }
              if(sequence[sequencePosition] === value){
              sequencePosition += 1;   
            }
       
          }  
          console.log("return true/false", sequencePosition === sequence.length)
          return sequencePosition === sequence.length;
      }
    `


      
    const validationSubsequenceS2 = `
    function isValidSubsequence(array, sequence) {
        let arrayPointer = 0;
        let sequencePointer = 0;

        while (arrayPointer < array.length && sequencePointer < array.length) {
            console.log("run code if conditions have not been met")
            if(array[arrayPointer] === sequence[sequencePointer]){
                  sequencePointer += 1;
            }
            arrayPointer += 1;
        }
            console.log("return true/false", sequencePosition === sequence.length)
            return sequencePointer === sequence.length;
    }
`
    


  return (
    <div className='algorithm-container'>
        <header>
        <nav>
        <h1>Easy Algorithms</h1>
            <ul>
                <li> <a href="/easy-algorithms#"> 1. Two number sum</a></li>
                <li> <a href="/easy-algorithms#ValidateSubsequenceSection"> 2. Validate Subsequence</a></li>
                <li> <a href="/easy-algorithms#SortedSquaredArray"> 3. Sorted Squared Array</a></li>
                <li> <a href="/easy-algorithms#NonConstructibleChange"> 3. Non-Constructible Change</a></li>
            </ul> 
        </nav>
        </header>
        <main>
            {/* two sum Algorithm */}
            <section id='#TwoSumSection'>
                <header>
                    <h2>1. Two number sum</h2>
                    
                    <h3>Problem: </h3>
                    <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
                    <h3>Conceptualization:</h3>
                    <p>There are three ways to solve this algorithm. The questions may ask you to return the index or the numbers that equal to the target, therefore make sure that your return is either the numbers or the index's.</p>
                    <h3>Category</h3>
                    <p>Arrays</p>
                    <aside>
                        <h3>Try it</h3>
                        <code>
                        <pre>
                            
                        <button  onClick={() => navigator.clipboard.writeText(twoSumExample)}>Copy</button>
                            <code>
                                {twoSumExample}
                            </code>
                        </pre>    
                        </code>
                    </aside>
                </header>
            
                    <ul>
                        <li>
                        <h4>Solution 1: Nested Loop</h4>    
                        <p>One way to solve this algorithm is with a new array, nested loop, variables and a conditional statement, and return. The nested loops will be use to track the two possible sums. The new array will contain the two numbers that are equal to the target. The conditional statement will be use to check when the two numbers are equal to the target.</p>

                            <pre>
                            <button>Show</button>

                                <button  onClick={() => navigator.clipboard.writeText(twoSumNested)}>Copy</button>
                                {/* <code style={ { filter: twoNumberSolutionBlur ? "blur(0px)" : "blur(5px)" }}> */}
                                <code>
                                    {twoSumNested}
                                </code>
                            </pre>                    
                        </li>
                        

                        <li>
                        <h4>Solution 2: Object</h4>    
                        <p>The second way to solve this algorithm is is by using an object, a loop, variables, and a conditional statement. The object to will be use to store the sums. The conditional statement will be use to check if a potential match is in the object.</p>
                            <pre>
                                <button  onClick={() => navigator.clipboard.writeText(twoSumObject)}>Copy</button>
                                <code>
                                    {twoSumObject}
                                </code>
                            </pre>                    
                        </li>

                        <li>
                        <h4>Solution 3: Pointers</h4>    
                        <p>The last way possible way to solve this algorithm is with pointers, while loop, variables, and conditional statement. However this solutions will only work if the array is sorted. Therefore you most sort the array first. With the pointers you will set a start pointer that start that will move to the right and a end pointer that will move to the left. The while loop is to keep checking as log as the two pointer have not crossed each each other. The conditional statement will check if two numbers are equal to the target if they are not the pointers will need to move.</p>
                            <pre>
                                <button  onClick={() => navigator.clipboard.writeText(twoSumPointers)}>Copy</button>
                                <code>
                                    {twoSumPointers}
                                </code>
                            </pre>                    
                        </li>
                    
                    
                
                    </ul>
            </section>
            {/* Validate Subsequence */}
            <section id='ValidateSubsequenceSection'>
                <header>
                        <h2>2. Validate Subsequence</h2>
                        <h3>Problem: </h3>
                        <p>Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.</p>
                        <h3>Conceptualization:</h3>
                        <p>The question is asking if an array "sequence" is arrange in a in the same order of an other array. You will need to return if the it is true or false if the array is a sequence of an other array. There are two ways to solve this algorithm</p>
                        <h3>Category</h3>
                        <p>Arrays</p>
                        <aside>
                            <h3>Try it</h3>
                            <code>
                                <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceExample)}>Copy</button>
                                    <code>
                                        {validationSubsequenceExample}
                                    </code>
                                </pre>    
                            </code>
                        </aside>
                    </header>

                    <ul>
                        <li>
                        <h4>Solution 1: Value</h4>    
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit explicabo perspiciatis quam, culpa non earum tempore. Illum itaque corporis quia excepturi ut impedit corrupti blanditiis ipsam? Recusandae ab deserunt voluptatum?</p>
                            <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceS1)}>Copy</button>
                                <code>
                                    {validationSubsequenceS1}
                                </code>
                            </pre>                    
                        </li>
                        <li>

                        <h4>Solution 2: Pointer</h4>    
                        <p>The second solutions is use variables pointers, while loop, and a conditional statement. The pointers will be set at the start of each array. The while loop will be use to keep looping both arrays. The conditional statement will check if </p>
                            <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceS2)}>Copy</button>
                                <code>
                                    {validationSubsequenceS2}
                                </code>
                            </pre>                    
                        </li>
                </ul>
            </section>


                    {/* Sorted Squared Array */}
            <section id='SortedSquaredArray'>
                <header>
                        <h2>3. Sorted Squared Array</h2>
                        <h3>Problem: </h3>
                        <p>Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.</p>
                        <h3>Conceptualization:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas recusandae autem assumenda reiciendis incidunt est animi error earum accusamus qui laudantium, dolorem, ab minima cupiditate maxime voluptatem ullam facilis?</p>
                        <aside>
                            <h3>Try it</h3>
                            <code>
                                <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceExample)}>Copy</button>
                                    <code>
                                        {validationSubsequenceExample}
                                    </code>
                                </pre>    
                            </code>
                        </aside>
                    </header>

                    <ul>
                        <li>
                        <h4>Solution 1: </h4>    
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit explicabo perspiciatis quam, culpa non earum tempore. Illum itaque corporis quia excepturi ut impedit corrupti blanditiis ipsam? Recusandae ab deserunt voluptatum?</p>
                            <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceS1)}>Copy</button>
                                <code>
                                    {validationSubsequenceS1}
                                </code>
                            </pre>                    
                        </li>
                        <li>

                        <h4>Solution 2: Pointers</h4>    
                        <p>The second solutions is use variables pointers, while loop, and a conditional statement. The pointers will be set at the start of each array. The while loop will be use to keep looping both arrays. The conditional statement will check if </p>
                            <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceS2)}>Copy</button>
                                <code>
                                    {validationSubsequenceS2}
                                </code>
                            </pre>                    
                        </li>
                </ul>
            </section>

            
            {/*NonConstructibleChange*/}
            <section id='NonConstructibleChange'>
                <header>
                        <h2>3.Non-Constructible Change</h2>
                        <h3>Problem: </h3>
                        <p>Given an array of positive integers representing the values of coins in yourpossession, write a function that returns the minimum amount of change (the minimum sum of money) that you </p>
                        <h3>Conceptualization:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas recusandae autem assumenda reiciendis incidunt est animi error earum accusamus qui laudantium, dolorem, ab minima cupiditate maxime voluptatem ullam facilis?</p>
                        <h3>Category</h3>
                        <p>Arrays</p>
                        <aside>
                            <h3>Try it</h3>
                            <code>
                                <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceExample)}>Copy</button>
                                    <code>
                                        {validationSubsequenceExample}
                                    </code>
                                </pre>    
                            </code>
                        </aside>
                    </header>

                    <ul>
                        <li>
                        <h4>Solution 1: </h4>    
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit explicabo perspiciatis quam, culpa non earum tempore. Illum itaque corporis quia excepturi ut impedit corrupti blanditiis ipsam? Recusandae ab deserunt voluptatum?</p>
                            <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceS1)}>Copy</button>
                                <code>
                                    {validationSubsequenceS1}
                                </code>
                            </pre>                    
                        </li>
                        <li>

                        <h4>Solution 2: Pointers</h4>    
                        <p>The second solutions is use variables pointers, while loop, and a conditional statement. The pointers will be set at the start of each array. The while loop will be use to keep looping both arrays. The conditional statement will check if </p>
                            <pre>
                                <button  onClick={() => navigator.clipboard.writeText(validationSubsequenceS2)}>Copy</button>
                                <code>
                                    {validationSubsequenceS2}
                                </code>
                            </pre>                    
                        </li>
                </ul>
            </section>
        </main>


    </div>
  )
}

EasyAlgos.propTypes = {}

export default EasyAlgos
