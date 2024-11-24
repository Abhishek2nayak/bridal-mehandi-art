import { serviceImage } from "@/app/api";
import Section from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { ArrowBigLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

type ImageCardProps = {
    src: string;
    alt: string;
    className?: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => {
    return (
        <div
            className={`relative rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-yellow-300 to-yellow-500 p-1 ${className}`}
        >
            <div className="rounded-lg overflow-hidden bg-white">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default function Gallery() {
    return (
        <Section
            title="Our Gallery"
            description="Explore our gallery of elegant mehandi designs, including bridal mehandi, Arabic styles, dulhan mehandi for hands and legs, engagement patterns, and more. Every design is crafted with perfection for weddings, baby showers, and festive occasions."
        >
            <div className="w-full flex gap-5 flex-wrap justify-center">
                {serviceImage.slice(0, 6).map((i) => {
                    return (
                        <div key={i.alt}>
                            <ImageCard
                                src={i.img_url}
                                alt={i.alt}
                                className="w-[250px] h-[300px]"
                            />
                        </div>
                    );
                })}
            </div>

            <Link href={'/mehandi-design-gallery'}>
                <Button classes="mt-5" variant="outline" size="md">
                    See More
                    <ArrowRight />
                </Button>
            </Link>
        </Section>
    );
}
