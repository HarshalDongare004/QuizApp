const quizData = [
    {
        question: " Which type of language Javascript is ? ",
        a: "Procedural",
        b: "Object-Based",
        c: "Object-Oriented",
        d: "None of the above",
        correct :  "c"
    } ,{
        question: " How you define a variabel in javascript?",
        a: "let",
        b: "var",
        c: "Both A and B",
        d: "None",
        correct :"c"
    },{
        question: "Which of te following methods to access HTML elements using Javascript? ",
        a: "getElementById()",
        b: "getElementByClassName()",
        c: "Both A and B",
        d: "None",
        correct :"c"
    },{
        question: " Upon encounter empty statement, what does the javascript interpretor do? ",
        a: "Throw an error",
        b: "Gives a warning",
        c: "Ignores the statement",
        d: "None",
        correct :"c"
    },{
        question: "Which of the following methods can be used to display data in some form using javascript? ",
        a: "document.write()",
        b: "Window.alert()",
        c: "console.log()",
        d: "All of the above",
        correct :"d"
    },{
        question: "How can a datatype be declared to be a constantype? ",
        a: "let",
        b: "var",
        c: "const",
        d: "constant",
        correct :"c"
    },{
        question: "What does the toLocateString() methods do in JS? ",
        a: "Return a parsed string",
        b: "Return a localised object representation",
        c: "Return a localized  string representation of an object.",
        d: "None of the above.",
        correct :""
    },{
        question: " The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
        a: "Object Encapsulation",
        b: "Object Inheritance",
        c: "object Serialization",
        d: "None of the above",
        correct :"c"
    },{
        question: " Which function is used to serialize an object into a JSON string in Javascript?",
        a: "parse()",
        b: "convert()",
        c: "stringify()",
        d: "None of the above",
        correct :""
    },{
        question: "Which of the following are closures in Javascript?",
        a: "objects",
        b: "Functions",
        c: "Variables",
        d: "All of the above",
        correct :"d"
    },
    {
        question: " What keyword is used to declare an asynchronous function in Javascript?",
        a: "async",
        b:"await",
        c:"setTimeout",
        d:"None of the above",
        correct: "a"
    },
    {
        question:"What does … operator do in JS?",
        a:"used to spread iterables to individual elements",
        b:"used to describe a datatype of undefined size",
        c: "No such operator exists",
        d: "None of the above",
        answer: "a"
    },
    {
        question:"Which object in Javascript doesn’t have a prototype?",
        a:"Basic Object",
        b:"All objects have a prototype",
        c:"None of the objects have a prototype",
        d:"None of the above",
        answer: "a"
    },{
        question:"Which of the following are not server-side Javascript objects?",
        a:"Date",
        b:"FileUpload",
        c:"Function",
        d:"All of the above",
        answer: "d"
    }

];
const quiz= document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
// let answer = undefined;
let score = 0;

// loadQuestion = 0;

loadQuiz();


function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  


}

function getSelected() {
    // console.log('hlo');
    

    let answer = undefined;

    answerEls.forEach((answerEl)=> {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;

    
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    
    })
}
    
 
submitBtn.addEventListener("click", () => {
    // ceck to see answer

    const answer = getSelected();



    
    //correct and next
        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
        


            if(currentQuiz < quizData.length) {
            loadQuiz();

            } else {
                quiz.innerHTML =`
                <h2> You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick = "location.reload()">Reload</button>
                `;
            }

        }

});