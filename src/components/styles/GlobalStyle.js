import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`


*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

html {font-size: 100%;} /*16px*/

body {
  background: #fff;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin-bottom: 1.38rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}
a {
  text-decoration: none;

}
small {font-size: 0.8rem;}
.nav{
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  top: 0;
  transition: 0.3s;
  z-index: 1;
 
}
`;
