
let listcontainer=document.getElementById("list_container")
let inp=document.getElementById("inp")


function add(){
    
    if (inp.value===''){
        alert("Write Something")
    }
    else{
        
        let div=document.createElement("div")
       
        div.classList.add("tododiv")
        listcontainer.appendChild(div)

        let li=document.createElement("input")
        console.log(inp.value)
        li.value=inp.value
        
        // li.setAttribute("read-only",true)
        li.readOnly=true
        div.appendChild(li)


        let btn=document.createElement("button")
        btn.textContent="Delete"
        btn.classList.add("todobutton")
        div.appendChild(btn)
        
        btn.addEventListener("click",deleteme)

        let updatebtn=document.createElement("button")
        updatebtn.textContent="Update"
        updatebtn.classList.add("todoupbutton")
       div.appendChild(updatebtn)
        updatebtn.addEventListener("click",(e)=>{
            //inp.value=updatebtn.parentElement.firstChild.innerHTML
            
            // prev=updatebtn.parentElement.firstChild.innerHTML
            // text= prompt("Enter todo")
            // console.log(prev)
            // console.log(text)
            // newtodo=prev+text
            // console.log(newtodo)
            // li.textContent=newtodo
            if(li.readOnly){
                li.readOnly=false
            }
            else{
                li.readOnly=true
            }

        })
        
        
    }
    inp.value=''
    
}

// function addnew(){
//     prev=updatebtn.parentElement.firstChild.innerHTML
//    text= prompt("Enter todo")
//    console.log(prev)
//    console.log(text)
// }
function deleteme(e){
 
e.target.parentElement.remove()
}

