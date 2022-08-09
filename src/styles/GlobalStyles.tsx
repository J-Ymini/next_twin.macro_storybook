import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";
import { normalize } from "styled-normalize";

const CustomStyles = createGlobalStyle`
  ${normalize}

  body {
    ${tw`antialiased`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
