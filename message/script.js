const inp=document.getElementById("inp");
const eye=document.getElementById("eye");

function change(){
    if (inp.type=="password"){
        inp.type="text"
        eye.classList.remove('fa-solid','fa-eye-slash')
        eye.classList.add('fa-solid','fa-eye')
    }
    else{
        inp.type="password"
        eye.classList.remove('fa-solid','fa-eye')
        eye.classList.add('fa-solid','fa-eye-slash')
    }
}
function dark(){
    document.getElementsByClassName("box").style.color="black"
}