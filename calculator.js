let value
let nobtn=[];
let output=document.querySelector(".output");
 let clr=document.getElementById("c");
 clr.addEventListener("click",()=>{
     let lnth=value.length;
        value=value.substring(0,lnth-1);
        output.innerText=value;
 })
 let del=document.getElementById("del");
 del.addEventListener("click",()=>{
    value='';
    output.innerText=value;
 })
for (let index = 0; index <=9; index++) {
   nobtn[index]=document.getElementById(index);
    
}
let dot=document.getElementById(".");
dot.addEventListener("click",()=>{
    value=output.innerText+dot.innerText;
    output.innerText=value;
 dot.disabled=true;
})
for (let index = 0; index <=9; index++) {
    nobtn[index].addEventListener("click",()=>{
         value=output.innerText+nobtn[index].innerText;
         output.innerText=value;
      });
    
}
let optr='';
let num1="",num2="",result;

let plus=document.getElementById("p");
plus.addEventListener("click",()=>{
    num1=output.innerText;    
   optr='+';
   value="";
   output.innerText=value;
})
let mins=document.getElementById("-");
mins.addEventListener("click",()=>{
    num1=output.innerText;
   optr='-';
   value='';
   output.innerText=value;
})
let mult=document.getElementById("x");
mult.addEventListener("click",()=>{
    num1=output.innerText;
   optr='x';
   value='';
   output.innerText=value;
})
let divid=document.getElementById("/");
divid.addEventListener("click",()=>{
    num1=output.innerText;
   optr='/';
   value='';
   output.innerText=value;
})
let pow=document.getElementById("pow");

pow.addEventListener("click",()=>{
    num1=output.innerText;
    optr='^';
    value='';
    output.innerText=value;

})
let eql=document.getElementById("e");
eql.addEventListener("click",()=>{
    num2=output.innerText;
    switch (optr) {
        case '+':
                     result= Number( num1)+Number( num2);

            break;
            case '-':
                result= Number( num1)-Number( num2);

       break;
       case 'x':
                result= Number( num1)*Number( num2);

       break;
       
       case '/':
                result= Number( num1)/Number( num2);

       break;
       
       case '^':
                num1= Number( num1); 
                num2=Number( num2);
                result=Math.pow(num1,num2);

       break;
        default:
            break;
    }
   output.innerText=result;
})
let cos=document.getElementById("cos");

cos.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.cos(num1);
    
   output.innerText=result;
})
let sin=document.getElementById("sin");

sin.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.sin(num1);
   
   output.innerText=result;
})
let tan=document.getElementById("tan");

tan.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.tan(num1);
   
   output.innerText=result;
})
let cosh=document.getElementById("cosh");

cosh.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.cosh(num1);
 
   output.innerText=result;
})
let sinh=document.getElementById("sinh");

sinh.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.sinh(num1);
   
   output.innerText=result;
})
let tanh=document.getElementById("tanh");

tanh.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.tanh(num1);
    
   output.innerText=result;
})

let sqrt=document.getElementById("sqr");

sqrt.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.sqrt(num1);
    
   output.innerText=result;
})

let log=document.getElementById("log");

log.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.log10(num1);

   output.innerText=result;
})


let ln=document.getElementById("ln");

ln.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    result=Math.log(num1);

   output.innerText=result;
})
let pi=document.getElementById("pi");
pi.addEventListener("click",()=>{
   
    result=Math.PI;

   output.innerText=result;
})
let fac=document.getElementById("!");

fac.addEventListener("click",()=>{
    num1=output.innerText;
    num1=Number(num1);
    let a=1;
   for (let index = 1; index <= num1; index++) {
    
       a=a*index;
              
    
   }
    result=a;
   output.innerText=result;
})

