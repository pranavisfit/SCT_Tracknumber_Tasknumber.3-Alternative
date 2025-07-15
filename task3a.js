const questions = [
    { q: "Who is the Prime Minister of India?", o: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"], a: "Narendra Modi" },
    { q: "What is the capital of Australia?", o: ["Sydney", "Melbourne", "Canberra", "Perth"], a: "Canberra" },
    { q: "Who invented the telephone?", o: ["Edison", "Newton", "Alexander Graham Bell", "Tesla"], a: "Alexander Graham Bell" },
    { q: "Which planet is known as the Red Planet?", o: ["Venus", "Mars", "Jupiter", "Saturn"], a: "Mars" },
    { q: "Who was the first President of USA?", o: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"], a: "George Washington" },
    { q: "What is the currency of Japan?", o: ["Yuan", "Won", "Dollar", "Yen"], a: "Yen" },
    { q: "Which is the largest ocean?", o: ["Atlantic", "Indian", "Pacific", "Arctic"], a: "Pacific" },
    { q: "HTML stands for?", o: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Mark Language"], a: "Hyper Text Markup Language" },
    { q: "Who discovered gravity?", o: ["Einstein", "Newton", "Galileo", "Copernicus"], a: "Newton" },
    { q: "Which device is used to measure temperature?", o: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], a: "Thermometer" },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  const playAgainBtn = document.getElementById("play-again");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = "";
    q.o.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].a;
    if (selected === correct) score++;
    nextBtn.style.display = "inline-block";
    Array.from(optionsEl.children).forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) btn.style.background = "#a5d6a7";
      else if (btn.textContent === selected) btn.style.background = "#ef9a9a";
    });
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
      nextBtn.style.display = "none";
    } else {
      showScore();
    }
  };
  
  function showScore() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
    playAgainBtn.style.display = "inline-block";
  }
  
  playAgainBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = "";
    playAgainBtn.style.display = "none";
    showQuestion();
  };
  
  showQuestion();