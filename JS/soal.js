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

// Penambahan hasil cek dengan variabel Result
const Result = [
  {
    rekomendasi:
      "pertahankan kondisi ini dan hindari makanan dan minuman tinggi gula",
  },
  {
    rekomendasi:
      "kurangi kondisi ini dan hindari makanan dan minuman tinggi gula",
  },
  {
    rekomendasi:
      "Hentikan kondisi ini dan hindari makanan dan minuman tinggi gula",
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
// Pendefinisian nomor result
let currentRek1 = 0;
let currentRek2 = 1;
let currentRek3 = 2;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  no.innerText = currentQuizData.nomor;
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
}

// Penambahan function loadResult
function loadResult1() {
  let currentRekomendasi = Result[currentRek1];
  quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>LOW CATEGORY</h1></h2>
        
        <p>${currentRekomendasi.rekomendasi}</p>
        <button onclick="location.href='index.html'">Kembali</button>
        `;
}
function loadResult2() {
  let currentRekomendasi = Result[currentRek2];
  quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>LOW CATEGORY</h1></h2>
        
        <p>${currentRekomendasi.rekomendasi}</p>
        <button onclick="location.href='index.html'">Kembali</button>
        `;
}
function loadResult3() {
  let currentRekomendasi = Result[currentRek3];
  quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>LOW CATEGORY</h1></h2>
        
        <p>${currentRekomendasi.rekomendasi}</p>
        <button onclick="location.href='index.html'">Kembali</button>
        `;
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
        quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>LOW CATEGORY</h1></h2>
        
        <button onclick="location.href='index.html'">Kembali</button>
        <button onclick="loadResult1()">Result</button>

        `;
      } else if (akhir < 80) {
        quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>MEDIUM CATEGORY</h1></h2>
        
        <button onclick="location.href='index.html'">Kembali</button>
        <button onclick="loadResult2()">Result</button>
        `;
      } else {
        quiz.innerHTML = `<h2> ${akhir} % Have Diabetes, Entered the <h1>HIGH CATEGORY</h1></h2>
        
        <button onclick="location.href='index.html'">Kembali</button>
        <button onclick="loadResult3()">Result</button>

        `;
        // <button onclick="location.reload()">Reload</button>
      }
    }
  }
});
