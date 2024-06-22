import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LayoutContainer } from './styled-components';
import { RoutesWithNotFound } from './utilities'

const Login = lazy(() => import('./pages/Login/Login'));

function App() {
  return (
   
      <LayoutContainer>
        <Suspense fallback={<div>Cargando...</div>}>
          <BrowserRouter>
          <RoutesWithNotFound>
              <Route path="/" element={<Login />} />
            </RoutesWithNotFound>
          </BrowserRouter>
        </Suspense>
      </LayoutContainer>

  );
}

export default App;
