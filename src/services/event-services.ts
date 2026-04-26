/* eslint-disable @typescript-eslint/no-explicit-any */
import { demoEvents } from "@/constant/demoData";
import { db } from "@/lib/firebase.config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";

export type EventData = {
  id?: string;
  creator: string;
  eventName: string;
  eventShortDescription: string;
  eventDescription: string;
  date: Date;
  category: string;
  location: string;
  ticketPrice: number;
  imageUrl: string;
};

const eventsCollection = collection(db, "events");

export const addEvent = async (eventData: EventData) => {
  return await addDoc(eventsCollection, {
    ...eventData,
    date: eventData.date.toISOString(),
    createdAt: serverTimestamp(),
  });
};

export const getEvents = async () => {
  const snapshot = await getDocs(eventsCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getEventById = async (id: string) => {
  const docRef = doc(db, "events", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const deleteEvent = async (id: string) => {
  const docRef = doc(db, "events", id);
  return await deleteDoc(docRef);
};

export const getMyEvents = async (email: string | null) => {
  if (!email) return [];
  try {
    const q = query(collection(db, "events"), where("creator", "==", email));

    const snapshot = await getDocs(q);

    const events = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return events;
  } catch (error) {
    console.error("Error fetching user events:", error);
    return [];
  }
};


export const getUpcomingEvents = async () => {
  const snapshot = await getDocs(collection(db, "events"));

  const now = new Date();

  const events = snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    // 🔥 filter future events
    .filter((event: any) => new Date(event.date) > now)
    // 🔥 sort nearest first
    .sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    )
    // 🔥 take only 3
    .slice(0, 4);

  return events;
};



export const seedEvents = async () => {
  try {
    for (const event of demoEvents) {
      await addDoc(collection(db, "events"), event);
    }

    console.log("Demo events inserted successfully!");
  } catch (error) {
    console.error("Failed to insert demo events:", error);
  }
};

