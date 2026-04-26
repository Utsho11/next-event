"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { PlusCircle, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { deleteEvent, type EventData } from "@/services/event-services";
import Image from "next/image";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { toast } from "sonner";

interface ManageEventsTableProps {
  setEvents: (callback: (prevEvents: EventData[]) => EventData[]) => void;
  events: EventData[];
}

export default function ManageEventsTable({
  setEvents,
  events,
}: ManageEventsTableProps) {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const handleDelete = async (id: string) => {
    try {
      await deleteEvent(id);
      toast.success(
        <p className="text-green-500">Event Deleted successfully!</p>,
        {
          description: (
            <p className="text-gray-400">
              Delete at: {new Date().toLocaleString()}
            </p>
          ),
        },
      );

      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete event");
    }
  };

  return (
    <div className="mt-6 rounded-xl border bg-white shadow-sm mx-4 md:mx-12">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-semibold">Published Events</h1>
        <Link href={"/events/add"}>
          <Button className="bg-linear-to-r from-[#3525CD] to-[#831ADA] text-white">
            <PlusCircle />
            Add Event
          </Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event Title</TableHead>
            <TableHead>Date & Location</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {events.map((event) => {
            const eventDate = new Date(event.date);

            return (
              <TableRow key={event.id} className="hover:bg-muted/50 transition">
                {/* Event Title + Category */}
                <TableCell className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 rounded-md">
                    <AvatarImage src={event.imageUrl} />
                    <AvatarFallback>EV</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {event.eventName}
                    </p>

                    {/* 👇 your customization */}
                    <p className="text-sm text-muted-foreground">
                      {event.category}
                    </p>
                  </div>
                </TableCell>

                {/* Date & Location */}
                <TableCell>
                  <div>
                    <p className="font-medium">{format(eventDate, "PPP")}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.location}
                    </p>
                  </div>
                </TableCell>

                {/* Price */}
                <TableCell>${event.ticketPrice}</TableCell>

                {/* Actions */}
                <TableCell className="text-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedEvent(event)}
                  >
                    View Details
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500"
                    onClick={() => handleDelete(event?.id as string)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        {selectedEvent && (
          <DialogContent className="max-w-lg rounded-xl">
            <DialogHeader>
              <DialogTitle className="text-3xl">
                {selectedEvent.eventName}
              </DialogTitle>
            </DialogHeader>

            {/* Image */}
            <div className="w-full h-48 rounded-md overflow-hidden border">
              <Image
                src={selectedEvent.imageUrl}
                width={300}
                height={200}
                alt="Event"
                className="object-cover"
              />
            </div>

            <Separator />

            {/* Info */}
            <div className="space-y-3 mt-4">
              <Label>Category</Label>
              <p className="text-sm text-muted-foreground">
                {selectedEvent.category}
              </p>
              <Separator />
              <Label>Description</Label>
              <p>{selectedEvent.eventDescription}</p>
              <Separator />
              <div className="text-sm">
                <p>
                  <strong>Date:</strong>{" "}
                  {format(new Date(selectedEvent.date), "PPP p")}
                </p>

                <p>
                  <strong>Location:</strong> {selectedEvent.location}
                </p>

                <p>
                  <strong>Price:</strong> ${selectedEvent.ticketPrice}
                </p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
