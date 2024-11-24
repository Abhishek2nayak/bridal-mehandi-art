import { LazyImage } from "@/component/sections/ServiceSection";
import { serviceImage } from "../api";
import Head from "next/head";


export default function Gallery() {
    return (
        <>
            <Head>
                <title>Mehandi Gallery | Bridal, Arabic, Wedding Mehandi Designs</title>
                <meta
                    name="description"
                    content="Explore our Mehandi gallery featuring beautiful bridal, Arabic, wedding, and traditional Mehandi designs. Find inspiration for your next event!"
                />
                <meta
                    name="keywords"
                    content="Mehandi gallery, bridal Mehandi designs, Arabic Mehandi, wedding Mehandi, Mehandi design inspiration, Tamil Nadu Mehandi artists"
                />
            </Head>

            <div className="flex justify-center">
                <div className="w-[80vw]">
                    <h3 className="text-center text-8xl font-bold text-darkBrown mt-24">See Our Creation</h3>
                    <p className="p-10 text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis doloremque consectetur rem hic vitae eius quas ipsum, debitis cumque error delectus voluptate? Atque molestiae libero nesciunt vero, consectetur a esse!
                    </p>
                    <div className="mt-10 flex justify-center flex-wrap gap-3">
                        {serviceImage.map((service, index) => (
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
            </div>
        </>
    )
}