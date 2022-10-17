import React from 'react'

function EasyAlgos({}) {


    const twoSumExample = `
    array = [3, 5, -4, 8, 11, 1, -1, 6];
    targetSum = 10;

    function twoNumberSum(array, targetSum) {
        // code here
    }
    `
    const twoSumNested = `
    function twoSumNested(array, targetSum) {
        const newArrayResult = [];
        console.log("targetNumber:", targetSum)
        
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

    const twoSumSorted = `
    var twoSum = function(nums, target) {
        function sortNumber(a,b){
            return a - b;
        }
        
        nums.sort(sortNumber);
        console.log("sorted array", nums);
        
        leftPointer = 0;
        rightPointer = nums.length -1;
        
        while(leftPointer < rightPointer){
            let currentSum = nums[leftPointer] + nums[rightPointer];
            
            if(currentSum === target){
                console.log("found two sums", leftPointer, rightPointer);
                return [[leftPointer], [rightPointer]]
            }else if(currentSum < target){
                console.log("move left pointer");        
                leftPointer += 1;
            }else if(currentSum > target){
                console.log("move right pointer");
                rightPointer -= 1;
            }
            
            
        }
        
        return;  
       
    };
    
    `
    


  return (
    <div className='algorithm-container'>
        <h1>Easy Algorithms</h1>
        <section>
            <header>
                <h2>1. Two number sum</h2>
                <h3>Questions: </h3>
                <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
                <h3>Example:</h3>
                <p>array: [2,7,11,15] target: 9 </p>
                <h3>Solutions:</h3>
                <p>There is 3 ways to solve this algorithm. The questions may ask you to return the index or the numbers that equal to the target, therefore make sure that your return is either the numbers or the index's.</p>
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
                    <h4>Solution 1</h4>    
                    <p>One way to solve this algorithm is with nested loops, a new array, and a conditional statement.</p>
                        <pre>
                            <button  onClick={() => navigator.clipboard.writeText(twoSumNested)}>Copy</button>
                            <code>
                                {twoSumNested}
                            </code>
                        </pre>                    
                    </li>

                    <li>
                    <h4>Solution 2</h4>    
                        <pre>
                            <button  onClick={() => navigator.clipboard.writeText(twoSumSorted)}>Copy</button>
                            <code>
                                {twoSumSorted}
                            </code>
                        </pre>                    
                    </li>

                    <li>
                    <h4>Solution 3</h4>    
                        <pre>
                            <button  onClick={() => navigator.clipboard.writeText(twoSumSorted)}>Copy</button>
                            <code>
                                {twoSumSorted}
                            </code>
                        </pre>                    
                    </li>
                
                
              
                </ul>
        </section>

        <section>
        <header>
                <h2>1. Two number sum</h2>
                <h3>Questions: </h3>
                <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
                <h3>Example:</h3>
                <p>array: [2,7,11,15] target: 9 </p>
                <h3>Solutions:</h3>
                <p>There is 3 ways to solve this algorithm. The questions may ask you to return the index or the numbers that equal to the target, therefore make sure that your return is either the numbers or the index's.</p>
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
                    <h4>Solution 1</h4>    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit explicabo perspiciatis quam, culpa non earum tempore. Illum itaque corporis quia excepturi ut impedit corrupti blanditiis ipsam? Recusandae ab deserunt voluptatum?</p>
                        <pre>
                            <button  onClick={() => navigator.clipboard.writeText(twoSumSorted)}>Copy</button>
                            <code>
                                {twoSumSorted}
                            </code>
                        </pre>                    
                    </li>
            </ul>
        </section>


    </div>
  )
}

EasyAlgos.propTypes = {}

export default EasyAlgos
