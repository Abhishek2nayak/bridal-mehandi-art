"use client";

import { useEffect, useRef } from "react";
import MainHeading from "../ui/Heading";
import Description from "../ui/Description";
import { Button } from "../ui/Button";
import { ClipboardCheck, Phone } from "lucide-react";
import Link from "next/link";

export const mobile_number = "+917417245847"

export function AutoScrollGallery() {
    const galleryContainerRef = useRef(null);

    useEffect(() => {
        const galleryOptions = {
            slideshow: true,
            interval: 5000,
            fullscreen: true,
            touch: true,
            carousel: true,
        };

        return () => {
            // Clean up the gallery when the component unmounts
        };
    }, []);

    const images = [
        {
            src: "https://your-image-url.com/image1.jpg",
            title: "Intricate Mehandi Designs",
            description:
                "Discover beautiful, personalized Mehandi designs for all occasions.",
        },
        {
            src: "https://your-image-url.com/image2.jpg",
            title: "Bridal Mehandi Creations",
            description:
                "Special bridal Mehandi designs to make your wedding day unforgettable.",
        },
        {
            src: "https://your-image-url.com/image3.jpg",
            title: "Traditional Henna Art",
            description:
                "Immerse yourself in the rich traditions of Henna artistry with timeless designs.",
        },
    ];
    return (
        <main className="relative infinite-photo-grid w-full h-screen max-h-[750px] overflow-hidden">
            {/* Content */}
            <div className="w-full h-full absolute flex flex-col items-center justify-center">
                {/* Transparent Background Layer */}
                <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center flex-col p-10 rounded-lg bg-black bg-opacity-8">
                    <MainHeading
                        size="sm"
                        title="Best Mehandi Artist in 
            Chennai, Coimbatore, Madurai, Tamilnadu"
                        variant="primary"
                        classes="text-center text-xl sm:text-3xl text-white"
                    />
                    <Description
                        text="With 12+ years of experience, we are known for our beautiful and detailed Mehandi designs. Our expert artists create perfect designs for weddings and special occasions, making your celebration even more memorable."
                        variant="accent"
                        classes="mt-4 text-sm sm:text-base text-center text-lightYellow"
                    />
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <Link href="/booknow">
                            <Button
                                icon={<ClipboardCheck />}
                                variant="outline"
                                size="md"
                                classes="w-full sm:w-auto text-sm sm:text-base px-4 py-2"
                            >
                                Book Now
                            </Button>
                        </Link>
                        <a
                            href="tel:+917417245847"
                            className="
                             inline-flex
                  items-center
                  gap-2
                  px-6
                  py-2
                  text-sm
                  sm:text-base
                  font-semibold
                  text-white
                  bg-darkBrown
                  rounded-lg
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-darkBrown/90
                  focus:outline-none
                  focus:ring-4
                  focus:ring-lightYellow
                  focus:ring-opacity-50
                "
                        >
                            <Phone size={20} />
                            <span>Call Us</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
