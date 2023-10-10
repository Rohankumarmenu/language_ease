import './notFound.scss';

import img from '../../assets/img/not-found.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={img} alt="" />
      <p>This page does not found, plz back to home page.</p>
      <Link to={'/'}>
        <button>back</button>
      </Link>
    </div>
  );
};

export default NotFound;
