import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html, body, #root{
      height: 100%;

      max-width: 1920px;
      max-height: 1080px;
   }

   *, button, input {
      border: 0;
      outline: 0;
      font-family: 'Poppins', sans-serif;
   }

   button {
      cursor: pointer;
   }

   .poppins-thin {
      font-family: "Poppins", sans-serif;
      font-weight: 100;
      font-style: normal;
   }

   .poppins-extralight {
      font-family: "Poppins", sans-serif;
      font-weight: 200;
      font-style: normal;
   }

   .poppins-light {
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-style: normal;
   }

   .poppins-regular {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-style: normal;
   }

   .poppins-medium {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-style: normal;
   }

   .poppins-semibold {
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-style: normal;
   }

   .poppins-bold {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-style: normal;
   }

   .poppins-extrabold {
      font-family: "Poppins", sans-serif;
      font-weight: 800;
      font-style: normal;
   }

   .poppins-black {
      font-family: "Poppins", sans-serif;
      font-weight: 900;
      font-style: normal;
   }

   .poppins-thin-italic {
      font-family: "Poppins", sans-serif;
      font-weight: 100;
      font-style: italic;
   }

   .poppins-extralight-italic {
      font-family: "Poppins", sans-serif;
      font-weight: 200;
      font-style: italic;
   }

   .poppins-light-italic {
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-style: italic;
   }

   .poppins-regular-italic {
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-style: italic;
   }

   .poppins-medium-italic {
   font-family: "Poppins", sans-serif;
   font-weight: 500;
   font-style: italic;
   }

   .poppins-semibold-italic {
   font-family: "Poppins", sans-serif;
   font-weight: 600;
   font-style: italic;
   }

   .poppins-bold-italic {
   font-family: "Poppins", sans-serif;
   font-weight: 700;
   font-style: italic;
   }

   .poppins-extrabold-italic {
   font-family: "Poppins", sans-serif;
   font-weight: 800;
   font-style: italic;
   }

   .poppins-black-italic {
   font-family: "Poppins", sans-serif;
   font-weight: 900;
   font-style: italic;
   }

`;
