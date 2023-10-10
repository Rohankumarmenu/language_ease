import { useLocation, useNavigate } from 'react-router-dom';
import './lesson.scss';

import { pleasure } from '../../assets/data/pleasure';
import { reading } from '../../assets/data/reading';
import { vocabulary } from '../../assets/data/vocabulary';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Lesson = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);

  const [matchingAns, setMatchingAns] = useState('');
  const [reOrderingAns, setReOrderingAns] = useState('');
  const [fillingGapsAns, setFillingGapsAns] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [clickedAnswer, setClickedAnswer] = useState({});

  const id = parseInt(useLocation().pathname.split('/')[2]);
  const category = useLocation().pathname.split('/')[1];

  let currentLesson;
  
   if (category === 'reading') {
    currentLesson = reading.filter((lesson) => lesson.id === id)[0];
  } else if (category === 'vocabulary') {
    currentLesson = vocabulary.filter((lesson) => lesson.id === id)[0];
  } else if (category === 'pleasure') {
    currentLesson = pleasure.filter((lesson) => lesson.id === id)[0];
  }

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log('answer submitted');
  };

  const handelScore = (
    clickedAnswer,
    correctAnswer,
    questionType,
    numberOfQuestions
  ) => {
    const activityPoints = 20 / currentLesson.questions.length;

    switch (questionType) {
      case 'trueFalse':
        if (clickedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          setScore((prev) => prev + activityPoints / numberOfQuestions);
        }
        break;

      case 'multipleChoice':
        if (clickedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          setScore((prev) => prev + activityPoints / numberOfQuestions);
        }
        break;

      case 'matching':
        const correctMatchPoint = activityPoints / correctAnswer.length;
        const matchingAnsTable = matchingAns.split(',');

        correctAnswer.forEach((ca, i) => {
          if (ca.toLowerCase() === matchingAnsTable[i].toLowerCase()) {
            setScore((prev) => prev + correctMatchPoint);
          }
        });
        break;

      case 'reOrdering':
        const correctReOrderPoint = activityPoints / correctAnswer.length;
        const reOrderAnsTable = reOrderingAns.split(',');

        correctAnswer.forEach((ca, i) => {
          if (ca.toLowerCase() === reOrderAnsTable[i].toLowerCase()) {
            setScore((prev) => prev + correctReOrderPoint);
          }
        });
        break;

      case 'fillingGaps':
        const correctFillingGapPoint = activityPoints / correctAnswer.length;
        const FillingGapAnsTable = fillingGapsAns.split(',');

        correctAnswer.forEach((ca, i) => {
          if (ca.toLowerCase() === FillingGapAnsTable[i].toLowerCase()) {
            setScore((prev) => prev + correctFillingGapPoint);
          }
        });
        break;

      default:
        break;
    }
  };

  //send email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iiava9r',
        'template_gr3qyz5',
        form.current,
        'aCQ4uRExlk5DKvb6x'
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setText('');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handelClickedAnswer = (clickedQuestion, answer) => {
    console.log(clickedAnswer);
    setClickedAnswer({ ...clickedAnswer, [clickedQuestion]: answer });
  };

  return (
    <div className="lesson">
      <div className="container">
        <div className="content">
          <h1>
            {' '}
            {category === 'pleasure' ? 'Reading For Pleasure' : category}:
          </h1>
          <h2> {currentLesson.title} </h2>

          {/* HINT */}
          {currentLesson.hint && (
            <div className="audio">
              <h4>Instructions:</h4>
              <p>{currentLesson.hint}</p>
            </div>
          )}

          {/* VIDEO */}
          {currentLesson.videoUrl && (
            <div className="video">
              <h4>Video:</h4>
              <iframe
                title="watch and listen to learn"
                frameborder="0"
                src={currentLesson.videoUrl}
                allowfullscreen
              ></iframe>
            </div>
          )}

          {/* TEXTS */}
          {currentLesson.text && (
            <div className="text">
              <h4>Text:</h4>

              {currentLesson?.text.map((t, i) => (
                <p key={i}> {t} </p>
              ))}
            </div>
          )}

          {/* EXPLANATION */}
          {currentLesson.exp && (
            <div className="text">
              <h4>Explanation:</h4>

              <p> {currentLesson.exp} </p>
            </div>
          )}

          <hr />

          {currentLesson.cat !== 'pleasure' && (
            <div className="test">
              <h2>test:</h2>
              <p>Let's take the quiz.</p>
              {/* *********** QUESTIONS ********** */}
              <div className="questionsContainer">
                {currentLesson.questions?.map((ques, i) => {
                  return (
                    <div className="questionsItem trueFalse" key={i}>
                      {ques.type === 'trueFalse' ? (
                        <div className="trueFalse">
                          <h3>
                            Activity{' '}
                            {i === 0
                              ? 'One'
                              : i === 1
                              ? 'Two'
                              : i === 2
                              ? 'Three'
                              : i === 3
                              ? 'Four'
                              : 'Five'}
                            :
                          </h3>
                          {ques.list.map((q, i) => (
                            <div className="trueFalseItem" key={i}>
                              <div className="question">{q.question}</div>
                              <div className="answers">
                                {q.answers.map((a, i) => (
                                  <div
                                    key={i}
                                    className={`answer ${
                                      clickedAnswer[q.question] === a &&
                                      'clicked'
                                    }`}
                                    onClick={() => {
                                      handelScore(
                                        a,
                                        q.correctAnswer,
                                        'trueFalse',
                                        ques.list.length
                                      );
                                      handelClickedAnswer(q.question, a);
                                    }}
                                  >
                                    {a}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : ques.type === 'multipleChoice' ? (
                        <div className="questionsItem multipleChoice">
                          <h3>
                            Activity
                            {i === 0
                              ? 'One'
                              : i === 1
                              ? 'Two'
                              : i === 2
                              ? 'Three'
                              : i === 3
                              ? 'Four'
                              : 'Five'}
                            :
                          </h3>
                          {ques.list.map((q, i) => (
                            <div className="multipleChoiceItem" key={i}>
                              <div className="question">{q.question}</div>
                              <div className="answers">
                                {q.answers.map((a, i) => (
                                  <div
                                    key={i}
                                    className={`answer ${
                                      clickedAnswer[q.question] === a &&
                                      'clicked'
                                    }`}
                                    onClick={() => {
                                      handelScore(
                                        a,
                                        q.correctAnswer,
                                        'multipleChoice',
                                        ques.list.length
                                      );
                                      handelClickedAnswer(q.question, a);
                                    }}
                                  >
                                    {a}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : ques.type === 'matching' ? (
                        <div className="questionsItem matching">
                          <h3>
                            Activity{' '}
                            {i === 0
                              ? 'One'
                              : i === 1
                              ? 'Two'
                              : i === 2
                              ? 'Three'
                              : i === 3
                              ? 'Four'
                              : 'Five'}
                            :
                          </h3>
                          <div className="question">{ques.question}</div>
                          <div className="answers">
                            <div className="left">
                              {ques.answers.g1.map((a, i) => (
                                <div key={i} className="answer">
                                  {a}
                                </div>
                              ))}
                            </div>
                            <div className="right">
                              {ques.answers.g2.map((a, i) => (
                                <div key={i} className="answer">
                                  {a}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="matchingForm">
                            <form onSubmit={handelSubmit}>
                              <label htmlFor="matchingAns">Your answer:</label>
                              <input
                                type="text"
                                className="matchingAns"
                                placeholder="Enter the correct match here like: 1-e, 2-a ...."
                                value={matchingAns}
                                onChange={(e) => setMatchingAns(e.target.value)}
                              />
                              <button
                                type="submit"
                                onClick={() =>
                                  handelScore(
                                    'matching',
                                    ques.correctAnswer,
                                    'matching'
                                  )
                                }
                              >
                                send
                              </button>
                            </form>
                          </div>
                        </div>
                      ) : ques.type === 'reOrdering' ? (
                        <div className="questionsItem reOrdering">
                          <h3>
                            Activity{' '}
                            {i === 0
                              ? 'One'
                              : i === 1
                              ? 'Two'
                              : i === 2
                              ? 'Three'
                              : i === 3
                              ? 'Four'
                              : 'Five'}
                            :
                          </h3>
                          <div className="question">{ques.question}</div>
                          <div className="answers">
                            {ques.answers.map((a, i) => (
                              <div key={i} className="answer">
                                {a}
                              </div>
                            ))}
                          </div>

                          <div className="reOrderingForm">
                            <form onSubmit={handelSubmit}>
                              <label htmlFor="reOrderingAns">
                                Your answer:
                              </label>
                              <input
                                type="text"
                                className="reOrderingAns"
                                placeholder="Enter the right order here like: 1,6,4,3 ...."
                                value={reOrderingAns}
                                onChange={(e) =>
                                  setReOrderingAns(e.target.value)
                                }
                              />
                              <button
                                type="submit"
                                onClick={() =>
                                  handelScore(
                                    'reOrdering',
                                    ques.correctAnswer,
                                    'reOrdering'
                                  )
                                }
                              >
                                send
                              </button>
                            </form>
                          </div>
                        </div>
                      ) : (
                        <div className="questionsItem fillingGaps">
                          <h3>
                            Activity{' '}
                            {i === 0
                              ? 'One'
                              : i === 1
                              ? 'Two'
                              : i === 2
                              ? 'Three'
                              : i === 3
                              ? 'Four'
                              : 'Five'}
                            :
                          </h3>
                          <div className="question">{ques.question}</div>
                          <div className="answers">
                            {ques.answers.map((a, i) => (
                              <div key={i} className="answer">
                                {a}
                              </div>
                            ))}
                          </div>

                          <div className="fillingGapsForm">
                            <form onSubmit={handelSubmit}>
                              <label htmlFor="fillingGapsAns">
                                Your answer:
                              </label>
                              <input
                                type="text"
                                className="fillingGapsAns"
                                placeholder="Enter the gaps with the same order here like: ghfhg,ghgh ...."
                                value={fillingGapsAns}
                                onChange={(e) =>
                                  setFillingGapsAns(e.target.value)
                                }
                              />
                              <button
                                type="submit"
                                onClick={() =>
                                  handelScore(
                                    'fillingGaps',
                                    ques.correctAnswer,
                                    'fillingGaps'
                                  )
                                }
                              >
                                send
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* //writing */}
              {currentLesson.cat === 'writing' ||
                (currentLesson.cat === 'reading' && (
                  <div className="email">
                    <form ref={form} onSubmit={sendEmail}>
                      <h2>Your Text:</h2>
                      <div className="info">
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Your Name ..."
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          type="email"
                          name="from_email"
                          placeholder="Your Email ..."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <textarea
                        name="text"
                        cols="30"
                        rows="10"
                        placeholder="send text to email teacher here ..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      ></textarea>
                      <button>send</button>
                    </form>
                  </div>
                ))}

              {/* result */}
              <div className="resultContainer">
                <button
                  className="check"
                  onClick={() => {
                    setOpenModal(true);
                    setClickedAnswer({});
                  }}
                >
                  Result
                </button>

                {openModal && (
                  <div className="result">
                    <div className="content">
                      <div
                        className="close"
                        onClick={() => {
                          setOpenModal(false);
                          setScore(0);
                          setFillingGapsAns('');
                          setMatchingAns('');
                          setReOrderingAns('');
                          navigate(`/${currentLesson.cat}/${id}`);
                        }}
                      >
                        X
                      </div>
                      <h2>Result:</h2>
                      <h4>
                        You got: <span> {score.toFixed(2)} /20</span>{' '}
                      </h4>
                      <h5 className={score < 12 ? `fail` : `success`}>
                        {' '}
                        {score < 10
                          ? 'Failing'
                          : score >= 10 && score < 12
                          ? 'Below Average'
                          : score >= 12 && score < 14
                          ? 'Average'
                          : score >= 14 && score < 16
                          ? 'Very Good'
                          : 'Excellent'}
                      </h5>
                      <h6 className={score < 12 ? `fail` : `success`}>
                        {score < 12
                          ? `Please try again.`
                          : `You can pass to the next lesson.`}
                      </h6>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
