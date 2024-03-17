const boxes=document.querySelectorAll(".box")
const msgcontainer=document.getElementById("msgbox")
const msg=document.getElementById("msg")
let turn0=true;
const winpat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="O"
            turn0=false
            
        }
        else{
            box.innerHTML="X"
            turn0=true
            
        }
        box.disabled=true
        checkwinner();
    });
   
});
function checkwinner(){
    for(let pattern of winpat){
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                
                showwinner(pos1);
            }
        }
    }
}
function disbox(){
    for(let box of boxes ){
        box.disabled=true
    }
}
function showwinner(win){
    console.log("Win")
    msgcontainer.style.display="block"
    msg.innerHTML=`Congratulations,Winner is Player ${win}`
    disbox();
}