import Image from "next/image";
import Link from "next/link";
import { Clock, Banknote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export type EventCardProps = {
  id?: string;
  eventName: string;
  eventShortDescription: string;
  date: Date;
  category: string;
  location: string;
  ticketPrice: number;
  imageUrl: string;
};

export default function EventCard({
  id,
  eventName,
  eventShortDescription,
  date,
  category,
  location,
  ticketPrice,
  imageUrl,
}: EventCardProps) {
  const eventDate = new Date(date);

  const month = eventDate
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();

  const day = eventDate.toLocaleString("en-US", { day: "2-digit" });

  const time = eventDate.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="group p-0 overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-full overflow-hidden rounded-lg relative">
        <Image
          src={imageUrl}
          alt={eventName}
          width={300}
          height={200}
          className="object-cover w-full"
        />
        <div className="top-2 left-2 absolute">
          <Badge className="bg-[#ffffff] text-[#3525CD]">{category}</Badge>
        </div>
      </div>
      <CardContent className="">
        <div className=" flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold leading-tight text-slate-950">
            {eventName}
          </h3>

          <div className="shrink-0 text-center">
            <p className="text-lg font-bold uppercase text-indigo-600">
              {month}
            </p>
            <p className="text-xl font-bold leading-none text-slate-950">
              {day}
            </p>
          </div>
        </div>

        <div className="my-1">
          <p className="text-sm">{eventShortDescription.slice(0, 50)}...</p>
        </div>

        <div className=" mt-2 space-y-2 text-md text-slate-500">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5" size={16} />
              <span>{location.slice(0, 10)}...</span>
            </div>

            <div className="flex items-center gap-3">
              <Banknote className="h-5 w-5" size={16} />
              <span>{ticketPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5" size={16} />
            <span>{time}</span>
          </div>
        </div>
        <CardFooter className="relative flex justify-center mt-2 bg-white">
          <Button
            asChild
            variant="outline"
            size={"sm"}
            className="border-blue-400 w-full bg-[#E5EEFF] hover:bg-linear-to-r from-[#3525CD] to-[#831ADA] text-[#3525CD] hover:text-white"
          >
            <Link href={`/events/${id}`}>View Details</Link>
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
