import artifical from "../../assets/logo/artifical.png";
import { philosophy } from "../../utails/data";
export default function SectionPhilosophy() {
  return (
    <div className="py-36 px-28">
      <h1 className="text-[#1F80F0] tracking-widest font-bold text-center">
        OUR PHILOSOPHY
      </h1>
      <h1 className="text-[#0B305B]  leading-[70px] font-semibold text-[65px] text-center">
        Human-centred innovation
      </h1>

      <div className="w-full bg-white py-24">
        <img src={artifical} alt="" />
      </div>

      <div className="flex justify-center items-center gap-32 px-[10px]">
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
