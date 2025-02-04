/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
const calculate = (x,y) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
     if (x<0 || y<0) {
      reject("please enter positive numbers.")
    }else{
      setTimeout(() => {
         resolve(x+y);
      }, 500);
     
    } 
    },500);
  })
};
calculate(1,2)
.then((data)=>{
  console.log("the sum of the numbers is: ",data);
  
})
.catch((data)=>{
  console.log("you have rejected please try again",data);
  
});