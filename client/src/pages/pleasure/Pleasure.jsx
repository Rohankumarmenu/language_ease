import './pleasure.scss';
import pleasure from '../../assets/img/pleasure.svg';
import { pleasure as lessons } from '../../assets/data/pleasure';
import { Link } from 'react-router-dom';

const Writing = () => {
  return (
    <div className="pleasure">
      <div className="container">
        <div className="left">
          <div className="content">
            <div className="title">
              {' '}
              <img src={pleasure} alt="" /> <h1>Reading For Pleasure</h1>{' '}
            </div>
            <h2>Lessons:</h2>
            <div className="lessons">
              {lessons.map((lesson) => {
                return (
                  <div className="lesson" key={lesson.id}>
                    <span></span>
                    <Link
                      to={`/pleasure/${lesson.id}`}
                      style={{ color: '#333' }}
                    >
                      <p className="lessonTitle">{lesson.title}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="img">
            <img src={pleasure} alt="" />
          </div>

          <div className="quote">
            <p className="text">
              “You must find time for reading, or surrender yourself to
              self-chosen ignorance.”
            </p>
            <p className="other">Confucius</p>
          </div>

          <div className="quote">
            <p className="text">
              “Reading was my escape and my comfort, my consolation, my
              stimulant of choice: reading for the pure pleasure of it, for the
              beautiful stillness that surrounds you when you hear an author's
              words reverberating in your head.”
            </p>
            <p className="other">Paul Auster</p>
          </div>

          <div className="quote">
            <p className="text">
              “I had never known the pleasure of reading, of exploring the
              recesses of the soul, of letting myself be carried away by
              imagination, beauty, and the mystery of fiction and language. For
              me all those things were born with that novel.”
            </p>
            <p className="other">Carlos Ruiz Zafon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;
