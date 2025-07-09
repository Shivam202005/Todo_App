import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex bg-violet-500 p-2 justify-between font-bold text-white'>
            <h1 className='mx-4 text-3xl'>MyTask</h1>

            <ul className="flex  gap-4 mx-4 ">
                <li className='cursor-pointer  border border-[2px]  hover:bg-violet-900 border-black rounded-2xl p-2'>Home </li>
                <li className='cursor-pointer border border-[2px] hover:bg-violet-900 border-black rounded-2xl p-2'>About</li>
                <li className='cursor-pointer border border-[2px] hover:bg-violet-900 border-black rounded-2xl p-2'>Your Todo</li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
