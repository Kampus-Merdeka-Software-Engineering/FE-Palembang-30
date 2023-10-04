const quizData = [
  {
    nomor: "1",
    question:
      "Apakah anda sering merasa haus yang berlebihan, walaupun sudah minum air putih dalam jumlah banyak? ",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "2",
    question:
      "Apakah anda lebih sering buang air kecil dari pada biasanya, terutama pada malam hari?",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "3",
    question:
      "Apakah anda sering merasa lapar dan diiringi dengan nafsu makan yang bertambah, tetapi terasa lemas dan mudah lelah?",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "4",
    question: "Apakah anda merasa fungsi penglihatan anda menjadi kabur? ",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "5",
    question: "Apakah anda merasakan gatal yang berlebih pada area kemaluan?",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "6",
    question:
      "Jika mengalami luka atau memar pada permukaan kulit, apakah penyembuhan luka berjalan dengan lambat?  ",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "7",
    question:
      "Apakah kulit anda terasa lebih kering dan terdapat bercak kulit gelap yang muncul pada area lipatan, seperti ketiak, leher?",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "8",
    question:
      "Apakah anda sering mengalami kesemutan, nyeri, atau mati rasa pada bagian tangan dan kaki?",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "9",
    question: "Apakah anda sering mengalami sariawan pada bagian mulut?",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
  {
    nomor: "10",
    question:
      "Apakah gejala-gejala tersebut semakin terasa memburuk dari waktu ke waktu?",
    a: "YA",
    b: "TIDAK",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const no = document.getElementById("nomor");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let akhir = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  no.innerText = currentQuizData.nomor;
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    akhir = score * 10;
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (akhir < 30) {
        quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>LOW category</h1></h2>
        
        <button onclick="location.reload()">Reload</button>
        
        <button onclick="location.href='index.html'">Kembali</button>
        `;
      } else if (akhir < 80) {
        quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>MEDIUM category</h1></h2>
        
        <button onclick="location.reload()">Reload</button>
        
        <button onclick="location.href='index.html'">Kembali</button>
        `;
      } else {
        quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>HIGH category</h1></h2>
        
        <button onclick="location.reload()">Reload</button>
        
        <button onclick="location.href='index.html'">Kembali</button>
        `;
      }
    }
  }
});
