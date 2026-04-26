import {
  BriefcaseBusiness,
  Laptop,
  Music,
  Volleyball,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export const categories = [
  {
    label: "Tech",
    icon: <Laptop />,
  },
  {
    label: "Music",
    icon: <Music />,
  },
  {
    label: "Business",
    icon: <BriefcaseBusiness />,
  },
  {
    label: "Sport",
    icon: <Volleyball />,
  },
  {
    label: "Education",
    icon: <GraduationCap />,
  },
];

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
            className="bg-[#E0E7FF] flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-[#eff4ffec] cursor-pointer"
          >
            <Link
              href={`/events?category=${catagory.label}`}
              className="text-[#464555]"
            >
              <div className="p-4 bg-[#FFFFFF] w-fit rounded-2xl text-[#3525CD]">
                {catagory.icon}
              </div>
              <p className="text-center mt-2">{catagory.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCatagories;
