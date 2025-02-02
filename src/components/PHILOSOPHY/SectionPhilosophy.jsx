import artifical from "../../assets/logo/artifical.png";
import artificalSM from "../../assets/logo/atificalSM.png";
import { philosophy } from "../../utails/data";
export default function SectionPhilosophy() {
  return (
    <div className="lg:py-36 lg:px-28 py-10 px-2">
      <h1 className="text-[#1F80F0] lg:tracking-widest tracking-normal  font-bold text-center">
        OUR PHILOSOPHY
      </h1>
      <h1 className="text-[#0B305B]  lg:leading-[70px] leading-none font-semibold text-[35px] lg:text-[65px] text-center">
        Human-centred innovation
      </h1>

      <div className="w-full bg-white lg:py-24 py-16">
        <img className="hidden lg:block" src={artifical} alt="" />
        <img className="sm:block lg:hidden" src={artificalSM} alt="" />
      </div>

      <div className="flex flex-col justify-center md:flex-row items-center gap-14 md:gap-32 px-[10px]">
        {philosophy.map((philo) => (
          <div key={philo.id}>
            <img src={philo.image} alt="" />
            <p
              className="text-[#0B305B] font-semibold text-[28px]
              leading-[70px]"
            >
              {philo.title}
            </p>
            <p className="text-[#0B305B] opacity-90 leading-[25px]">
              {philo.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
