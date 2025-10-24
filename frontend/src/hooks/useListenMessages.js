import { useEffect } from "react";

//import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversations";

//import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	//const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
    // socket.on("new-message", (message) => {
    // 	setMessages([...messages, message]);
    // 	notificationSound.play();
    // });
	}, []);
};
export default useListenMessages;