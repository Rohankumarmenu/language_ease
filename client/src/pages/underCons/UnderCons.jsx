import './underCons.scss';
import img from '../../assets/img/under_construction.svg';
import { Link } from 'react-router-dom';

const UnderCons = () => {
  return (
    <div className="underCons">
      <img src={img} alt="" />
      <p>TO BE CONTINUED.</p>
      <Link to={'/levels'}>
        <button>back</button>
      </Link>
    </div>
  );
};

export default UnderCons;
