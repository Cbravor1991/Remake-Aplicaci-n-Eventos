import styled from 'styled-components';

export const Input = styled.input`
   border: 1px solid grey; /* Borde de color gris */
  font-size: 1rem;
  transition: box-shadow 0.1s ease-in-out 0s, color 0.1s ease-in-out 0s; /* Transiciones */
  inline-size: 100%;  
  background-color: black;
  border-radius: 8px; /* Borde redondeado */
  color: white; /* Color del texto */
  padding: 8px; /* Espaciado interno */
  box-sizing: border-box; /* Incluye padding y borde en el tamaño total */

  ::placeholder {
    color: grey; /* Color del placeholder */
    text-align: left; /* Alineación del texto del placeholder */
  }

`;



