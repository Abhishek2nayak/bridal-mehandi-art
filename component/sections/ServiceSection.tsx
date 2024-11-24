"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";
import Section from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { services } from "@/app/api";


// Define proper TypeScript interfaces
interface Service {
    image: string;
    alt: string;
    title: string;
    price: string;
    description: string;
    type: string;
}

interface LazyImageProps {
    src: string;
    alt: string;
    price?: string;
    type: string;
    classes?: string;
}

export const LazyImage = ({ src, alt, price, type, classes }: LazyImageProps) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div
            className={`relative transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className={`relative w-full h-48 ${classes}`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={`object-cover`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoadingComplete={() => setLoaded(true)}
                    priority={false}
                />
            </div>
            {loaded && (
                <div className="absolute bottom-2 left-2 text-white bg-black/80 px-2 py-1 rounded-md text-sm">
                    {price}
                </div>
            )}
        </div>
    );
};

export default function Service() {
    return (
        <Section
            title="Explore Our mehandi Services"
            description="We offer a variety of mehandi designs for different occasions, whether it’s a wedding, baby shower, or festive celebration. Our 100% organic mehandi ensures no side effects. Trust our professional team to create stunning, intricate designs tailored to your needs."
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {services.map((service, index) => (
                    <Link
                        href={{
                            pathname: "/mehandi-services",
                            query: { type: service.type },
                        }}
                        className="block relative w-full"
                        key={service.type}
                    >
                        <Card className="w-full h-[300px]">
                            <LazyImage
                                src={service.image}
                                alt={service.alt}
                                price={service.price}
                                type={service.type}
                            />
                            <Card.Content
                                title={service.title}
                                description={`${service.description.slice(0, 50)}...`}
                            />
                        </Card>
                    </Link>
                ))}
            </div>
            <br />
            <Link href="/mehandi-services">
                <Button classes="mt-5" variant="outline" size="md">
                    See all services
                    <ArrowRight />
                </Button>
            </Link>
        </Section>
    );
}
