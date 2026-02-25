"use client";

import { CAROUSEL, CLIENTS } from "@/helper/constant";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          {/* Left  */}
          <div className="max-w-sm space-y-6">
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Experience our expert solutions tailored to enhance your business
              with top-tier design, development, and animation.
            </p>

            <button className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Services
            </button>
          </div>

          {/* Right  */}
          <div className="flex flex-col items-start space-y-4">
            <p className="text-2xl font-semibold text-gray-900 md:text-3xl">
              UI & UX
            </p>
            <p className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Development
            </p>
            <p className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Blockchain
            </p>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mt-12">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          scrollbar={{ hide: false }}
          modules={[Scrollbar]}
          className="pb-10"
          breakpoints={{
            768: {
              slidesPerView: 1.8,
            },
            1024: {
              slidesPerView: 1.2,
            },
          }}
        >
          {CAROUSEL.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[420px] overflow-hidden rounded-2xl">
                <img
                  src={img.image}
                  alt={img.name}
                  className="h-full w-full object-cover"
                />
                <div className="swiper-scrollbar mt-4" />

                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9d9d9] p-6 text-xs font-medium shadow-md">
                      Drag
                    </div>
                  </div>
                )}
                {/* <div className="swiper-scrollbar mt-4" /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-12 h-px w-full bg-gray-200" />

      {/* Partners */}
      <div>
        <h2 className="py-4 text-center text-xl font-medium">Our Partners</h2>
        <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-4">
          {CLIENTS.map((img) => (
            <div key={img.name} className="flex items-center justify-center">
              <Image
                src={img.image}
                alt={img.name}
                width={80}
                height={30}
                className="h-auto w-20 object-contain sm:w-24 md:w-28"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
