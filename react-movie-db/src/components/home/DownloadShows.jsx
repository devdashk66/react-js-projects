import { IoLocationOutline } from "react-icons/io5";
import { PiTelevisionThin } from "react-icons/pi";
import HD4K from "../../assets/4k.jpg";
const DownloadShows = () => {
  return (
    <section className="dark:static-section-bg-dark  w-screen mt-12">
      <div className="p-5 flex flex-col gap-5 lg:gap-10 md:flex-row md:items-center">
        <div className="md:w-2/4">
          <img className="rounded-sm" src={HD4K} alt="4K Videos" />
        </div>

        <div className="flex flex-col gap-5 md:w-2/4">
          <p className="w-20 border-b-2 border-blue-600"></p>
          <h1 className="text-4xl dark:text-gray-200">
            Download Your Shows Watch Offline.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            tempor.There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in some
            injected humour.
          </p>
          <div className="group flex flex-col gap-2 mt-2">
            <PiTelevisionThin className="group-hover:bg-blue-600 duration-200 font-bold text-8xl border-dotted border-2 border-blue-600 rounded-full p-3" />
            <h3 className="font-bold text-lg">Enjoy on your tv.</h3>
            <p>
              Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="group flex flex-col gap-2 mt-2">
            <IoLocationOutline className="group-hover:bg-blue-600 duration-200 font-bold text-8xl border-dotted border-2 border-blue-600 rounded-full p-3" />
            <h3 className="font-bold text-lg">Watch Everywhere.</h3>
            <p>
              Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadShows;
