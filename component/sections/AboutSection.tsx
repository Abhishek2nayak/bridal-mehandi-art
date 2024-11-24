import Link from "next/link";
import AchievementCard from "../ui/AchievementCard";
import { Button } from "../ui/Button";
import Section from "../ui/SectionWrapper";
import { ArrowRight } from "lucide-react";


export default function About() {
    const achievements = [
        {
            highlight: "8000+",
            title: "Happy Customers",
            description:
                "Our customers are thrilled by the beauty of our Mehandi art.",
        },
        {
            highlight: "6000+",
            title: "Bridal Mehandi Designs",
            description:
                "Specialized bridal designs crafted with precision and love.",
        },
        {
            highlight: "12+",
            title: "Years of Experience",
            description: "Decades of expertise in traditional and modern Mehandi art.",
        },
    ];

    return (
        <>
            <Section title="Why choose us ?">
                <div className="w-full h-full flex justify-between flex-col md:flex-row items-center space-y-6 md:space-y-0">
                    <p className="w-full md:w-[60%] text-justify md:text-center px-4 md:px-0">
                        With over 12 years of experience, we specialize in creating
                        exquisite Mehandi designs for all occasions – from weddings and
                        festivals to any celebration worth cherishing.
                        <br />
                        <br />
                        Our team of professional artists is passionate about their craft,
                        using only 100% pure, organic, handmade Mehandi. This ensures
                        vibrant, long-lasting designs that are safe for your skin.
                        Cleanliness and hygiene are our top priorities, so you can enjoy
                        your Mehandi experience in a relaxing and comfortable environment.
                        <br />
                        <br />
                        Trusted by clients in Chennai, Coimbatore, Salem, Puducherry(Pandicherry), and across
                        Tamil Nadu, we offer a range of traditional and modern designs
                        tailored to your preferences. Our work combines beauty, quality, and
                        affordability to make every occasion truly special and
                        unforgettable.
                        <br />
                        <span className="block text-right">-- Akash Nayak</span>
                    </p>
                    <div className="flex flex-col gap-3 w-full md:w-auto px-4 md:px-0">
                        {achievements.map((achievement, index) => (
                            <AchievementCard
                                key={index}
                                highlight={achievement.highlight}
                                title={achievement.title}
                                description={achievement.description}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <Link href='/about'>
                        <Button classes="mt-5" variant="outline" size="md">
                            Know More
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}

