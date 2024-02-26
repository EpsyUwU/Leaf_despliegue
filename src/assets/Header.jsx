import { Navbar} from 'flowbite-react';
import logo from "../assets/LogitoGod.svg"

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true} style={{ backgroundColor: "#1F2A37" }} className='rounded-none'>
      <Navbar.Brand href="#" className="ml-[50px]">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="LeefProject Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-green-500">
          Leaf Founding
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2items-right ">
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default Header;