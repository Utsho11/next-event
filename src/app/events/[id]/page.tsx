"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getEventById, type EventData } from "@/services/event-services";
import EventDetails from "@/components/events/EventDetails";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import RelatedEvents from "@/components/events/RelatedEvents";

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) return;

      try {
        const data = await getEventById(id as string);
        setEvent(data as EventData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading event...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Event not found.</p>
        <Button onClick={() => router.push("/events")}>Back to Events</Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f7ff] px-4 py-6 md:px-8">
      <div className="">
        <Button
          variant="ghost"
          onClick={() => router.push("/events")}
          className="mb-4 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Button>
      </div>
      <div>
        <EventDetails event={event} />
      </div>
      <Separator className="border border-gray-300 my-8" />
      <div className="col-span-1 md:col-span-4 gap-5">
        <RelatedEvents category={event.category} id={event.id as string} />
      </div>
    </main>
  );
}
