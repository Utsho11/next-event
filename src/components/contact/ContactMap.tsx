import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <div className="relative h-68.75 overflow-hidden rounded-xl border bg-slate-800">
      <div className="flex h-full items-center justify-center bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[22px_22px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7295.8565093634425!2d90.32686535062265!3d23.892162660630728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1777191210223!5m2!1sen!2sbd"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Button
        size="sm"
        className="absolute bottom-5 right-5 rounded-full bg-white text-indigo-600 hover:bg-slate-100"
      >
        <Navigation className="mr-2 h-4 w-4" />
        Get Directions
      </Button>
    </div>
  );
}
