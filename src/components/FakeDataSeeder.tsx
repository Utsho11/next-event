"use client";
import { Button } from "@/components/ui/button";
import { seedEvents } from "@/services/event-services";
import { FileInput } from "lucide-react";

export default function SeedButton() {
  return (
    <Button onClick={seedEvents} className="bg-black text-white">
      <FileInput/> Demo Events
    </Button>
  );
}