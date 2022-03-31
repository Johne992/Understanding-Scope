let a = "global";
 function outer(){
  let b = "outer";
   function inner(){
    let c = "inner";
     console.log(b);
  }
  inner();
  }
  outer();


