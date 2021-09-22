import { ChakraProvider } from "@chakra-ui/react";
import { SocketProvider } from "../context/SocketContext";
import { theme } from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <SocketProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SocketProvider>
  );
}
export default MyApp;
