import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    text-decoration: inherit;
    color: inherit;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;