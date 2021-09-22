import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  socket: null,
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

import { io } from "socket.io-client";

const socket = io("http://localhost:3001", {
  autoConnect: false,
});

const SocketContext = createContext<TData>(initialState);

export default function useSocket() {
  return useContext(SocketContext);
}

export const SocketProvider = ({ children }) => {
  const [allData, setAllData] = useState<TData>(initialState);

  useEffect(() => {
    socket.connect();
  }, []);

  useEffect(() => {
    socket.on("start load", (data: TData) => {
      const users = data.users.filter((user) => user.id !== data.user.id);

      setAllData({
        ...allData,
        socket,
        users,
        user: data.user,
        message: data.message,
      });
    });
  });

  useEffect(() => {
    socket.on("chat message", ({ content, user, sendedAt }: TMessage) => {
      console.log({ content });
      setAllData({
        ...allData,
        history: [...allData.history, { content, user, sendedAt }],
      });
    });
  });
  return (
    <SocketContext.Provider value={allData}>{children}</SocketContext.Provider>
  );
};
