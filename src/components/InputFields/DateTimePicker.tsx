"use client";

import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerTime({
  date,
  setDate,
}: {
  date: Date;
  setDate: (date: Date) => void;
}) {
  const [open, setOpen] = useState(false);

  // ✅ Convert date to HH:mm format
  const timeString = format(date, "HH:mm");

  return (
    <FieldGroup className="flex flex-col md:flex-row gap-3">
      {/* Date Picker */}
      <Field>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full md:w-40 justify-between font-normal"
            >
              {format(date, "PPP")}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                if (selectedDate) {
                  // keep existing time
                  const newDate = new Date(selectedDate);
                  newDate.setHours(date.getHours());
                  newDate.setMinutes(date.getMinutes());
                  setDate(newDate);
                  setOpen(false);
                }
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>

      {/* Time Picker */}
      <Field className="w-full md:w-32">
        <Input
          type="time"
          value={timeString}
          onChange={(e) => {
            const [hours, minutes] = e.target.value.split(":").map(Number);

            const newDate = new Date(date);
            newDate.setHours(hours);
            newDate.setMinutes(minutes);

            setDate(newDate);
          }}
        />
      </Field>
    </FieldGroup>
  );
}
