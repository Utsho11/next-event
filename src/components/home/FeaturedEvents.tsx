"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { getUpcomingEvents, type EventData } from "@/services/event-services";
import { useEffect, useState } from "react";
import EventCard from "../events/EventCard";
import Link from "next/link";

const FeaturedEvents = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getUpcomingEvents();
      setEvents(data as EventData[]);
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-[#F1F5F9] my-4 md:my-8 px-4 md:px-8 py-4 md:py-8">
      <div className="px-8">
        <h1 className="text-3xl font-semibold">Upcoming Events</h1>
        <div className="flex justify-between items-center">
          <p className="text-[#464555]">
            Don&apos;t miss out on the most anticipated gatherings of the
            season.
          </p>
          <Link href="/events">
            <Button variant={"outline"} className="text-[#3525CD] bg-[#F1F5F9]">
              View All <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 md:mt-8 mt-4">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
