"use client";
import type { EventData } from "@/services/event-services";

import Image from "next/image";
import { format } from "date-fns";
import { CalendarDays, MapPin, Ticket, Users, BadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { buyTicket } from "@/lib/ticket-storage";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";

const EventDetails = ({ event }: { event: EventData }) => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const handleBuy = () => {
    if (quantity <= 0) return;

    buyTicket(event, quantity);

    toast.success("Ticket purchased!", {
      description: (
        <p className="text-gray-400">
          Purchased At: {new Date().toLocaleString()}
        </p>
      ),
    });

    setOpen(false);
    setQuantity(1);
  };

  const eventDate = new Date(event.date);
  return (
    <div className="mx-auto max-w-7xl">
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

            <p className="leading-7 text-slate-600">{event.eventDescription}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card className="bg-blue-50/60">
              <CardContent className="p-6">
                <BadgeCheck className="mb-4 h-5 w-5 text-indigo-600" />
                <h3 className="mb-2 font-bold text-slate-950">
                  Certified Tracks
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  Learn from expert speakers and gain valuable knowledge through
                  professional event sessions.
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
                  Connect with professionals, organizers, and participants from
                  different industries.
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

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="w-full h-12 bg-linear-to-r from-[#3525CD] to-[#831ADA] text-white">
                  Get Tickets Now
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md bg-[#E5EEFF]">
                <DialogHeader>
                  <DialogTitle>Buy Tickets</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {event.eventName}
                  </p>

                  <div>
                    <Label className="text-sm font-medium my-2">Quantity</Label>
                    <Input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>

                  <p className="text-sm">
                    Total:{" "}
                    <span className="font-semibold">
                      {event.ticketPrice === 0
                        ? "Free"
                        : `$${event.ticketPrice * quantity}`}
                    </span>
                  </p>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>

                  <Button
                    onClick={handleBuy}
                    className="bg-linear-to-r from-[#3525CD] to-[#831ADA] text-white"
                  >
                    Confirm Purchase
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default EventDetails;
