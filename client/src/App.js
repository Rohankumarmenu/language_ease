import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { createContext, useReducer } from 'react';
import Login from './pages/login/Login';
import Level from './pages/level/Level';
import NotFound from './pages/notFound/NotFound';
import UnderCons from './pages/underCons/UnderCons';
import Category from './pages/categorys/Category';
import Reading from './pages/reading/Reading';
import Lesson from './pages/lesson/Lesson';
import Pleasure from './pages/pleasure/Pleasure';
import Signinform from './pages/Signinform/Signinform';
import Signup from './pages/Signup/Signup';
import {reducer,intitailState} from './pages/reducer/UserReducer'
export const UserContext = createContext();

const router = createBrowserRouter(
  [

    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/levels',
      element: <Level />,
    },
    {
      path: '/underCons',
      element: <UnderCons />,
    },
    {
      path: '/category',
      element: <Category />,
    },
    {
      path: '/reading',
      element: <Reading />,
    },
    {
      path: '/reading/:id',
      element: <Lesson />,
    },

    {
      path: '/pleasure',
      element: <Pleasure />,
    },
    {
      path: '/pleasure/:id',
      element: <Lesson />,
    },

    {
      path: '/signin',
      element: <Signinform />,
    },

    {
      path: '/signup',
      element: <Signup />,
    },

    {
      path: '*',
      element: <NotFound />,
    },

  ]);

function App() {
  const [state, dispatch] = useReducer(reducer, intitailState)
  return (
    <div className="app">
      <UserContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
