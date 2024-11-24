"use client"

import { useEffect, useRef } from "react";
import ActionButtons from "../ui/ActionButtons";
import MainHeading from "../ui/Heading";
import Description from "../ui/Description";
import { Button } from "../ui/Button";
import { ClipboardCheck, Phone } from "lucide-react";
import Link from "next/link";

export function AutoScrollGallery() {
    const galleryContainerRef = useRef(null);

    useEffect(() => {
        const galleryOptions = {
            // Enable auto slideshow
            slideshow: true,
            // Set the auto slideshow interval
            interval: 5000, // 5 seconds for each slide
            // Enable fullscreen
            fullscreen: true,
            // Enable touch swipe gestures for mobile devices
            touch: true,
            // Adjust for seamless scrolling
            carousel: true,
        };

        // const gallery = new Gallery(galleryContainerRef.current, galleryOptions);

        return () => {
            // gallery.dispose(); // Clean up the gallery when the component unmounts
        };
    }, []);

    const images = [
        {
            src: "https://your-image-url.com/image1.jpg", // Replace with actual image URL
            title: "Intricate Mehandi Designs",
            description:
                "Discover beautiful, personalized Mehandi designs for all occasions.",
        },
        {
            src: "https://your-image-url.com/image2.jpg", // Replace with actual image URL
            title: "Bridal Mehandi Creations",
            description:
                "Special bridal Mehandi designs to make your wedding day unforgettable.",
        },
        {
            src: "https://your-image-url.com/image3.jpg", // Replace with actual image URL
            title: "Traditional Henna Art",
            description:
                "Immerse yourself in the rich traditions of Henna artistry with timeless designs.",
        },
    ];

    const handleCallNow = () => {
        window.open("tel:+1234567890");
    };

    const handleBookNow = () => {
        window.open("/booking");
    };

    return (
        <main className=" relative infinite-photo-grid w-full h-[700px] max-h-[750px] overflow-hidden">
            {/* Content */}
            <div className="w-full h-full absolute flex flex-col items-center justify-center">
                {/* Transparent Background Layer */}
                <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center flex-col p-10 rounded-lg bg-black bg-opacity-8">
                    <MainHeading
                        size="sm"
                        title="Best Mehandi Artist in 
            Chennai, Coimbatore,Madurai,Tamilnadu"
                        variant="primary"
                    />
                    <Description
                        text="With 12+ years of experience, we are known for our beautiful and detailed Mehandi designs. Our expert artists create perfect designs for weddings and special occasions, making your celebration even more memorable"
                        variant="accent"
                        classes="mt-5 text-center"
                    />
                    <div className="flex justify-center gap-4 mt-5">
                        <Link href="/booknow">
                            <Button icon={<ClipboardCheck />} variant="outline" size="lg">
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
                  py-2.5
                  text-lg
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
                    </div>                </div>
            </div>
        </main>
    );
}
