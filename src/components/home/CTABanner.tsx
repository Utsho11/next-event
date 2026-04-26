import Video from "next-video";
import bg from "@/videos/bg.mp4";
import { Button } from "../ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
const CTABanner = () => {
  return (
    <div className="relative max-w-7xl my-4 md:my-8 h-96 overflow-hidden">
      <Video
        src={bg}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="w-full h-full obiect-cover"
      />
      <div className="absolute left-0 bottom-25 w-full">
        <h1 className=" text-white text-3xl font-bold text-center">
          Start Hosting Your Own <br />
          Events Today
        </h1>
        <p className=" text-center text-white text-sm mt-4">
          Join thousands of successful organizers and take your events to the
          next level with our <br />
          premium management suite.
        </p>
        <Link href="/events/add" className="text-white">
          <Button
            size={"lg"}
            className="bg-white text-[#3525CD] text-lg md:text-2xl mt-6 mx-auto flex items-center gap-2"
          >
            <PlusCircle size={24}/> ADD EVENT
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTABanner;
