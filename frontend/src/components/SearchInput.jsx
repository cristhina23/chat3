import { IoSearchSharp } from "react-icons/io5";

 const SearchInput = () => {
 	return (
 		<form className='flex items-center gap-2'>
 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
 			<button type='submit' className='btn btn-circle bg-base-500 text-zinc-900 hover:text-base-500 transition-colors-duration-300' >
 				<IoSearchSharp className='w-6 h-6 outline-none' />
 			</button>
 		</form>
 	);
 };
 export default SearchInput