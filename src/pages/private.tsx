import InputSend from "../components/InputSend";
import PageLayout from "../components/layouts/PageLayout";
import MessageDisplay from "../components/MessageDisplay";

export default function Private() {
  return (
    <PageLayout>
      <MessageDisplay />
      <InputSend />
    </PageLayout>
  );
}
