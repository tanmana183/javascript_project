const questionbox=document.getElementById("questionbox")
const answ=document.getElementById("answer")
const next=document.getElementById("next")
const questions=[
    {
        question:"What is the name of India's national bird?",
        answer:[
            {text:"owl",correct:false},
            {text:"peacock",correct:true},
            {text:"crow",correct:false},
            {text:"sparrow",correct:false}
        ]
    },
    {
        question:"What is the name of India's national fruit?",
        answer:[
            {text:"pineapple",correct:false},
            {text:"mango",correct:true},
            {text:"litchie",correct:false},
            {text:"guava",correct:false}
        ]
    },
]

let index = 0
let score = 0
function start() {

    next.innerHTML = "Next"
    showquestion()
}
function showquestion() {

    prev = questions[index]
    currentquestion = prev.question
    qno = index + 1
    // console.log(prev.answer)
    questionbox.innerHTML = qno + ". " + currentquestion;
    prev.answer.forEach(element => {
        console.log(element.text)
        const button = document.createElement("button")
        button.innerHTML = element.text
        button.classList.add("ans")
        answ.appendChild(button)
        button.addEventListener("click",selectans)
    });
}
function selectans(e){
    
}
start()




