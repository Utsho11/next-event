"use client";
import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

type TicketItem = {
  id?: string;
  eventName: string;
  date: string;
  location: string;
  ticketPrice: number;
  quantity: number;
  bookedAt: string;
};

export default function MyTickets() {

   const [tickets, setTickets] = useState<TicketItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      try {
        const data = localStorage.getItem("nextevent_tickets");
        setTickets(data ? JSON.parse(data) : []);
      } catch {
        setTickets([]);
      }

      setMounted(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">My Tickets</h2>
        <p className="mt-4 text-muted-foreground">Loading tickets...</p>
      </div>
    );
  }


  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">My Tickets</h2>
          <p className="text-sm text-muted-foreground">
            Tickets you have purchased
          </p>
        </div>
      </CardHeader>

      <CardContent className="overflow-x-auto p-0">
        {tickets.length === 0 ? (
          <div className="py-10 text-center text-slate-500">
            No tickets purchased yet.
          </div>
        ) : (
          <Table>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  {/* Event */}
                  <TableCell className="min-w-64">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                        <CalendarDays className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          {ticket.eventName}
                        </p>
                        <p className="text-xs text-slate-500">
                          {ticket.location}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Date */}
                  <TableCell className="text-slate-600">
                    {new Date(ticket.date).toLocaleDateString()}
                  </TableCell>

                  {/* Quantity */}
                  <TableCell className="text-slate-600">
                    {ticket.quantity}
                  </TableCell>

                  {/* Total Price */}
                  <TableCell className="font-medium">
                    {ticket.ticketPrice === 0
                      ? "Free"
                      : `$${ticket.ticketPrice * ticket.quantity}`}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      Booked
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
