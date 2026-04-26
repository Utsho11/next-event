import { getEventByCategory, type EventData } from "@/services/event-services";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Separator } from "../ui/separator";

const RelatedEvents = ({ category, id }: { category: string; id: string }) => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!category) return [];

      try {
        const data = await getEventByCategory(category);
        setEvents(data as EventData[]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [category]);

  const filteredEvents = events.filter((event) => event.id !== id);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading event...</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="text-3xl font-semibold">
        <h1>Related Events</h1>
        <Separator className="border border-gray-300 my-8"/>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 my-4 md:my-8'>
        {
            filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                   
                ))
            ) : (
                <p>No related events found.</p>
            )
        }
      </div>
    </div>
  );
};

export default RelatedEvents;
