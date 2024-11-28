import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import homeImage from "@/assets/images/home-page-img.jpg";
import Link from "next/link";
const HomePage = () => {
  return (
    <Wrapper>
      <div className="py-16">
        <div className="flex flex-col md:flex-row items-center justify-around my-20   ">
          <div className="space-y-4 max-w-md text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Discover Our Exclusive Collection
            </h1>
            <h2 className="text-lg sm:text-xl text-secondary-white">
              Luxury, Style, and Comfort
            </h2>
            <p className="text- sm:text-lg text-secondary-white">
              Explore a curated selection of top-quality products designed to
              meet your lifestyle needs. Whether you are looking for the latest
              fashion trends or timeless classics, we have got you covered.
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg ">
              <Link href={"/products"}>Shop Now</Link>
            </button>
          </div>
          <div className="sm:px-4 md:w-1/2 mt-10 md:mt-0 rounded-lg overflow-hidden">
            <Image
              src={homeImage}
              alt="Featured Product"
              className="w-full h-full object-cover rounded-lg hover:scale-110 duration-500 hover:duration-500"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
