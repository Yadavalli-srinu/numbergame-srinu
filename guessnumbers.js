let random=Math.ceil(Math.random()*100);
let text=document.getElementById("text1")
let result=document.getElementById("result")
function guess(){
    let usergues=Number(text.value);
    if (usergues==random){
       result.textContent="correct";
       result.style.color="white";
       result.style.fontSize="40px";
    }else if(usergues<random){
        result.textContent="Oops! Too Low"
        result.style.color="white";
        result.style.fontSize="40px";
    }else{
        result.textContent="Oops Too high";
        result.style.color="white";
        result.style.fontSize="40px";
   }
}