"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import {
  CalendarDays,
  MapPin,
  Ticket,
  Users,
  BadgeCheck,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getEventById, type EventData } from "@/services/event-services";

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

  //   const eventDate =
  //     event.date && "toDate" in event.date
  //       ? event.date.toDate()
  //       : new Date(event.date as unknown as string);

  const eventDate = new Date(event.date);

  return (
    <main className="min-h-screen bg-[#f4f7ff] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Button
          variant="ghost"
          onClick={() => router.push("/events")}
          className="mb-4 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Button>

        {/* Hero */}
        <section className="relative h-75 overflow-hidden rounded-xl shadow-md md:h-107.5">
          <Image
            src={event.imageUrl || "/images/fallback.jpg"}
            alt={event.eventName}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-8 left-6 right-6 md:left-10">
            <Badge className="mb-4 bg-indigo-600 text-white">
              {event.category}
            </Badge>

            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
              {event.eventName}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-950">
                About This Event
              </h2>

              <p className="leading-7 text-slate-600">
                {event.eventDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Card className="bg-blue-50/60">
                <CardContent className="p-6">
                  <BadgeCheck className="mb-4 h-5 w-5 text-indigo-600" />
                  <h3 className="mb-2 font-bold text-slate-950">
                    Certified Tracks
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Learn from expert speakers and gain valuable knowledge
                    through professional event sessions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50/60">
                <CardContent className="p-6">
                  <Users className="mb-4 h-5 w-5 text-indigo-600" />
                  <h3 className="mb-2 font-bold text-slate-950">
                    Expert Networking
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Connect with professionals, organizers, and participants
                    from different industries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Card */}
          <Card className="h-fit shadow-lg">
            <CardContent className="space-y-6 p-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-indigo-600">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Date & Time
                  </p>
                  <h3 className="font-bold text-slate-950">
                    {format(eventDate, "MMM dd, yyyy")}
                  </h3>
                  <p className="text-sm text-slate-500">
                    Starts at {format(eventDate, "hh:mm a")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-indigo-600">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Location
                  </p>
                  <h3 className="font-bold text-slate-950">{event.location}</h3>
                  <p className="text-sm text-indigo-600">View on Map</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-indigo-600">
                  <Ticket className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Price
                  </p>
                  <h3 className="text-3xl font-bold text-slate-950">
                    {event.ticketPrice === 0 ? "Free" : `$${event.ticketPrice}`}
                  </h3>
                  <p className="text-sm text-slate-500">Standard Pass</p>
                </div>
              </div>

              <Button className="h-12 w-full bg-linear-to-r from-[#3525CD] to-[#831ADA] font-semibold text-white">
                Get Tickets Now
              </Button>

              <p className="text-center text-sm text-slate-500">
                Only 42 spots remaining!
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
