import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../ui/avatar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="py-4 md:py-8 flex flex-col-reverse md:flex-row gap-5 md:gap-16 px-4 md:px-8">
      <div className="space-y-4 md:space-y-8 w-full md:w-1/2">
        <Badge className="hidden md:block bg-[#DCE9FF] text-[#3525CD]">
          TRANSFORMING EXPERIENCES
        </Badge>
        <h1 className="text-center md:text-left md:text-5xl text-3xl font-bold leading-tight">
          Discover & Manage <br />{" "}
          <span className="bg-linear-to-r from-[#3525CD] to-[#831ADA] bg-clip-text text-transparent">
            Amazing Events
          </span>
        </h1>
        <p className="text-md text-[#464555] text-center md:text-left">
          The all-in-one platform for professional organizers and attendees.{" "}
          <br />
          Experience high-density planning with minimal friction.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 w-full md:w-auto">
          <Link href="/events">
            <Button
              className="bg-linear-to-r from-[#3525CD] to-[#831ADA] text-white"
            >
              Explore Events
            </Button>
          </Link>

          <Link href="/events/add">
            <Button
              variant={"outline"}
              className="bg-transparent text-black w-full"
            >
              Create Event
            </Button>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <AvatarGroup className="">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <AvatarGroupCount className="w-fit px-4 bg-[#DCE9FF] text-[#3525CD]">
              2,000+ organizers already joined
            </AvatarGroupCount>
          </AvatarGroup>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="border-8 w-fit rounded-4xl border-[#F1F5F9]">
          <Image
            width={600}
            height={480}
            src="/hero-image.png"
            alt="Hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
