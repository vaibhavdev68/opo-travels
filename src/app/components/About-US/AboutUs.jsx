"use client";
import Head from "next/head";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-[Poppins]">
      <Head>
        <title>About Us - OPO Travels</title>
        <meta
          name="description"
          content="Learn about OPO Travels' mission and values"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 text-white">
        <Image
          src="/About-Image/main-image.jpg"
          alt="About Us Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1
              className="text-5xl font-[Playfair_Display] font-bold mb-4 
              bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent"
            >
              About Us
            </h1>
            <p className="text-xl text-gray-100 font-[Poppins]">
              Discover our story and passion for travel
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-[Playfair_Display] font-bold text-teal-700 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2010, OPO Travels began with a simple mission: to
                create unforgettable travel experiences connecting people with
                the world's most beautiful destinations.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a small team of passionate travelers has grown
                into a trusted company serving thousands of happy customers
                worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that travel transforms lives, broadens perspectives,
                and creates lasting memories.
              </p>
            </div>
            <div className="relative h-80">
              <Image
                src="/About-Image/main-image.jpg"
                alt="Our office workspace"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-700 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-[Playfair_Display] text-teal-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 font-[Poppins]">
                To provide exceptional travel experiences that inspire, educate,
                and create lifelong memories while promoting sustainable
                tourism.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-700 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-[Playfair_Display] text-teal-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 font-[Poppins]">
                To be the world's most trusted travel company, known for
                creating transformative journeys that positively impact travelers
                and local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[Playfair_Display] text-center text-teal-700 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "❤️",
                title: "Passion",
                text: "Driven by our love for travel and commitment to excellence.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                text: "Operating with honesty and transparency in all our dealings.",
              },
              {
                icon: "🌍",
                title: "Sustainability",
                text: "Promoting responsible travel that benefits local communities.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-teal-200 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-[Playfair_Display] text-teal-700 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-[Poppins]">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Workplace Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-[Playfair_Display] text-center text-teal-700 mb-12">
            Our Workplace
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/About-Image/office-team-2.jpg",
                title: "Modern Workspace",
                text: "Collaborative environment where we plan your perfect journeys.",
              },
              {
                img: "/About-Image/marketing-team.jpg",
                title: "Creative Hub",
                text: "Innovative travel ideas and customized itineraries are born here.",
              },
              {
                img: "/About-Image/comfert-area.jpg",
                title: "Comfort Zone",
                text: "Welcoming space for client consultations and travel planning sessions.",
              },
            ].map((work, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 relative">
                  <Image
                    src={work.img}
                    alt={work.title}
                    width={400}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-[Playfair_Display] text-teal-700 mb-2">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 font-[Poppins]">{work.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-[Playfair_Display] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 font-[Poppins]">
            Let us help you create the perfect travel experience
          </p>
          <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-[Poppins] font-bold hover:bg-gray-100 transition duration-300">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}