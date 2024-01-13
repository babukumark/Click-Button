"use strict"

const btn1=document.getElementById("button1");
const btn2=document.getElementById("button2");
const btn3=document.getElementById("button3");

let btns = document.querySelectorAll("button");
// console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", function() {
    if (btn.innerText === "click") {
      btn.style.backgroundColor = "red";
      btn.innerText = "clicked";
    }
    else if (btn.innerText === "clicked") {
      btn.innerText = "click"
      btn.style.background = "blueviolet"
    }
  });
});
// btn1.addEventListener("click",colorchange)

//   function colorchange()
// {
//     if(btn1.innerText==="click"){
//       btn1.style.backgroundColor="red";
//         btn1.innerText="clicked";   
//     }
//     else if(btn1.innerText==="clicked")
//     {
//         btn1.innerText="click"
//         btn1.style.background="blueviolet"
//         // btn1.style.color="white"
//     }

// }

// btn2.addEventListener("click",clrch)
//   function clrch()
// {
//   if(btn2.innerText==="click"){
//   btn2.style.backgroundColor="red";
//     btn2.innerText="clicked";
//   }
//   else if(btn2.innerText==='clicked'){
//     btn2.innerText='click';
//     btn2.style.background='blueviolet'
//   }
// }
    

// btn3.addEventListener("click",changeclr)

//   function changeclr()
// {
//   if(btn3.innerText==="click"){
//     btn3.style.backgroundColor="red";
//     btn3.innerHTML="clicked";
//   }
//   else if(btn3.innerText==='clicked'){
//     btn3.innerText='click';
//     btn3.style.background='blueviolet'
//   }
  
// }




