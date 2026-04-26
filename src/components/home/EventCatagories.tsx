import { categories } from "@/constant/catagories";
import { Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EventCatagories = () => {
  return (
    <div className="my-4 md:my-8 px-4 md:px-8">
      <h1 className="text-center text-3xl font-semibold my-8">
        Browse By Category
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-4">
        {categories.map((catagory, index) => (
          <div
            key={index}
            className="bg-[#EFF4FF] flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-[#E0E7FF] cursor-pointer"
          >
            <Link
              href={`/events?category=${catagory.label}`}
              className="text-[#464555]"
            >
              <div className="p-4 bg-[#FFFFFF] w-fit rounded-2xl">
                {catagory.label === "Music" ? (
                  <Music size={25} className="text-[#3525CD]" />
                ) : (
                  <Image
                    width={25}
                    height={20}
                    src={`/category/${catagory.icon}`}
                    alt={catagory.label}
                    className=""
                  />
                )}
              </div>
              <p>{catagory.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCatagories;
