import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  a {
  color: inherit;
  text-decoration: none;
}
body{
  font-family: ${({ theme }) => theme.colors.title};
  font-weight:200
}
`;