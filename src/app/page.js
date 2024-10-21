'use client';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image.js'
import CountUp from 'react-countup';

export default function Home(){

    // const [activeTab, setActiveTab] = useState(1);

    // const handleTabClick = setActiveTab(tabIndex);

    return(
        <>
        <Head>
            <title>Exploring French 1 Step at a Time</title>
        </Head>
        {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('join us background.jpg')" }}>
        <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center text-center text-white">
        <div className="bg-gradient-to-t from-black via-transparent to-transparent h-full flex flex-col justify-center text-center text-white">
            <div className = "container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Promoting French Culture Across Canada</h1>
          <p className="text-lg mb-8">
            Join our mission to celebrate, preserve, and spread the richness of French heritage in Canada.
            Participate in our programs, donate, or volunteer to make a difference.
          </p>
          <Link href="/participate" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded">
            Get Involved
          </Link>
          </div>
        </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="pt-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are committed to promoting French language and culture throughout Canada. From language learning 
            to cultural events, join us as we promote bilingualism and provide opportunities for everyone to engage with French heritage
          </p>
          <Link href="/about">
            <div className="text-blue-600 hover:underline mb-8">
              Learn More About Us
            </div>
          </Link>
        </div>
        {/* Statistics Section */}
  <section className=" py-16 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-8">French Immersion and Culture in Ontario</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Stat 1 */}
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-5xl font-bold text-blue-900">
            <CountUp start={0} end={13.1} duration={2.5} suffix="%" />
          </h3>
          <p className="text-xl text-gray-600 mt-4">of students in Ontario are enrolled in French immersion programs.</p>
        </div>
        
        {/* Stat 2 */}
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-5xl font-bold text-blue-900">
            <CountUp start={0} end={5} duration={2.5} suffix="+" />
          </h3>
          <p className="text-xl text-gray-600 mt-4">Major French cultural events are hosted annually in GTA.</p>
        </div>

        {/* Stat 3
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-5xl font-bold text-blue-900">
            <CountUp start={0} end={1.6} duration={2.5} decimals={1} suffix=" Million" />
          </h3>
          <p className="text-xl text-gray-600 mt-4">Ontarians speak French, making it the second most spoken language in the province.</p>
        </div> */}

        {/* Stat 5 */}
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-5xl font-bold text-blue-900">
            <CountUp start={0} end={65} duration={2.5} suffix="%" />
          </h3>
          <p className="text-xl text-gray-600 mt-4">of Canadians believe learning French benefits children’s future career opportunities.</p>
        </div>
      </div>
    </div>
  </section>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-4">
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
              src="/teaching french culture.webp" // Use an appropriate image to represent your cause
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
            © 2024 Ensemble. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
    )
}