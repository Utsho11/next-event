"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, ImageIcon, InfoIcon, MapPin, Rocket } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { DatePickerTime } from "../InputFields/DateTimePicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { categories } from "@/constant/catagories";
import { Button } from "../ui/button";
import Image from "next/image";
import { addEvent } from "@/services/event-services";
import { useAuth } from "@/context/AuthContext";

const AddEventForm = () => {
  const { user } = useAuth();
  const [eventName, setEventName] = useState("");
  const [eventShortDescription, setEventShortDescription] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [ticketPrice, setTicketPrice] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user?.email) {
      alert("Please log in to create an event");
      return;
    }

    const creator = user.email;

    const eventData = {
      creator,
      eventName,
      eventShortDescription,
      eventDescription,
      date,
      category,
      location,
      ticketPrice: Number(ticketPrice),
      imageUrl,
    };

    // Basic validation
    if (!eventName || !category || !location) {
      alert("Please fill all required fields");
      return;
    }

    if (Number(ticketPrice) < 0) {
      alert("Price must be positive");
      return;
    }

    try {
      await addEvent(eventData);
      alert("Event created successfully!");

      setEventName("");
      setEventDescription("");
      setCategory("");
      setLocation("");
      setTicketPrice(0);
      setImageUrl("");
      setDate(new Date());
    } catch (error) {
      console.log(error);
      alert("Failed to create event");
    }
  };

  return (
    <section className="min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* General Information */}
          <Card className="w-full shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <InfoIcon className="h-5 w-5" />
                General Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="eventName">Event Name</Label>
                <Input
                  id="eventName"
                  type="text"
                  placeholder="Enter event name"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventShortDescription">Event Short Description</Label>
                <Textarea
                  id="eventShortDescription"
                  placeholder="Enter a short description for the event"
                  className="min-h-20 resize-none"
                  value={eventShortDescription}
                  onChange={(e) => setEventShortDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventDescription">Event Description</Label>
                <Textarea
                  id="eventDescription"
                  placeholder="Enter event description"
                  className="min-h-40 resize-none"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Details Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Time & Category */}
            <Card className="w-full shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calendar className="h-5 w-5" />
                  Time & Category
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="date">Date & Time</Label>
                  <DatePickerTime date={date} setDate={setDate} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.label}
                            value={category.label}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Location & Price */}
            <Card className="w-full shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MapPin className="h-5 w-5" />
                  Location & Price
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ticketPrice">Ticket Price</Label>
                  <Input
                    id="ticketPrice"
                    type="number"
                    placeholder="Enter ticket price"
                    min={0}
                    value={ticketPrice}
                    onChange={(e) =>
                      setTicketPrice(parseFloat(e.target.value) || 0)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e") {
                        e.preventDefault();
                      }
                    }}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <ImageIcon /> Event Image
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col md:flex-row gap-6">
              {/* Input */}
              <div className="w-full md:w-1/2 space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  type="text"
                  placeholder="Paste image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              {/* Preview */}
              <div className="w-full md:w-1/2">
                {imageUrl ? (
                  <div className="relative w-full h-60 rounded-md overflow-hidden border">
                    <Image
                      src={imageUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-60 rounded-md border border-dashed text-muted-foreground">
                    Image preview will appear here
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="w-full text-white md:w-auto md:min-w-48 bg-linear-to-r from-[#3525CD] to-[#831ADA]"
            >
              <Rocket /> Publish Event
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddEventForm;
