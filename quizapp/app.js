const questionbox = document.getElementById("questionbox")
const answer = document.getElementById("answer")
const next = document.getElementById("next")
const quiz=document.getElementsByClassName("quizbox")
const questions = [
    {
        question: "What is the name of India's national bird?",
        answer: [
            { text: "owl", correct: false },
            { text: "peacock", correct: true },
            { text: "crow", correct: false },
            { text: "sparrow", correct: false }
        ]
    },
    {
        question: "What is the name of India's national fruit?",
        answer: [
            { text: "pineapple", correct: false },
            { text: "mango", correct: true },
            { text: "litchie", correct: false },
            { text: "guava", correct: false }
        ]
    },
    {
        question: "What is the name of India's national animal?",
        answer: [
            { text: "gorilla", correct: false },
            { text: "monkey", correct: true },
            { text: "donkey", correct: false },
            { text: "cow", correct: false }
        ]
    },
]

let index = 0
let score = 0
function start() {
    index = 0
    score = 0
    next.innerHTML = "Next"
    showquestion()
}
function showquestion() {

    resetstate()

    prev = questions[index]



    qno = index + 1

    questionbox.innerHTML = qno + ". " + questions[index].question;

    // console.log(prev.answer)
    questions[index].answer.forEach(element => {

        const button = document.createElement("button")
        button.innerHTML = element.text
        button.classList.add("ans")
        answer.appendChild(button)

        if (element.correct) {

            button.dataset.correct = element.correct

        }
        button.addEventListener("click", selectans)
    });
    
}
function resetstate() {
    next.style.display = "none"
    while (answer.firstChild) {
        answer.removeChild(answer.firstChild)
    }
}
function selectans(e) {
    const selectbtn = e.target

    const iscorrect = selectbtn.dataset.correct === "true"
    if (iscorrect) {
        selectbtn.classList.add("correct")
        score++;
    }
    else {
        selectbtn.classList.add("incorrect")
    }
    Array.from(answer.children).forEach(button => {

        if (button.dataset.correct === "true") {

            button.classList.add("correct")
        }
        button.disabled = true
    })
    next.style.display = "block"
}
function scoreshow() {

    resetstate();
    
    
    questionbox.innerHTML = `You scored ${score} out of ${questions.length}`
    
   
    next.innerHTML = "Play Again"
    next.style.display = "block"

    console.log("k")
    
    index = -1
    
}

function handlenext() {
    if (index < questions.length - 1) {

        index++;


        showquestion()


    }
    else {

        scoreshow()
    }
}
next.addEventListener("click", () => {
    next.innerHTML = "Next"
    if (index < questions.length) {
        handlenext();

    }
    else {
        start()
    }
})
start()




