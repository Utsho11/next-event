"use client";

import ManageEventsHeader from "@/components/events/ManageEventsHeader";
import ManageEventsTable from "@/components/events/ManageEventTable";
import { useAuth } from "@/context/AuthContext";
import { getMyEvents, type EventData } from "@/services/event-services";
import { useEffect, useState } from "react";

const Page = () => {
  const { user } = useAuth();

  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchEvents = async () => {
      try {
        const data = await getMyEvents(user.email);
        setEvents(data as EventData[]);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [user?.email]);

  if (loading) {
    return <div className="p-6">Loading events...</div>;
  }

  return (
    <div className="bg-[#E5EEFF] min-h-screen py-6">
      <ManageEventsHeader events={events}/>
      <ManageEventsTable setEvents={setEvents} events={events} />
    </div>
  );
};

export default Page;