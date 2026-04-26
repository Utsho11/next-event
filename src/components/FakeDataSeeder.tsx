"use client";
import { Button } from "@/components/ui/button";
import { seedEvents } from "@/services/event-services";

export default function SeedButton() {
  return (
    <Button onClick={seedEvents}>
      Insert Demo Events
    </Button>
  );
}