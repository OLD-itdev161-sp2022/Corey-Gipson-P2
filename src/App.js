import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";


function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "How many All Star Appearances does Kobe Bryant have?",
      answers: [
        {
          text: "16",
          correct: false,
        },
        {
          text: "18",
          correct: true,
        },
        {
          text: "19",
          correct: false,
        },
        {
          text: "17",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What city won the first NBA Championship?",
      answers: [
        {
          text: "Chicago",
          correct: false,
        },
        {
          text: "Los Angeles",
          correct: false,
        },
        {
          text: "Baltimore",
          correct: false,
        },
        {
          text: "Philadelphia",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Who was the hardest player to guard for Kobe Bryant?",
      answers: [
        {
          text: "Tracy McGrady",
          correct: false,
        },
        {
          text: "Kevin Durant",
          correct: true,
        },
        {
          text: "Allen Iverson",
          correct: false,
        },
        {
          text: "Michael Jordan",
          correct: false,
        },
      ],
    },

    {
      id: 4,
      question: "Who was Michael Jordan toughest defender?",
      answers: [
        {
          text: "Gary Payton",
          correct: false,
        },
        {
          text: "Joe Dumars",
          correct: true,
        },
        {
          text: "Dennis Rodman",
          correct: false,
        },
        {
          text: "Isaiah Thomas",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "What year was the Milwaukee Bucks 1st Championship?",
      answers: [
        {
          text: "1970",
          correct: false,
        },
        {
          text: "1971",
          correct: false,
        },
        {
          text: "1972",
          correct: true,
        },
        {
          text: "1974",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "Who scored the most career points in NBA History?",
      answers: [
        {
          text: "Lebron James",
          correct: false,
        },
        {
          text: "Kobe Bryant",
          correct: false,
        },
        {
          text: "Michael Jordan",
          correct: false,
        },
        {
          text: "Kareem Abdul-Jabbar",
          correct: true,
        },
      ],
    },

    {
      id: 7,
      question: "What year did Giannis win his 1st MVP?",
      answers: [
        {
          text: "2019",
          correct: true,
        },
        {
          text: "2020",
          correct: false,
        },
        {
          text: "2018",
          correct: false,
        },
        {
          text: "2021",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "What was Kobe Bryant middle name?",
      answers: [
        {
          text: "Michael",
          correct: false,
        },
        {
          text: "Bean",
          correct: true,
        },
        {
          text: "Robert",
          correct: false,
        },
        {
          text: "Nathaniel",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "Who was the number 1 pick in 1984?",
      answers: [
        {
          text: "Hakeem Olajuwon",
          correct: true,
        },
        {
          text: "Michael Jordan",
          correct: false,
        },
        {
          text: "John Stockton",
          correct: false,
        },
        {
          text: "Charles Barkley",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "What year did Michael Jordan 1st retire?'",
      answers: [
        {
          text: "1994",
          correct: false,
        },
        {
          text: "1993",
          correct: true,
        },
        {
          text: "1992",
          correct: false,
        },
        {
          text: "1995",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question: "Shortest Player in NBA History?",
      answers: [
        {
          text: "Nate Robinson'",
          correct: false,
        },
        {
          text: "Earl Boykins",
          correct: false,
        },
        {
          text: "Isaiah Thomas",
          correct: false,
        },
        {
          text: "Muggsey Bogues",
          correct: true,
        },
      ],
    },

    {
      id: 12,
      question: "How many All Star Appearances does Jordan have?",
      answers: [
        {
          text: "13",
          correct: false,
        },
        {
          text: "15",
          correct: false,
        },
        {
          text: "14",
          correct: true,
        },
        {
          text: "16",
          correct: false,
        },
      ],
    },

    {
      id: 13,
      question: "Who is the only NBA player to record 35,000 points, 9,000 assists and 9,000 rebounds?",
      answers: [
        {
          text: "Lebron James",
          correct: true,
        },
        {
          text: "Magic Johnson",
          correct: false,
        },
        {
          text: "Michael Jordan",
          correct: false,
        },
        {
          text: "Wilt Chamberlain",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: "What was Allen Iverson Childhood nickname?",
      answers: [
        {
          text: "AI",
          correct: false,
        },
        {
          text: "Man-Man",
          correct: false,
        },
        {
          text: "PeeWee",
          correct: false,
        },
        {
          text: "Bubba-Chuck",
          correct: true,
        },
      ],
    },

    {
      id: 15,
      question: "What is the most points Shaquille ONeal scored in a game?",
      answers: [
        {
          text: "52",
          correct: false,
        },
        {
          text: "61",
          correct: true,
        },
        {
          text: "55",
          correct: false,
        },
        {
          text: "63",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;