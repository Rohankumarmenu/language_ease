import './login.scss';
import img from '../../assets/img/login.svg';
import { Link } from 'react-router-dom';
// import Signup from '../Signup/Signup';
// import Signinform from '../Signinform/Signinform';

const Login = () => {
  return (
    <>
      {/* <div className='alignment'>
        <div className='Signin'>
          <Link to="/signin">
            <button>Signin</button>
          </Link>
        </div>
        <div className='Signup'>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
        
      </div> */}

      <div className='alignment'>
        <div className='Signin' style={{ display: 'inline-block', marginRight: '10px' }}>
          <Link to="/signin">
            <button style={{ padding: '10px 20px', backgroundColor: '#5c1dbc', color: 'white', borderRadius: '10px' }}>Signin</button>
          </Link>
        </div>
        <div className='Signup' style={{ display: 'inline-block' }}>
          <Link to="/signup">
            <button style={{ padding: '10px 20px', backgroundColor: '#5c1dbc' , color: 'white', borderRadius: '10px' }}>Signup</button>
          </Link>
        </div>
      </div>


      <div className="login">
        <div className="container">

          <div className="left">
            <h1>
              Learn English <span>Effortlessly</span> and <span>Powerfully</span>{' '}
              .
            </h1>
            <p>
              Take your english to the next level, with EasyEnglish.
            </p>
            <Link to="/levels">
              <button>choose your level</button>
            </Link>
          </div>
          <div className="right">
            <img src={img} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
