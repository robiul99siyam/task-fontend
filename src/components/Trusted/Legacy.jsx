import bg5 from "../../assets/backgrounds/ctaMobileWaveLines.svg";
import bg1 from "../../assets/backgrounds/WaveLinesDesktop1.svg";
import bg2 from "../../assets/backgrounds/WaveLinesDesktop2.svg";
import bg3 from "../../assets/backgrounds/WaveLinesDesktop3.svg";
import bg4 from "../../assets/backgrounds/WaveLinesDesktop4.svg";

export default function Legacy() {
  return (
    <div
      style={{
        clipPath: "polygon(0 0, 100% 41%, 100% 100%, 0% 100%)",
        border: "0px",
        margin: "0px",
        boxSizing: "border-box",
      }}
      className="relative w-full border-style h-[calc(70vh-80px)] lg:h-[calc(90vh-80px)] bg-cover bg-center bg-radial bg-[radial-gradient(at_15%_75%,_#3c9dca,_#0054BF,_#4f46e5)] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bg3}
          alt="background"
          className="absolute top-0 left-0 w-50 h-auto object-cover animate-sway"
        />
        <img
          src={bg4}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover animate-sway"
        />
        <img
          src={bg5}
          alt="background"
          className="absolute  top-0 left-0 w-full h-full object-cover animate-swayY"
        />
        <img
          src={bg2}
          alt="background"
          className="absolute  top-0 left-0 w-full h-full object-cover animate-sway"
        />
        <img
          src={bg1}
          alt="background"
          className="absolute  top-0 left-0 w-full h-full object-cover animate-sway"
        />
      </div>

      <div className="absolute inset-0 z-50 px-5 lg:px-20 mt-[200px]  flex flex-col items-start justify-center">
        <h1 className=" text-2xl lg:text-6xl tracking-widest text-white font-bold  text-start">
          Legacy no longer
        </h1>
        <p className="text-white font-semibold text-[14px] lg:text-lg  text-start lg:text-center py-5">
          Talk to us to find out how we can transform your organisation for the
          future Contact Us
        </p>
        <button className="lg:w-1/2 mt-5 py-4 my-36 w-full lg:mt-5  lg:py-4 font-bold bg-[#FE8B53] hover:bg-[#E76F2F] text-white rounded-md shadow-lg ">
          Contact Us
        </button>
      </div>
    </div>
  );
}
