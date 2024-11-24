"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { getSelectedService, IService, MehandiType, serviceImage } from "../api";
import { LazyImage } from "@/component/sections/ServiceSection";
import Image from 'next/image';
import { ClipboardCheck } from 'lucide-react';
import { Button } from "@/component/ui/Button";
import Tabs from "@/component/ui/Tab";
import BookNowModal from "@/component/ui/BookModal";
import Link from "next/link";
import Head from "next/head";

const BridalMehndiService = ({ service }: { service: IService }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container mt-50 mx-auto px-4 py-12 lg:flex lg:items-center lg:space-x-8">
            <Head>
                <title>Mehandi Services - Bridal, Baby Shower & More Across Tamil Nadu</title>
                <meta
                    name="description"
                    content="We provide professional Mehandi services in Chennai, Coimbatore, and across Tamil Nadu. Offering full bridal packages, baby shower packages, and home booking services at affordable prices, 24x7."
                />
                <meta
                    name="keywords"
                    content="Mehandi services Chennai, Mehandi services Coimbatore, bridal Mehandi packages, baby shower Mehandi, home Mehandi booking, professional Mehandi artists, affordable Mehandi services Tamil Nadu"
                />
                <meta name="author" content="Bridal Mehandi Arted" />
                <meta property="og:title" content="Mehandi Services - Bridal, Baby Shower & More Across Tamil Nadu" />
                <meta
                    property="og:description"
                    content="Offering professional Mehandi services in Chennai, Coimbatore, and across Tamil Nadu. Full bridal and baby shower packages available with home booking options at affordable prices, 24x7."
                />
                <meta property="og:image" content="/assets/bridal.jpg" />
                {/* <meta property="og:url" content="https://yourwebsite.com/services" /> */}
                <meta property="og:type" content="website" />
            </Head>
            {/* Left Side - Image */}
            <div className="md:w-1/2 mb-6 lg:mb-0">
                <Image
                    src={service.image}
                    alt={service.alt}
                    width={600}
                    height={500}
                    className="rounded-md md:rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Right Side - Service Details */}
            <div className="lg:w-1/2 p-6 rounded-lg">
                <div className="space-y-4">
                    {/* Service Header */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-5xl font-bold text-lightBrown">
                            {service.title} Package
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-darkBrown mt-3 leading-relaxed">
                        {service.description}
                    </p>

                    {/* Price and Details */}
                    <div className="flex items-center justify-between bg-lightYellow p-4 rounded-md">
                        <div>
                            <p className="text-3xl font-bold text-dark">{service.price}</p>
                            <p className="text-sm mt-4 text-lightBrown">Full {service.title} Coverage</p>
                        </div>
                    </div>
                    <Link href={'/booknow'}>
                        {/* Book Now Button */}
                        <Button icon={<ClipboardCheck />} variant="primary" size="xl" classes="w-full mt-5" >
                            Book Now
                        </Button>
                    </Link>
                </div>
                {/* <BookNowModal type={service.type} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
            </div>
        </div>
    );
};

export default function Service() {
    const [tab, setActiveTab] = useState<MehandiType>('bridal');
    const [currentService, setCurrentService] = useState<IService | null>(getSelectedService(null));


    // If the service is not yet available, return loading state
    if (!currentService) {
        return <div>Loading...</div>;
    }

    // Filter images based on the current selected service type
    const filteredImages = serviceImage.filter((service) => service.type === currentService.type);

    return (
        <>
            <Tabs
                activeTab={tab}
                onClick={(type: MehandiType) => {
                    setCurrentService(getSelectedService(type));
                    setActiveTab(type)
                }} // Update active tab when clicked
            />

            {/* Render Service Details */}
            <BridalMehndiService service={currentService} />

            <div className="my-10">
                <h3 className="text-center text-5xl font-bold text-darkBrown">See Our {currentService.title} Creation</h3>
                <div className="mt-10 flex justify-center flex-wrap gap-3">
                    {filteredImages.map((service, index) => (
                        <div key={index} className="w-[350px] h-[400px]">
                            <LazyImage
                                src={service.img_url}
                                alt={service.alt}
                                type={service.type}
                                classes="h-[400px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}