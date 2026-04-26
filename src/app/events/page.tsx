"use client";
import EventCard from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/constant/catagories";
import { getEvents, type EventData } from "@/services/event-services";
import { Trash } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category"); 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery||"all");
  const [selectedPrice, setSelectedPrice] = useState<string>("0");
  const [events, setEvents] = useState<EventData[]>([]);

   
  

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data as EventData[]);
    };

    fetchEvents();
  }, []);

  const handleClearFilter = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedPrice("0");
  };

  const filteredEvents = events.filter((event) => {
  const search = searchTerm.toLowerCase();

  // 🔍 Search
  const matchesSearch =
    event.eventName.toLowerCase().includes(search) ||
    event.eventShortDescription.toLowerCase().includes(search) ||
    event.location.toLowerCase().includes(search);

  // 📂 Category
  const matchesCategory =
    selectedCategory === "all" || event.category === selectedCategory;

  // 💰 Price
  const price = Number(event.ticketPrice);

  const matchesPrice =
    selectedPrice === "0" || price <= Number(selectedPrice);

  return matchesSearch && matchesCategory && matchesPrice;
});



  return (
    <div className="bg-[#E5EEFF] p-4 md:p-8">
      <div className="space-y-5">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Discover Live Experiences
        </h1>
        <h4 className="text-sm text-gray-400">
          Browse upcoming professional workshops, tech summits, and networking{" "}
          <br />
          events happening across the globe.
        </h4>
      </div>
      <div className="mt-6 flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="w-full lg:max-w-md">
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Filters */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:w-auto lg:grid-cols-3">
          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.label} value={category.label}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price Filter */}
          <Select value={selectedPrice} onValueChange={setSelectedPrice}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Price" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="0">All Prices</SelectItem>
              <SelectItem value="500">{"<="}500</SelectItem>
              <SelectItem value="1000">{"<="}1000</SelectItem>
              <SelectItem value="1500">{"<="}1500</SelectItem>
              <SelectItem value="2000">{"<="}2000</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={handleClearFilter}>
            <Trash />
            Clear Filter
          </Button>
        </div>
      </div>
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 my-4 md:my-8">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
    </div>
  );
};

export default Page;
