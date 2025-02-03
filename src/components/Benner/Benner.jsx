import bennerImage from "../../assets/logo/benner.png";
export default function Benner() {
  return (
    <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 items items-start justify-center ">
      <div className="col-span-12 md:col-span-8 lg:col-span-8  px-6 md:px-5 lg:px-20 md:py-10 lg:py-1 text-white">
        <h1 className="text-[45px] mt-24 leading-1 md:text-[50px] lg:text-[80px] md:leading-[80px] lg:leading-[80px]  font-semibold">
          Embrace the <br className="hidden lg:block md:block" /> Future of
          Finance
        </h1>
        <p className="mt-6 text-lg font-semibold">
          Reimagine financial services with our open platform and distributed
          banking solution that powers transformation.
        </p>
        <button className="lg:w-1/2 md:w-1/2 mt-5 py-4 w-full lg:mt-5 lg:py-4 font-bold bg-[#FE8B53] hover:bg-[#E76F2F] text-white rounded-md shadow-lg ">
          Reach Out to Us
        </button>
      </div>

      {/* Right Section */}
      <div className="col-span-12 md:col-span-4 md:-ml-[350px] lg:mt-14 -ml-[100px]">
        <img
          src={bennerImage}
          className="md:max-w-[800px] max-w-[800px] h-[400px] md:h-[500px]"
          alt=""
        />
      </div>
    </div>
  );
}
