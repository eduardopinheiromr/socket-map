import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Heading, ListItem } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Container from "../components/Container";
import Message from "../components/Message";
import UsersOnline from "../components/UsersOnline";

const socket = io("http://localhost:3001");

const initialState = {
  message: "",
  user: {
    id: "",
    name: "",
    handShakeDate: "",
    socket_id: "",
  },
  history: [],
  users: [],
};

export default function Index() {
  const [allData, setAllData] = useState<TData>(initialState);

  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("start load");
    socket.on("start load", (data: TData) => {
      console.log(data);

      console.log(data.users.map((user) => user));
      setAllData({ ...allData, message: data.message, user: data.user });
      // setAllData({ ...allData, ...data });
    });
  }, []);

  useEffect(() => {
    socket.on("chat message", (msg: TMessage) => {
      setAllData({ ...allData, history: [...allData.history, msg] });
    });
  });

  const handleSubmit = () => {
    socket.emit("new message", { user: allData.user, content: message });

    setMessage("");
  };

  return (
    <Container as="main">
      <Heading as="h1">{allData.message}</Heading>
      <h3>{allData.user?.name}</h3>
      {allData.users[0]?.name}
      <Flex>
        <Box as="ul">
          {allData.users?.map((user, key) => (
            <Box as="li" listStyleType="none" key={key}>
              {user.name}
            </Box>
          ))}
        </Box>
        {/* <UsersOnline users={allData.users} /> */}
        <div style={{ padding: "10px" }}>
          <Box as="ul" h="500" w="full" bg="lightgray" p="10">
            {allData.history.map((message, key) => (
              <Message key={key} message={message} />
            ))}
          </Box>
        </div>
      </Flex>
      <Flex>
        <Input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          type="text"
          placeholder="Your message here..."
        />
        <Button onClick={handleSubmit}>Send</Button>
      </Flex>
    </Container>
  );
}
