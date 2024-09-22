import React from 'react'
import Menu from '../components/Menu/Menu'
import Packages from "../components/Packages/Packages"
const allpackages = () => {
  return (
    <>
      <Menu/>
      <div className='main_container py-5'>
      <Packages/>
      </div>
    </>
  )
}
export default allpackages