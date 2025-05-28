function show() {
    document.getElementById("subject").style.display = "block";
}
let question
let questionbu = [
    {
        text: "What is the full meaning of HTML?",
        options: ["Hyper Text Marking Language", "Hyper Text Markup Language", "Hyper Transfer Marketing Language", "Help Teaching Markup Learning"],
        answer: "Hyper Text Markup Language",
    },
    {
        text: "Which of this is not an HTML tag?",
        options: ["strong", "p", "que", "form"],
        answer: "que",
    },
    {
        text: "Which of this is not a CSS type?",
        options: ["Online", "Inline", "External", "Internal"],
        answer: "Online",
    },
    {
        text: "Selcet the odd one",
        options: ["border", "margin", "padding", "body"],
        answer: "body",
    }
]
let questionmth = [
    {
        text: "Solve dy/dx of 5x",
        options: ["5x^2", "5", "x^2", "none of the above"],
        answer: "5",
    },
    {
        text: "5(2x-3) dy/dx =",
        options: ["5x", "2x-3", "10", "10x"],
        answer: "10",
    },
    {
        text: "What is the odd one?",
        options: ["Equal", "Even", "Odd", "Neither"],
        answer: "Equal",
    },
    {
        text: "y = 3x(5x+3x)^2. Find y when x=2",
        options: ["1024", "1344", "1664", "1536"],
        answer: "1536",
    }
]
const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");
const name = params.get("name");
function goToQuizPage() {
    let name = document.getElementById("name").value;
    alert("Welcome " + name)
    let sub = document.getElementById("course").value
    window.location.href = `Quizdom.html?name=${encodeURIComponent(name)}&subject=${sub}`;
}
question = [];

if (subject === "bu-seng") {
  question = questionbu;
} else {
  question = questionmth;
}

let currquest = 0
let score = 0
function quizquest() {
    const q = question[currquest];
    document.getElementById("Load").textContent = q.text;

    const optCont = document.getElementById("optCont")
    optCont.innerHTML = ""
    q.options.forEach(option => {
        const label= document.createElement("label")
        label.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}<br> `
        optCont.appendChild(label)
    })
}
function nextQuestion() {
    const selected = document.querySelector('input[name="option"]:checked')
    if(!selected) {
        alert("Please select an option")
        return
    }
    if(selected.value === question[currquest].answer) {
        score++
    }
    currquest++
    if(currquest < question.length){
        quizquest();
    } else {
        document.getElementById("Load").textContent = "Quiz Finished!";
        document.getElementById("score").textContent = `You scored: ${score} / ${question.length}`;
    }
    if(currquest == question.length - 1){
        document.getElementById("btn").textContent = "Submit"
    }
}
if (window.location.pathname.endsWith("Quizdom.html")) {
    window.onload = quizquest;
}
function goBack() {
    window.location.href="Quiz home.html"
}


    



