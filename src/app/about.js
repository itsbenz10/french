import Head from 'next/head';
import Link from 'next/link'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - French Culture Charity</title>
        <meta name="description" content="Learn more about our mission to spread French culture in Canada and how we contribute to preserving and promoting the richness of French heritage." />
      </Head>
      <main className="min-h-screen bg-gray-100 py-12">
        <section className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About Us</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a non-profit organization dedicated to promoting and preserving French culture across Canada. From language learning to cultural events, we aim to foster a deep appreciation for French heritage while celebrating the diverse francophone communities in Canada.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our organization hosts a wide variety of programs including French language courses, cultural festivals, art exhibitions, and workshops. We collaborate with schools, community centers, and government institutions to provide accessible cultural resources and enriching experiences for everyone.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We envision a vibrant, bilingual Canada where the French language and culture are celebrated and thrive alongside the nation’s multicultural landscape. Our goal is to create a bridge between French and non-French speakers, fostering mutual understanding and cultural exchange.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Involved</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We invite everyone passionate about French culture to join us in our mission. Whether through donations, volunteering, or participating in our events, your support helps us continue our work of spreading French culture across Canada.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
