import bg4 from "../../assets/backgrounds/WaveLinesDesktop4.svg";
import sectionImage from "../../assets/logo/sectionImage.jpg";
import sectionImage1 from "../../assets/logo/sectionImage1.svg";
import sectionImage2 from "../../assets/logo/sectionImage2.svg";
import sectionImage3 from "../../assets/logo/sectionImage3.svg";
export default function Section() {
  return (
    <div className="grid grid-cols-12 py-10 px-6 lg:px-28 lg:py-14 lg:grid-cols-12">
      <div className="col-span-12 lg:col-span-6">
        <h1 className="text-[#1F80F0] lg:tracking-widest sm:tracking-normal  font-bold lg:py-5 py-2">
          POWERING THE FUTURE OF FINANCE
        </h1>
        <p className="text-[#0B305B] leading-none lg:leading-[70px] font-semibold text-[35px] lg:text-[65px]">
          Uncovering new <br className="hidden lg:block" /> ways to delight{" "}
          <br className="hidden lg:block" /> customers
        </p>
        <div className="hidden lg:block">
          <p className="text-[#0B305B] font-bold py-3">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[#0B305B]  py-3">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 relative">
        <div className="absolute inset-0 z-10 mt-20 lg:mt-0">
          <img
            src={sectionImage1}
            className="absolute w-16 top:40 left-60 lg:top-10  lg:w-28 lg:left-96  object-cover animate-swayY"
            alt=""
          />
          <img
            src={sectionImage2}
            className="absolute top-32 left-28 sm:left-20 w-16 lg:top-40  lg:left-48  object-cover animate-swayY"
            alt=""
          />
          <img
            src={sectionImage3}
            className="absolute  top-10   left-10 w-16   lg:w-20 object-cover animate-swayY"
            alt=""
          />

          <img
            src={bg4}
            className="absolute w-[50%] lg:w-[75%] lg:h-[95%]   m-auto ml-16 mt-52 lg:-mt-24 object-cover animate-swayY"
            alt=""
          />
        </div>

        <div className="relative z-0">
          <img
            src={sectionImage}
            className="mt-10 lg:mt-1 w-[70%] sm:w-[65%] lg:w-[75%] lg:h-[65%] m-auto"
            alt=""
          />
        </div>
        <div className="sm:block lg:hidden">
          <p className="text-[#0B305B] text-sm lg:text-lg  font-bold py-4 lg:py-3">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[#0B305B] text-sm lg:text-lg py-4 lg:py-3">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </div>
    </div>
  );
}
