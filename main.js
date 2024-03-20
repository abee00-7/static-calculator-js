// display content in calcscreen
const displaycontent=(content)=>{
    calcscreen.value+=content

}
const clearallcontent=()=>{
    calcscreen.value=""
}
const showresult=()=>{
    try{
        console.log("tyr block");
        calcscreen.value=eval(calcscreen.value)
    }catch(err){
        console.log("catch block");
        console.log(err);
        calcscreen.value=""
        calcscreen.placeholder="invalid expression"

    }finally{
        console.log("finally block:task completed");
    }
    
}