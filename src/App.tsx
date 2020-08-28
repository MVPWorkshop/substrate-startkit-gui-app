import React, { Fragment } from 'react';
import AppRouter from './router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <AppRouter/>
      </HashRouter>
      <ToastContainer
        position={'top-center'}
      />
    </Fragment>
  );
}

export default App;
