 import { useEffect } from "react";
import useConversations from "../zustand/useConversations";
import MessageInput from "./MessageInput";
 import Messages from "./Messages";
 import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../context/AuthContext";

 const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversations();
 
	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
 	return (
 		<div className='md:min-w-[450px] flex flex-col'>
 			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
 				{/* Header */}
 				<div className='bg-gray-950/40 px-4 py-2 mb-2 backdrop:blur-md'>
 					<span className='label-text'>To:</span> <span className='text-white-900 font-semibold'>{selectedConversation.fullName}</span>
 				</div>

 				<Messages />
 				<MessageInput />
 			</>
			)
 			
 			}
 		</div>
 	);
 };
 export default MessageContainer;

 const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome back {authUser?.fullName} 🎃</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};