'use client'

import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const Navbaritems = [
    { title: "About Us", path: "/about" },
    { title: "Participate", path: "/participate"},
    { title: "Resources", path: "/resources" },
    { title: "Get Involved", path: "/involvement" },
    { title: "Donate", path: "/donate" },
    { title: "Contact Us", path: "/contact" }
  ];
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = setActiveTab(tabIndex);

  return (
    <>


      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
        <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Promoting French Culture Across Canada</h1>
          <p className="text-lg mb-8">
            Join our mission to celebrate, preserve, and spread the richness of French heritage in Canada.
            Participate in our programs, donate, or volunteer to make a difference.
          </p>
          <Link href="/participate" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded">
            Get Involved
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are committed to promoting French language and culture throughout Canada. From language learning 
            to cultural events, we provide opportunities for everyone to engage with French heritage.
          </p>
          <Link href="/about">
            <div className="text-blue-600 hover:underline">
              Learn More About Us
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Help Us Make a Difference</h2>
            <p className="text-lg mb-8">
              Whether you're passionate about preserving French culture or simply want to get involved, your 
              contribution is vital to our cause. Discover how you can participate in our mission.
            </p>
            <Link href="/donate">
              <div className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded">
                Donate Now
              </div>
            </Link>
          </div>
          <div>
            <Image 
              src="/participate-image.jpg" // Use an appropriate image to represent your cause
              alt="Participate in French Culture"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">
            © 2024 French Culture Charity. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
