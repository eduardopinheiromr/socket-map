import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import useSocket from "../context/SocketContext";

export default function InputSend() {
  const { socket, user } = useSocket();
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    socket.emit("new message", { user: user, content: message });
    console.log({ socket });
    setMessage("");
  };

  return (
    <Flex mt="10px">
      <Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        type="text"
        placeholder="Your message here..."
        mr="10px"
      />
      <Button onClick={handleSubmit} w="200px" bg="black" color="lightgreen">
        Send
      </Button>
    </Flex>
  );
}
