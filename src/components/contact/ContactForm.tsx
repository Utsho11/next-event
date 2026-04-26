"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createContactMessage } from "@/services/event-services";
import { Label } from "../ui/label";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    setLoading(true);

    try {
      await createContactMessage(data);
      toast.success("Message sent successfully", {
        description: (
          <p className="text-gray-400">
            Sent at: {new Date().toLocaleString()}
          </p>
        ),
      });

      form.reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(
        <p className="text-red-500">
          {error.message || "Failed to send message"}
        </p>,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:relative rounded-xl border bg-white p-8 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="space-y-2 md:col-span-2">
          <Label>Name:</Label>
          <Input name="name" placeholder="Name" required />
        </div>
        <div className="space-y-2 md:col-span-3">
          <Label>Email:</Label>
          <Input name="email" placeholder="Email" required />
        </div>
      </div>
      <div className="space-y-2 mt-4">
        <Label>Subject:</Label>
        <Input name="subject" placeholder="Subject" className="mt-3" />
      </div>
      <div className="space-y-2 mt-4">
        <Label>Message:</Label>
        <Textarea
          name="message"
          placeholder="Message"
          className="h-30 md:h-50"
          required
        />
      </div>

      <div className="md:absolute w-full md:bottom-10 flex justify-center">
        <Button
          className="mt-4 w-1/2 bg-linear-to-r from-[#3525CD] to-[#831ADA] text-white"
          disabled={loading}
        >
          <Send /> {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
