import { useState } from "react";
import Slide1 from "../assets/images/desktop-image-hero-1.jpg"
import Slide2 from "../assets/images/desktop-image-hero-2.jpg";
import Slide3 from "../assets/images/desktop-image-hero-3.jpg";
import Menu from "../assets/images/icon-hamburger.svg"
import Close from "../assets/images/icon-close.svg"
import Left from "../assets/images/icon-angle-left.svg"
import Right from "../assets/images/icon-angle-right.svg"
import Arrow from "../assets/images/icon-arrow.svg"
import Logo from "../assets/images/logo.svg"

function Header() {

    const Slides = [ Slide1, Slide2, Slide3 ];
    const [current, setCurrent]=useState(0);

    const Nextslide = () =>{
        setCurrent((prev) => (prev + 1) % Slides.length);
    }

    const Prevslide = ()=> {
        setCurrent((prev) => (prev - 1  + Slides.length ) % Slides.length )
    }

    const [openNav, setOpenNav] = useState(false)

  return (
    <div className="relative w-full md:h-[70vh] flex flex-col md:flex-row">
      <div
        className="w-full flex py-10 px-5 md:w-1/2 md:h-full h-100 bg-center bg-cover transition-all duration-900"
        style={{ backgroundImage: `url(${Slides[current]})` }}
      >
        <img
          onClick={() => setOpenNav(true)}
          className=" md:hidden flex h-5 mr-30"
          src={Menu}
          alt=""
        />
        <img className=" h-5 mr-5" src={Logo} alt="" />
        <div className=" hidden md:flex text-sm  text-white font-bold ">
          <a className="mr-2 hover:bg-green-950" href="#">
            Home
          </a>
          <a className="mr-2 hover:bg-green-950" href="#">
            {" "}
            shop
          </a>
          <a className="mr-2 hover:bg-green-950" href="#">
            About
          </a>
          <a className="mr-4 hover:bg-green-950" href="#">
            {" "}
            Contact
          </a>
        </div>
        {openNav && (
          <div className=" absolute w-full -ml-5 -mt-10 p-10 flex gap-10 bg-white  ">
            <img
              className="h-5 hover:bg-amber-200"
              onClick={() => setOpenNav(false)}
              src={Close}
              alt=""
            />
            <nav className="font-bold ">
              <a className="mr-2 hover:bg-green-950 hover:text-white" href="#">
                Home
              </a>
              <a className="mr-2 hover:bg-green-950 hover:text-white" href="#">
                shop
              </a>
              <a className="mr-2 hover:bg-green-950 hover:text-white " href="#">
                about
              </a>
              <a className="mr-2 hover:bg-green-950 hover:text-white " href="#">
                contact
              </a>
            </nav>
          </div>
        )}
      </div>

      <div className=" md:w-1/2 md:px-25 md:py-15 py-8 px-5 flex flex-col-reverse md:flex md:flex-col ">
        <div>
          <h1 className="md:text-4xl text-3xl font-extrabold">
            Discover innovative ways to decorate
          </h1>
          <p className="text-black/50 font-bold mt-5">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <div className=" tracking-widest font-bold text-2xl mt-5  flex items-center cursor-pointer ">
            SHOP NOW <img className="h-4 ml-5" src={Arrow} alt="" />
          </div>
        </div>
        <div className=" bg-black md:-ml-25 flex  px-5 gap-15 md:mt-3 w-33 ml-auto -mr-5 -mt-26 mb-10  md:w-35 py-6  ">
          <img
            onClick={Prevslide}
            className=" cursor-pointer hover:bg-amber-400 "
            src={Left}
            alt="Left"
          />{" "}
          <img
            onClick={Nextslide}
            className=" cursor-pointer hover:bg-amber-400 "
            src={Right}
            alt="Right"
          />
        </div>
      </div>
    </div>
  );
}

export default Header