"use client"

import { useState } from "react";
import Section from "../ui/SectionWrapper";
import Link from "next/link";

export default function LocationSection() {
    const locations = [
        {
            name: "Chennai",
            details:
                "Offering the best mehandi designs in Chennai, we bring professional mehandi artists to your doorstep. Perfect for weddings, engagements, and festive celebrations.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.23616943538!2d80.2212535852147!3d13.082680744893444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d503e6782f%3A0xbff53b6cd7281466!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1731768176100!5m2!1sen!2sin",
        },
        {
            name: "Kanchipuram",
            details:
                "Professional mehandi artists in Kanchipuram for weddings and other events. Book home services for exquisite mehandi artistry.",
            mapEmbed: "",
        },
        {
            name: "Vellore",
            details:
                "Providing the finest mehandi designs in Vellore. Our artists specialize in both traditional and modern styles for all occasions.",
            mapEmbed: "",
        },
        {
            name: "Dharmapuri",
            details:
                "Expert mehandi artists available in Dharmapuri. Book our services for an unforgettable experience for weddings and celebrations.",
            mapEmbed: "",
        },
        {
            name: "Salem",
            details:
                "Offering intricate mehandi designs in Salem for weddings, parties, and festivals. Get professional artists at your doorstep.",
            mapEmbed: "",
        },
        {
            name: "Erode",
            details:
                "Top-rated mehandi artists in Erode, providing exceptional service for any occasion. Book home services for quality artistry.",
            mapEmbed: "",
        },
        {
            name: "Coimbatore",
            details:
                "In Coimbatore, our mehandi artists create intricate designs for weddings, parties, and baby showers. Enjoy home booking and the finest artistry in the city.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249785.98659199954!2d76.8841490625!3d11.016844499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8596c5a926cb7%3A0x7e72f9b32e2d8e57!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1731768176100!5m2!1sen!2sin",
        },
        {
            name: "Tiruppur",
            details:
                "Get the best mehandi designs in Tiruppur. Our artists specialize in all types of mehandi designs for weddings and special events.",
            mapEmbed: "",
        },
        {
            name: "Pollachi",
            details:
                "Looking for stunning mehandi designs in Pollachi? Our artists offer professional services for all occasions.",
            mapEmbed: "",
        },
        {
            name: "Palani",
            details:
                "Offering traditional and modern mehandi designs in Palani. Book our professional mehandi artists for your events.",
            mapEmbed: "",
        },
        {
            name: "Dindigul",
            details:
                "Dindigul's top mehandi artists are available for home bookings. Get stunning designs for weddings and festivals.",
            mapEmbed: "",
        },
        {
            name: "Madurai",
            details:
                "Get traditional and Arabic mehandi designs in Madurai. Our professional artists ensure the best quality service for every occasion at your convenience.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249785.98659199954!2d78.0650950625!3d9.9390935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfbd225ca219%3A0xb37727d2598b2792!2sMadurai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1731768176100!5m2!1sen!2sin",
        },
        {
            name: "Tuticorin",
            details:
                "Our mehandi artists in Tuticorin provide beautiful and intricate designs for weddings, parties, and special events.",
            mapEmbed: "",
        },
        {
            name: "Tirunelveli",
            details:
                "Get expert mehandi artists in Tirunelveli to make your celebrations more memorable with stunning designs.",
            mapEmbed: "",
        },
        {
            name: "Nagercoil",
            details:
                "Professional mehandi services in Nagercoil, offering a variety of designs for weddings and festivals.",
            mapEmbed: "",
        },
        {
            name: "Kanyakumari",
            details:
                "Kanyakumari’s best mehandi artists are available to create beautiful designs for your special occasions.",
            mapEmbed: "",
        },
        {
            name: "Puducherry",
            details:
                "Get your mehandi done in Puducherry with expert artists offering both traditional and contemporary designs.",
            mapEmbed: "",
        },
        {
            name: "Villupuram",
            details:
                "Villupuram’s professional mehandi artists will provide exquisite designs for weddings and other celebrations.",
            mapEmbed: "",
        },
        {
            name: "Tiruchirapalli",
            details:
                "Tiruchirapalli’s finest mehandi artists offering home service for all events, including weddings and parties.",
            mapEmbed: "",
        },
    ];


    const [activeTab, setActiveTab] = useState(0);

    return (
        <Section
            title="Our Locations"
            description="We provide mehandi services across Tamil Nadu with home booking options. From Chennai to Coimbatore and Madurai, our professional mehandi artists deliver stunning designs for weddings, engagements, and festive events. People love our artistry and personalized service."
        >
            {/* Tabs for locations */}
            <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
                {locations.map((location, index) => (
                    <Link href={'/booknow'} key={location.name}>
                        <button

                            className={`px-4 py-2 rounded-md font-medium text-sm cursor-pointer transition ${activeTab === index
                                ? "bg-yellow-500 text-white"
                                : "bg-gray-200 text-gray-600"
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {location.name}
                        </button>
                    </Link>
                ))}
            </div>

        </Section>
    );
}
