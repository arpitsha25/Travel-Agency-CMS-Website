import React from 'react'


const Admin = () => {
  return (<>
    <div className='lg:h-[405px] h-[400px] w-full flex justify-center items-center'>
    <div className="flex flex-col gap-4 w-80 p-4 border-2 rounded-md bg-gray-50 ">
        <h1 className="text-lg font-semibold text-center mb-4">Login</h1>
        
        <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
            <input 
                id="username" 
                type="text" 
                placeholder="Enter your username" 
                className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        
        <button 
            type="submit" 
            className="bg-[#231535] text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-200"
        >
            Login
        </button>
    </div>
    </div>
    </>
  )
}

export default Admin