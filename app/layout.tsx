import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

// WhatsApp Button Component
const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/7417245847" // Replace with the phone number for WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 flex justify-center items-center bg-[#25d366] text-white text-4xl p-4 rounded-full shadow-lg animate-pulse transition-all hover:bg-[#128c7e] focus:outline-none"
      style={{ boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" }}
    >
      <img src="/assets/icon.png" width={32} alt="Whatsapp Icon" />
    </a>
  );
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata Configuration
export const metadata: Metadata = {
  title: "Best Mehandi Artists in Tamil Nadu | Bridal, Arabic & Traditional Designs",
  description:
    "We offer professional Mehandi services across Tamil Nadu, including Chennai and Coimbatore. Full bridal, Arabic, and traditional Mehandi designs at affordable prices. Book your appointment now!",
  openGraph: {
    title: "Best Mehandi Artists in Tamil Nadu | Bridal, Arabic & Traditional Designs",
    description:
      "Professional Mehandi services for bridal, Arabic, and traditional designs in Chennai, Coimbatore, and Tamil Nadu. Book your appointment today for exquisite Mehandi art.",
    url: "https://bridalmehandiart.com", // Replace with your actual website URL
    siteName: "Bridal Mehandi Art",
    images: [
      {
        url: "https://bridalmehandiart.com/assets/bridal.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Bridal Mehandi Art - Bridal & Arabic Mehandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@yourhandle", // Optional: Replace with your Twitter handle
    title: "Best Mehandi Artists in Tamil Nadu | Bridal, Arabic & Traditional Designs",
    description:
      "Professional Mehandi services for bridal, Arabic, and traditional designs in Tamil Nadu. Home booking available for all events.",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    "Mehandi artists Tamil Nadu, professional Mehandi artists, bridal Mehandi Chennai, Arabic Mehandi Coimbatore, traditional Mehandi Tamil Nadu, home Mehandi booking, affordable Mehandi, Mehandi designs for weddings, bridal packages, baby shower Mehandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png" />

        <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon-180x180.png" />
        <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="/assets/mstile-144x144.png" />

        <link rel="manifest" href="/assets/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />


        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Mehandi artists Tamil Nadu, professional Mehandi artists, bridal Mehandi Chennai, Arabic Mehandi Coimbatore, traditional Mehandi Tamil Nadu, home Mehandi booking" />
        <meta name="author" content="Mehandi Creations" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Best Mehandi Artists in Tamil Nadu | Bridal, Arabic & Traditional Designs" />
        <meta
          property="og:description"
          content="Book professional Mehandi artists in Tamil Nadu for bridal, Arabic, and traditional designs. Affordable prices, home booking services available, 24x7."
        />
        <meta property="og:image" content="https://your-website.com/og-image.png" />
        <meta property="og:url" content="https://your-website.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mehandi Creations" />
        <meta property="og:locale" content="en_US" />
        {/* Global Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Bridal Mehandi Art"
              "url": "https://bridalmehandiart.com",
              "logo": "https://your-website.com/assets/logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7417245847",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.instagram.com/milan_mehandi_nagercoil/profilecard/?igsh=aDNwNGI0eGR0MzRo",
                "https://www.facebook.com/profile.php?id=61555385946575&mibextid=ZbWKwL",
                "https://youtube.com/@akashnayak000?si=-LyzrUu90YPpSjrE
              ],
              "description": "Mehandi Creations offers professional bridal mehandi art services across Tamil Nadu with over 12 years of experience."
            }
          `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <div style={{ marginTop: '150px' }}>
          {children}
        </div>

        <Footer />

        {/* Add the WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
