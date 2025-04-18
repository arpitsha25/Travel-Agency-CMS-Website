import { useRouter } from "next/router";
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";

const Admin = () => {
  const router =  useRouter()
  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      console.log("data",data)
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      if (response.ok) {
        localStorage.setItem('token', result.token); // Store token
        router.push("/dashboard")
        toast.success("Login successful")

      } else {
        toast.error("Login failed. Please check your credentials.")
      }
    } catch (error) {
      toast.success("Error occurred during login")
      console.error('Error occurred during login', error)
    }
  }

  return (
    <>
      <div className='lg:h-[405px] h-[400px] w-full flex justify-center items-center'>
        <div className="flex flex-col gap-4 w-80 p-4 border-2 rounded-md bg-gray-50 ">
          <h1 className="text-lg font-semibold text-center mb-4">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            {/* Username Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && <span className="text-red-500 text-xs">{errors.username.message}</span>}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
            </div>

            <button
              type="submit"
              className="bg-[#231535] text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Admin
