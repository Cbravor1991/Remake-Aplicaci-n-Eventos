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

    // <div className="homepage" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
    //   <section className="hero-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    //     <div className="hero-section__content" style={{ maxWidth: '800px', padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '1rem' }}>
    //       <Box
    //         component="form"
    //         sx={{
    //           '& .MuiTextField-root': {m: 1, width: '25ch' },
    //         }}
    //         noValidate
    //         autoComplete="off"
    //       >
    //         <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '.3rem', textDecoration: 'none', mb: 2, display: { xs: 'none', md: 'flex' } }}>
    //           ¡Bienvenido! Ingresá tus credenciales
    //         </Typography>

    //         <Grid container spacing={2} justifyContent="center">
    //           <Grid item xs={12} md={6}>
    //             <TextField
    //               required
    //               id="filled-required"
    //               label="Usuario"
    //               autoComplete="current-password"
    //               variant="filled"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               sx={{ backgroundColor: '#fff', borderRadius: '1rem', width: '100%' }}
    //             />
    //           </Grid>

    //           <Grid item xs={12} md={6}>
    //             <TextField
    //               required
    //               id="filled-password-input"
    //               label="Contraseña"
    //               type="password"
    //               autoComplete="current-password"
    //               variant="filled"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               sx={{ backgroundColor: '#fff', borderRadius: '1rem', width: '100%' }}
    //             />
    //           </Grid>

    //           <Grid item xs={12}>

    //             <FormButton>
    //               Iniciar sesión
    //             </FormButton>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </div>
    //   </section>
    // </div>

  );
};

export default Login;
