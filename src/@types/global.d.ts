type TUser = {
  id: string;
  name: string;
  handShakeDate: string;
  socket_id: string;
};

type TUsers = TUser[];

type TMessage = {
  user: TUser;
  sendedAt: string;
  content: string;
};

type THistory = TMessage[];

type TData = {
  socket: Socket;
  message: string;
  user: TUser;
  history: THistory;
  users: TUser[];
};

type TPrivateChat = {
  currentUser: TUser;
  user: TUser;
  history: THistory;
};
