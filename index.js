  //function valuebutton(e){
    //calculatorform.screen.value += e.value;
//}


const output=document.querySelector(".output");
const _exp =document.querySelector(".exp");

const a=eval(1+99/5);
console.log(a);

let exp="";
function makeexp(i){
 
  exp=exp+i;
  console.log("exp",exp);
  _exp.textContent=exp;
}
function calculate(){
  if(exp ==="" || exp==="+" ||exp ==="-"||exp==="/"||exp==="*"||exp==="%")
  {
output.textContent="error"
  }
  else
{
  const result=eval(exp);
  output.textContent=result;
}}

function clearAll(){
   output.textContent= "-";
  _exp.textContent="0";
  exp="";
}
function calculatesqroot(){
  const result=Math.sqrt(exp);
  output.textContent= result;
}
function lastremove()

{
  exp=exp.slice(0,-1);
  _exp.textContent=exp;
}