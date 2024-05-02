// import {} from 'react'
import './index.css'
import './App.css'
import loadersvg from './assets/dualring.svg'

const Loader = () => {
  return (
      <div><img src={loadersvg} className='h-16 w-16 mx-auto text-black' alt="" /></div>
  )
}

export default Loader