const GenderCheckbox = () => {
 	return (
 		<div className='flex'>
 			<div className='form-control'>
 				<label className={`label gap-2 cursor-pointer`}>
 					<span className='label-text'>Male</span>
 					<input type='checkbox' className="checkbox border-orange-300 [--chkbg:theme(colors.orange.400)] [--chkfg:black] checked:border-orange-500" /> 
 				</label>
 			</div>
			<div className='form-control'>
 				<label className={`label gap-2 cursor-pointer`}>
 					<span className='label-text'>Female</span>
 					<input type='checkbox' className='checkbox border-orange-300 [--chkbg:theme(colors.orange.400)] [--chkfg:black] checked:border-orange-500' />
 				</label>
 			</div>
 		</div>
 	);
 };
 export default GenderCheckbox;