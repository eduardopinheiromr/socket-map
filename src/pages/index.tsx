import Container from "../components/layouts/Container";
import Header from "../components/Header";
import InputSend from "../components/InputSend";
import MessageDisplay from "../components/MessageDisplay";

export default function Index() {
  return (
    <Container as="main">
      <Header />

      <MessageDisplay />

      <InputSend />
    </Container>
  );
}
