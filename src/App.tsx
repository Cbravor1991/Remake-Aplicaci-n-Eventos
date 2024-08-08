import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LayoutContainer } from './styled-components';
import { RoutesWithNotFound } from './utilities'
import { TestingService } from './services/testing.service';
import { SnackbarUtilitiesConfigurator } from './utilities/snackbar-manager';
import { SnackbarProvider } from 'notistack';

const Login = lazy(() => import('./pages/Login/Login'));

function App() {
  const [morty, setMorty] = useState({} as any);
  const fetchMorty = async () => {
    const { data } = await TestingService();
    setMorty(data);
  };

  useEffect(() => {

    fetchMorty();

  }, []);

  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
      <div className='App'>{JSON.stringify(morty)}</div>
    </SnackbarProvider>)

  // return (

  //     // <LayoutContainer>
  //     //   <Suspense fallback={<div>Cargando...</div>}>
  //     //     <BrowserRouter>
  //     //     <RoutesWithNotFound>
  //     //         <Route path="/" element={<Login />} />
  //     //       </RoutesWithNotFound>
  //     //     </BrowserRouter>
  //     //   </Suspense>
  //     // </LayoutContainer>

  // );
}

export default App;
