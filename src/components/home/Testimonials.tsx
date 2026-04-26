"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/constant/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#f5f7ff] my-4 md:my-8 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            What Our Partners Say
          </h2>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="p-4">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="relative flex h-full flex-col justify-between p-8">
                    <span className="absolute right-8 top-4 text-7xl font-bold text-indigo-50">
                      ”
                    </span>

                    <p className="relative z-10 text-sm italic leading-7 text-slate-600 md:text-base">
                      &quot;{item.quote}&quot;
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <div>
                        <h4 className="font-bold text-slate-950">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
