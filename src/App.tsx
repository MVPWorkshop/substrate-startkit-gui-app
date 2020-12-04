import React from 'react';
import AppRouter from './router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store from './redux/store';
import Modals from './components/organisms/Modals';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppRouter/>
      </HashRouter>
      <ToastContainer
        position={'top-center'}
      />

      <Modals />
    </Provider>
  );
}

export default App;
