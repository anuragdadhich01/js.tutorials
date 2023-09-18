// Immediately Invoked Function Expression (IIFE)

// (function chai (){
//     console.log(`DB CONNECTION`);
// })()

(  function chai() {
    //named IIFE
        console.log(`DB CONNECTION `);
    }
)(); 

( (name) => {
    console.log(`DB CONNECTION TWO ${name}`);
} )('Anuarg')


/*Js executive context
 {} ---> Globel this Ec  
  |--> Globel Executive Context
  |--> Function Executive Context
  |--> Eval  Executive Context
++++++++++++++++++++++++++++
  {}--> memory creative phase 
  
  */
  
