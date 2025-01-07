const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      answer: "Harper Lee"
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "Who is the founder of Facebook?",
        options: ["Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Larry Page"],
        answer: "Mark Zuckerberg"
    },
    {
        question: "Who is the founder of Microsoft?",
        options: ["Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Larry Page"],
        answer: "Bill Gates"
    },
    {
        question: "Who is the founder of Apple?",
        options: ["Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Larry Page"],
        answer: "Steve Jobs"
    },
    {
        question: "Who is the founder of Google?",
        options: ["Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Larry Page"],
        answer: "Larry Page"
    },
    {
        question: "Who is the founder of Amazon?",
        options: ["Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Larry Page"],
        answer: "Jeff Bezos"
    },
    {
        question: "Who is the founder of Tesla?",
        options: ["Mark Zuckerberg", "Elon Musk", "Steve Jobs", "Larry Page"],
        answer: "Elon Musk"
    },
    {
        question: "Who is the founder of SpaceX?",
        options: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Larry Page"],
        answer: "Elon Musk"
    },
    {
        question: "Who is the founder of Twitter?",
        options: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Jack Dorsey"],
        answer: "Jack Dorsey"
    },
    {
        question: "Who is the founder of Instagram?",
        options: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Kevin Systrom"],
        answer: "Kevin Systrom"
    },
    {
        question: "Who is the founder of WhatsApp?",
        options: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Jan Koum"],
        answer: "Jan Koum"
    },
    {
        question: "Who is the founder of LinkedIn?",
        options: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Reid Hoffman"],
        answer: "Reid Hoffman"
    },
    {
        question: "Who is the founder of Snapchat?",
        options: ["Mark Zuckerberg", "Bill Gates", "Evan Spiegel", "Larry Page"],
        answer: "Evan Spiegel"
    },
    {
        question: "Who is the founder of YouTube?",
        options: ["Mark Zuckerberg", "Bill Gates", "Chad Hurley", "Larry Page"],
        answer: "Chad Hurley"
    },
    {
        question: "Who is the founder of TikTok?",
        options: ["Mark Zuckerberg", "Bill Gates", "Zhang Yiming", "Larry Page"],
        answer: "Zhang Yiming"
    },
    {
        question: "Who is the founder of Uber?",
        options: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Travis Kalanick"],
        answer: "Travis Kalanick"
    },
    {
        question: "Who is the founder of Airbnb?",
        options: ["Mark Zuckerberg", "Brian Chesky", "Elon Musk", "Larry Page"],
        answer: "Brian Chesky"
    },
    {
        question: "Who is the founder of Netflix?",
        options: ["Mark Zuckerberg", "Bill Gates", "Reed Hastings", "Larry Page"],
        answer: "Reed Hastings"
    },
    {
        question: "Who is the founder of Wikipedia?",
        options: ["Mark Zuckerberg", "Bill Gates", "Jimmy Wales", "Larry Page"],
        answer: "Jimmy Wales"
    },
    {
        question: "Who is the founder of Reddit?",
        options: ["Mark Zuckerberg", "Bill Gates", "Steve Huffman", "Larry Page"],
        answer: "Steve Huffman"
    },
    {
        question: "Who is the founder of Quora?",
        options: ["Mark Zuckerberg", "Bill Gates", "Adam D'Angelo", "Larry Page"],
        answer: "Adam D'Angelo"
    },
    {
        question: "Who is the founder of Pinterest?",
        options: ["Mark Zuckerberg", "Bill Gates", "Ben Silbermann", "Larry Page"],
        answer: "Ben Silbermann"
    },
    {
        question: "Who is the founder of Slack?",   
        options: ["Mark Zuckerberg", "Bill Gates", "Stewart Butterfield", "Larry Page"],
        answer: "Stewart Butterfield"
    },
    {
        question: "Who is the founder of Zoom?",
        options: ["Mark Zuckerberg", "Bill Gates", "Eric Yuan", "Larry Page"],
        answer: "Eric Yuan"
    },
    {
        question: "Who is the founder of Alibaba?",
        options: ["Mark Zuckerberg", "Jack Ma", "Elon Musk", "Larry Page"],
        answer: "Jack Ma"
    },
    {
        question: "Who is the founder of Baidu?",
        options: ["Mark Zuckerberg", "Bill Gates", "Robin Li", "Larry Page"],
        answer: "Robin Li"
    }

  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>${question.question}</h2>
      ${question.options.map((option, index) => `
        <button onclick="checkAnswer('${option}')">${option}</button>
      `).join('')}
    `;
  }
  
  function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
    }
  
    document.getElementById("score").textContent = `Score: ${score}`;
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      alert(`Quiz finished! Your score is: ${score}`);
    }
  }
  
  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    }
  });
  
  displayQuestion();
  