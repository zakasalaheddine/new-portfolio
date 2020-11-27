import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { buttonsVariants, colors, global } from "styles/theme-extends";

const theme = extendTheme({
  colors,
  styles: { global },
  components: { Button: { variants: { ...buttonsVariants } } },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
