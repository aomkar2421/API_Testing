import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='h-8 w-[760px] bg-black text-center items-center text-white'>
        <ul className="w-full flex justify-around">
        <Link to={'/home'}>Home</Link>
        <Link to={'/plagiarism'}>Plagiarism</Link>
        <Link to={'/grammar'}>Grammar</Link>
        <Link to={'/summerizer'}>Summerizer</Link>
        </ul>
    </div>
  )
}

export default Navbar