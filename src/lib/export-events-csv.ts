import { EventData } from "@/services/event-services";

const escapeCSV = (value: unknown) => {
  const stringValue = String(value ?? "");
  return `"${stringValue.replace(/"/g, '""')}"`;
};

export const downloadEventsCSV = (events: EventData[]) => {
  const headers = [
    "Event Name",
    "Short Description",
    "Description",
    "Date",
    "Category",
    "Location",
    "Ticket Price",
    "Image URL",
    "Creator",
  ];

  const rows = events.map((event) => [
    event.eventName,
    event.eventShortDescription,
    event.eventDescription,
    event.date,
    event.category,
    event.location,
    event.ticketPrice,
    event.imageUrl,
    event.creator,
  ]);

  const csvContent = [
    headers.map(escapeCSV).join(","),
    ...rows.map((row) => row.map(escapeCSV).join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "my-published-events.csv";
  link.click();

  URL.revokeObjectURL(url);
};