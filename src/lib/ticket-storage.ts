import { EventData } from "@/services/event-services";

export type TicketItem = EventData & {
  quantity: number;
  bookedAt: string;
};

const TICKET_KEY = "nextevent_tickets";

export const getTickets = (): TicketItem[] => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(TICKET_KEY);
  return data ? JSON.parse(data) : [];
};

export const buyTicket = (event: EventData, quantity: number) => {
  const tickets = getTickets();

  const existing = tickets.find((item) => item.id === event.id);

  let updated;

  if (existing) {
    updated = tickets.map((item) =>
      item.id === event.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    updated = [
      ...tickets,
      {
        ...event,
        quantity,
        bookedAt: new Date().toISOString(),
      },
    ];
  }

  localStorage.setItem("nextevent_tickets", JSON.stringify(updated));
};

export const removeTicket = (id: string) => {
  const tickets = getTickets();
  const updatedTickets = tickets.filter((item) => item.id !== id);

  localStorage.setItem(TICKET_KEY, JSON.stringify(updatedTickets));
};