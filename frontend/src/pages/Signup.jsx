import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center  min-w-96 mx-auto'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-md backdrop-blur-[9px] backdrop-saturate-[137%] bg-gray-400 bg-opacity-40 border border-opacity-20 border-[#ffffff]'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up <span className='text-orange-500'>CrissChat</span></h1>

        <form>
          <div >
            <label className='label p-2 '>
              <span className='text-base label-text'>Full Nmae</span>
            </label>
            <input type="text" placeholder='Jhon Doe' className='w-full input input-border h-10'  />
          </div>
           <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-border h-10'  />
          </div>
           <div>
            <label className='label'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input type="email" placeholder='example@email.com' className='w-full input input-border h-10' />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='*******' className='w-full input input-border h-10' />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'> Confirm Password</span>
            </label>
            <input type="password" placeholder='*******' className='w-full input input-border h-10' />
          </div>
          <a href="#" className='text-sm hover:underline hover:text-orange-500 mt-2 inline-block'>
            {"Don't have an account?"}
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup