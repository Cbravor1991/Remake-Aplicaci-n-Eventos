import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { LayoutContainer } from './styled-components';
import { RoutesWithNotFound } from './utilities'

const Login = lazy(() => import('./pages/Login/Login'));

function App() {
  return (
    <Provider store={store}>
      <LayoutContainer>
        <Suspense fallback={<div>Cargando...</div>}>
          <BrowserRouter>
          <RoutesWithNotFound>
              <Route path="/" element={<Login />} />
            </RoutesWithNotFound>
          </BrowserRouter>
        </Suspense>
      </LayoutContainer>
    </Provider>
  );
}

export default App;
