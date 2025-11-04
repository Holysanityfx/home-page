import Aboutdark from "../assets/images/image-about-dark.jpg"
import Aboutlight from "../assets/images/image-about-light.jpg"
function Last() {
  return (
    <div className=" md:flex">
      <img src={Aboutdark} alt="dark" />
      <div className="py-10 px-10">
        <h1 className="font-bold tracking-widest mb-5 text-2xl " >ABOUT OUR FUENITURE</h1>
        <div className="text-sm font-bold text-black/50">
          Our multifunctuonal collection blends design and function to suit
          individual taste. Make each room unique. or pick a cahesive theme that
          best express your interests and what inspires you. Find the funiture
          pieces you need, fron traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space
        </div>
      </div>
      <img src={Aboutlight} alt="" />
    </div>
  );
}

export default Last