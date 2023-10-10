import './category.scss';
import reading from '../../assets/img/reading.svg';
import vocabulary from '../../assets/img/new.svg';
import pleasure from '../../assets/img/pleasure.svg';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="cats">
          {/* Reading */}
          <div className="cat">
            <div className="left">
              <h2>Reading</h2>
              <p>
              Reading is to the mind what exercise is to the body.
              </p>
              <Link to="/reading">
                <button>Learn</button>
              </Link>
            </div>
            <div className="right">
              <img src={reading} alt="" />
            </div>
          </div>

          {/* Vocabulary */}
          <div className="cat">
            <div className="left">
              <h2>Vocabulary</h2>
              <p>
              One forgets words as one forgets names. One's vocabulary needs constant fertilizing or it will die.
              </p>
              <Link to="/vocabulary">
                <button>Learn</button>
              </Link>
            </div>

            <div className="right">
              <img src={vocabulary} alt="" />
            </div>
          </div>

          <div className="cat">
            <div className="left">
              <h2>Reading For Pleasure</h2>
              <p>
              A reader lives a thousand lives before he dies . . 
              </p>
              <Link to="/pleasure">
                <button>Learn</button>
              </Link>
            </div>

            <div className="right">
              <img src={pleasure} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
