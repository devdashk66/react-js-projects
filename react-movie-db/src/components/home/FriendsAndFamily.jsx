import { Link } from "react-router-dom";
import FNF from "../../assets/fnf.jpg";
const FriendsAndFamily = () => {
  return (
    <section className="dark:static-section-bg-dark w-screen mt-12">
      <section className="p-5 flex flex-col gap-5 md:flex-row md:items-center">
        <div className="flex flex-col gap-5 md:w-2/4">
          <p className="w-20 border-b-2 border-blue-600"></p>
          <h1 className="text-4xl">
            Live Movie & TV Shows For Friends & Family
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            There are many variations of passages of lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <p className="text-5xl uppercase">Ultra HD 4K</p>
          <div className="flex">
            <Link className="rounded-full py-3 px-8 bg-blue-600" to="/category">
              Download Now
            </Link>
          </div>
        </div>
        <div className="md:w-2/4">
          <img className="rounded-sm" src={FNF} alt="Friends and Famely" />
        </div>
      </section>
    </section>
  );
};

export default FriendsAndFamily;
