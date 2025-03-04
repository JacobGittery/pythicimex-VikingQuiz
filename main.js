const allQuizzes = [
    [
        { question: "What was Ragnar Lothbroks profession before his rise?", options: ["He was a farmer", "He was a builder", "He was a politician"], answer: "He was a farmer"},
        { question: "Who was Ragnar Lothbroks first born son?", options: ["Ivar the Boneless", "Björn Ironside", "Sigurd Snake-in-the-Eye"], answer: "Björn Ironside"},
        { question: "When Ragnar first discovered England, which monastary did he plunder?", options: ["Lindisfarne", "Jarrow & Monkwearmouth", "Iona"], answer: "Lindisfarne"},
        { question: "What is the name of Ragnars first wife?", options: ["Aslaug", "Lagertha", "Helga"], answer: "Lagertha"},
        { question: "What is the name of the Christian monk that Ragnar befriends?", options: ["Athelstan", "Alfred", "Ecbert"], answer: "Athelstan"},
        { question: "What does the 'Blood Eagle' punishment involve", options: ["Beheading", "Coating an eagle in blood", "Cutting the ribs and lungs open from the back"], answer: "Cutting the ribs and lungs open from the back"}
],
    [
        { question: "What is the name of the god of oceans and fishing?", options: ["Tyr", "Njord", "Jörmundgandr"], answer: "Njord"},
        { question: "What are the names of Odins two ravens?", options: ["Geri and Freki", "Mumin and Hurin", "Hugin and Munin"], answer: "Hugin and Munin"},
        { question: "Who created Mjolnir?", options: ["Thor and Odin", "Skrýmir and Mímir", "Sindri and Brokkr"], answer: "Sindri and Brokkr"},
        { question: "Who was the first being in existance?", options: ["Odin", "Ymir", "Fenrir"], answer: "Ymir"},
        { question: "What is the name of the event that brings about the end of the world?", options: ["Ragnarok", "Hjaðningavíg", "Æsir–Vanir War"], answer: "Ragnarok"},
        { question: "Which creature pulls Thor's chariot?", options: ["Wolves", "Goats", "Boars"], answer: "Goats"}
    ] 
];

let currentQuestion = 0;
let score = 0;

function startQuiz(index) {
    currentQuestion = 0;
    currentQuiz = allQuizzes[index];
    score = 0;
    document.querySelector(".quizContainer").classList.add("hidden");
    document.getElementById("question").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("resultFeedback").classList.add("hidden");
    document.getElementById("quizSection").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("quizSection").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const quiz = currentQuiz[currentQuestion];
    document.getElementById("question").innerText = quiz.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    quiz.options.forEach(option => {
        const button = document.createElement("button")
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === currentQuiz[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
        loadQuestion();
    } else {
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").innerText = `You scored ${score} out of ${currentQuiz.length}!`;
        let percentageCorrect = (score / currentQuiz.length) * 100;
        if (percentageCorrect == 100) {
            document.getElementById("resultFeedback").innerText = "Great job! Full score!";
        } else if (percentageCorrect >= 75) {
            document.getElementById("resultFeedback").innerText = `Only ${currentQuiz.length - score} more to go! You can do it! Try again!`;
        } else if (percentageCorrect >= 40) {
            document.getElementById("resultFeedback").innerText = "Nice work! You are on your way to become a true viking!";
        } else if (percentageCorrect >= 5) {
            document.getElementById("resultFeedback").innerText = "You can do better, I believe in you!";
        }
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("resultFeedback").classList.remove("hidden");
        document.getElementById("question").classList.add("hidden");
        restartButton = document.getElementById("restart");
        document.getElementById("restart").classList.remove("hidden");
        restartButton.addEventListener("click", (event) => {
            document.querySelector(".quizContainer").classList.remove("hidden");
            document.getElementById("restart").classList.add("hidden");
            document.getElementById("result").classList.add("hidden");
            document.getElementById("resultFeedback").classList.add("hidden");
            document.getElementById("quizSection").style.backgroundColor = "transparent";
            document.getElementById("quizSection").classList.add("hidden");
        })
    }
}