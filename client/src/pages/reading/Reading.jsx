import './reading.scss';
import reading from '../../assets/img/reading.svg';
import { reading as lessons } from '../../assets/data/reading';
import { Link } from 'react-router-dom';

const Reading = () => {
  return (
    <div className="reading">
      <div className="container">
        <div className="left">
          <div className="content">
            <div className="title">
              <img src={reading} alt="" /> <h1>Reading</h1>
            </div>
            <h2>Lessons:</h2>
            <div className="lessons">
              {lessons.map((lesson) => {
                return (
                  <div className="lesson" key={lesson.id}>
                    <span></span>
                    <Link
                      to={`/reading/${lesson.id}`}
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
            <img src={reading} alt="" />
          </div>
          <div className="quote">
            <p className="text">
              “Once you learn to read, you will be forever free.”
            </p>
            <p className="other">Frederick Douglass</p>
          </div>

          <div className="quote">
            <p className="text">
              “Reading without reflecting is like eating without digesting.”
            </p>
            <p className="other">Edmund Burke</p>
          </div>
          <div className="quote">
            <p className="text">“Today a reader, tomorrow a leader.”</p>
            <p className="other">Margaret Fuller</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
