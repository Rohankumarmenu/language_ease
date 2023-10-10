import './level.scss';

import { Link } from 'react-router-dom';

const Level = () => {
  return (
    <div className="level">
      <div className="container">
        <div className="cards">
          <Link to="/category">
            <div className="card card-4">
              <div className="face face1">
                <div className="content">
                  <span className="stars"></span>
                  <h2 className="text">Learn with game</h2>
                  <p className="text">
                    This section contains lessons and activities for the English learner.
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>Learn English</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Level;
