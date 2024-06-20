import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Typography, Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { FormButton } from '../../styled-components';
import { LoginForm } from '../../styled-components';
import { GroupInput } from '../../styled-components';
import { LabelGroup } from '../../styled-components';
import { Input } from '../../styled-components';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de tu función handleLogin
  };

  return (

      <LoginForm>
        <h1 style={{ textAlign: 'center', marginTop: '0px', marginBottom: '32px', fontFamily: 'sans-serif', color: 'white' }}>
          Inicia sesión en TicketApp
        </h1>
        <GroupInput>
          <LabelGroup>
            <span style={{ color: 'white', width: '100%', height: '19.2px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 700, fontFamily: 'CircularSp, sans-serif' }}>Correo electrónico o nombre de usuario</span>
          </LabelGroup>
          <Input style={{ height: '48px' }} type="text" placeholder="Correo electrónico o nombre de usuario"></Input>


        </GroupInput>
        <GroupInput>
          <LabelGroup>
            <span style={{ color: 'white', width: '100%', height: '19.2px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 700, fontFamily: 'CircularSp, sans-serif' }}>Contraseña</span>
          </LabelGroup>
          <Input style={{ height: '48px' }} type="text" placeholder="Contraseña"></Input>

        </GroupInput>
        <FormButton>
          Iniciar sesión
        </FormButton>
      </LoginForm>


  );
};

export default Login;
