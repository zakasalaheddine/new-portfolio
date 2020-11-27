import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors, global } from "styles/theme-extends";

const theme = extendTheme({ colors, styles: { global } });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
