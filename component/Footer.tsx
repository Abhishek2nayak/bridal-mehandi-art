"use client"
import { Mail, Search } from "lucide-react";
import Link from 'next/link';




const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBrown text-lightYellow">
      <div className="container mx-auto px-6 py-12">
        {/* Top CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-darkYellow pb-8">
          {/* Find Us */}
          <div className="flex items-center space-x-4">
            <div className="text-yellow-400 text-2xl">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">Find Us</h4>
              <p>Old No 1230/1231, New No D3/3, Reliance Mall,
                <br />
                10 North Car St, Post Office Rd, near Reliance Mall,
                <br /> near Nagarajar Temple, Krishnam Coil, Nagercoil, Tamil Nadu 629001</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-center space-x-4">
            <div className="text-yellow-400 text-2xl">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">Call Us</h4>
              <p>7417245847</p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="flex items-center space-x-4">
            <div className="text-yellow-400 text-2xl">
              <i className="far fa-envelope-open"></i>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">Mail Us</h4>
              <p>milanmehanditattos@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <img
              src="/assets/logo.jpg"
              alt="Bridal Mehandi Art"
              className="w-32 mb-4"
            />
            <p className="text-gray-500">
              We are the best mehandi artist in Tamil Nadu.
              We have professional artist that make you day special.
            </p>

            <div className="flex gap-3">
              <a href="https://www.instagram.com/milan_mehandi_nagercoil/profilecard/?igsh=aDNwNGI0eGR0MzRo" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61555385946575&mibextid=ZbWKwL" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>

              <a href="https://youtube.com/@akashnayak000?si=-LyzrUu90YPpSjrE" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>

              <a href="https://wa.me/7417245847">
                <svg viewBox="0 0 32 32" width={"24"} height={"24"} fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg>

              </a>

            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/mehandi-services" className="hover:text-yellow-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/mehandi-design-gallery" className="hover:text-yellow-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/client-feedback" className="hover:text-yellow-400">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-lightYellow mb-4">
              Don’t miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-lightBrown   py-4">
        <div className="text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.{" "}
            <Link
              href="/"
              className="text-yellow-100 hover:underline"
            >
              Bridal Mehandi Art
            </Link>
          </p>
        </div>
      </div>
    </footer >
  );
};


export default Footer;