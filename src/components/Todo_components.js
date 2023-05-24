import React, {useState} from 'react'

function Todolist() {
    const [currentquestion, setCurrentquestion] = useState(0);
    const [score, setScore] = useState(0)
    const [correctanswer, setCorrectAnswer] = useState(false)
    const [Goodanswer, setGoodAnswer] = useState(0)
    const [Finish, setFinish] = useState(false)


    const questions = [
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "New York City", isCorrect: false },
          { id: 1, text: "Boston", isCorrect: false },
          { id: 2, text: "Santa Fe", isCorrect: false },
          { id: 3, text: "Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What year was the Constitution of America written?",
        options: [
          { id: 0, text: "1787", isCorrect: true },
          { id: 1, text: "1776", isCorrect: false },
          { id: 2, text: "1774", isCorrect: false },
          { id: 3, text: "1826", isCorrect: false },
        ],
      },
      {
        text: "Who was the second president of the US?",
        options: [
          { id: 0, text: "John Adams", isCorrect: true },
          { id: 1, text: "Paul Revere", isCorrect: false },
          { id: 2, text: "Thomas Jefferson", isCorrect: false },
          { id: 3, text: "Benjamin Franklin", isCorrect: false },
        ],
      },
      {
        text: "What is the largest state in the US?",
        options: [
          { id: 0, text: "California", isCorrect: false },
          { id: 1, text: "Alaska", isCorrect: true },
          { id: 2, text: "Texas", isCorrect: false },
          { id: 3, text: "Montana", isCorrect: false },
        ],
      },
      {
        text: "Which of the following countries DO NOT border the US?",
        options: [
          { id: 0, text: "Canada", isCorrect: false },
          { id: 1, text: "Russia", isCorrect: true },
          { id: 2, text: "Cuba", isCorrect: true },
          { id: 3, text: "Mexico", isCorrect: false },
        ],
      },
    ];

    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    const ClickOnOptions = async (goodanswer) => {
      if (!goodanswer)
      setCorrectAnswer(true)
      await delay(2000)
      setCorrectAnswer(false)
      await delay(500)
      if (goodanswer) {
        setScore(score + 20)
        setGoodAnswer(Goodanswer + 1)
      }
      if (currentquestion === 4)
        setFinish(true)
      setCurrentquestion(currentquestion + 1)
    }

    const Reinitialized = () => {
      setScore(0)
      setCurrentquestion(0)
      setGoodAnswer(0)
      setFinish(false)
    }

   
  
  return (
        
    <div className='min-h-screen flex flex-col justify-center font-Poppins'>
      <div className='max-w-[500PX] w-full mx-auto mt-4 bg-white p-8 rounded-3xl shadow-lm space-y-4'>
          <h1 className='text-center text-[#857E61] text-2xl font-bold py-4'>My Quiz App</h1>
          <div className='flex flex-row justify-center items-center space-x-5'>
          </div>

            { Finish === false ? 
              <ul className='space-y-3'>
              <h2 className='text-center'>{questions[currentquestion].text}</h2>
              {questions[currentquestion].options.map(options => {
                  return (
                    <div>
                      <li key={options.id} onClick={() => ClickOnOptions(options.isCorrect)} className={options.isCorrect && correctanswer ? 'flex justify-between px-3 py-2 drop-shadow-lm rounded-lg cursor-pointer bg-green-400 '  : options.isCorrect ? 'flex justify-between bg-white px-3 py-2 drop-shadow-lm rounded-lg cursor-pointer active:bg-green-400 active:transition duration-500' : 'flex justify-between bg-white px-3 py-2 drop-shadow-lm rounded-lg cursor-pointer active:bg-red-600 active:transition duration-500'}
                      >
                          <span >{options.text}</span>
                      </li>

                    </div>
              )
              })}
          </ul>
              :
              <div className=''>
                <p className='text-center text-xl font-bold'>Your score is <span className='text-[#857E61]'>{score}</span> and you got <span className='text-[#857E61]'>{Goodanswer}</span>/5</p>
                <div className='flex justify-center py-3'>
                  <button className='text-white bg-[#857E61] py-1 px-6 rounded-md' onClick={Reinitialized}>Reset</button>

                </div>

              </div>
              
            
            }

          
          
      </div>
    </div>
  )
}

export default Todolist