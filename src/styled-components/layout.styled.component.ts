import styled from "styled-components";

export const LayoutContainer = styled.div `

        
          background-color: green;

  display: flex;
  justify-content: center; /* Alinea horizontalmente al centro */
  align-items: center; /* Alinea verticalmente al centro */
 background-color: #333333; /* Gris oscuro, pero claramente gris */  
  width: 100%; /* Ocupa todo el ancho disponible */

  @media only screen and (max-width: 1176px) {
    padding: 12px;
  }
`;
