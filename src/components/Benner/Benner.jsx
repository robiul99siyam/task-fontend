import bennerImage from "../../assets/logo/benner.png";
export default function Benner() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8  px-28 py-10 text-white">
        <h1 className="text-[85px] leading-[80px] font-semibold">
          Embrace the <br /> Future of Finance
        </h1>
        <p className="mt-6 text-lg font-semibold">
          Reimagine financial services with our open platform and distributed
          banking solution that powers transformation.
        </p>
        <button className="mt-8 px-20 py-4 font-bold bg-[#FE8B53]  hover:bg-[#E76F2F] text-white rounded-md shadow-lg">
          Reach Out to Us
        </button>
      </div>

      {/* Right Section */}
      <div className="col-span-4 -ml-[350px]">
        <img src={bennerImage} className="max-w-[800px] h-[500px]" alt="" />
      </div>
    </div>
  );
}
