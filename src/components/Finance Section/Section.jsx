import bg4 from "../../assets/backgrounds/WaveLinesDesktop4.svg";
import sectionImage from "../../assets/logo/sectionImage.jpg";
import sectionImage1 from "../../assets/logo/sectionImage1.svg";
import sectionImage2 from "../../assets/logo/sectionImage2.svg";
import sectionImage3 from "../../assets/logo/sectionImage3.svg";
export default function Section() {
  return (
    <div className="grid grid-cols-12 px-28 py-14">
      <div className="col-span-6">
        <h1 className="text-[#1F80F0] tracking-widest font-bold py-5">
          POWERING THE FUTURE OF FINANCE
        </h1>
        <p className="text-[#0B305B] leading-[70px] font-semibold text-[65px]">
          Uncovering new <br /> ways to delight <br /> customers
        </p>
        <p className="text-[#0B305B] font-bold py-3">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-[#0B305B]  py-3">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>
      <div className="col-span-6 relative">
        <div className="absolute inset-0 z-10">
          <img
            src={sectionImage1}
            className="absolute top-10 w-28 left-96  object-cover animate-sway"
            alt=""
          />
          <img
            src={sectionImage2}
            className="absolute top-40 w-20 left-48  object-cover animate-sway"
            alt=""
          />
          <img
            src={sectionImage3}
            className="absolute top-10 w-20 left-10  object-cover animate-sway"
            alt=""
          />

          <img
            src={bg4}
            className="absolute w-[75%] h-[95%] m-auto ml-16 -mt-24 object-cover animate-swayY"
            alt=""
          />
        </div>

        <div className="relative z-0">
          <img src={sectionImage} className=" w-[75%] h-[65%] m-auto" alt="" />
        </div>
      </div>
    </div>
  );
}
