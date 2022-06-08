import { InferActionsTypes } from "./redux-store";

type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Connor" },
    { id: 2, name: "Markus" },
    { id: 3, name: "Kara" },
    { id: 4, name: "Geralt" },
    { id: 5, name: "Regis" },
    { id: 6, name: "Dettlaff" },
  ] as Array<DialogType>,
  messages: [
    { id: 0, message: "Hello my name is Connor" },
    { id: 1, message: "FREEDOM!!!" },
    { id: 2, message: "Give me your money" },
    { id: 3, message: "Not Geralt, Geralt" },
    { id: 4, message: "Hehe" },
    {
      id: 5,
      message: "If you acknowledge any gods... start praying, now!",
    },
  ] as Array<MessageType>,
};

const dialogsReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND_MESSAGE":
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMessageBody: string) =>
    ({ type: "SN/DIALOGS/SEND_MESSAGE", newMessageBody } as const),
};

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
