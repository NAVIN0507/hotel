import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import { getAppDetails } from "@/lib/actions/users.actions";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="space-y-5">
      <div className="p-4">
        <Hero />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;

const ContactUs = async () => {
  const { data } = await getAppDetails();

  const contactInfo = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Legal Entity",
      content: "Brundhavan Garden",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: "3/347A, Pannaikadu Main Road, Thandigudi, Dindigul, Tamil Nadu, 624216",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 93602 75607",
      link: "tel:+919360275607",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "brundhavangarden@gmail.com",
      link: "mailto:brundhavangarden@gmail.com",
    },
  ];

  return (
    <section className="mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-[#b79464] text-4xl sm:text-5xl lg:text-6xl font-mono uppercase mb-4">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 sm:w-24 h-0.5 bg-[#b79464]"></div>
            <div className="w-2 h-2 bg-[#b79464] rounded-full"></div>
            <div className="w-16 sm:w-24 h-0.5 bg-[#b79464]"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any inquiries or assistance.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#b79464] bg-opacity-10 rounded-full flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-gray-800 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-[#b79464] transition-colors duration-200 text-sm sm:text-base break-words"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm sm:text-base break-words">
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map or Additional Info Section */}
        <div className="bg-hero rounded-2xl p-8 sm:p-10 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
              Visit Us
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Experience the beauty of Brundhavan Garden in person. We're located in the heart of Dindigul.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Registered Address</h3>
                <p className="text-sm opacity-90 ">
                  3/347A, Pannaikadu Main Road<br />
                  Thandigudi, Dindigul<br />
                  Tamil Nadu - 624216
                </p>
              </div>
              <div className="bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Operational Address</h3>
                <p className="text-sm opacity-90">
                  3/347A, Pannaikadu Main Road<br />
                  Thandigudi, Dindigul<br />
                  Tamil Nadu - 624216
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours or CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Our team is ready to assist you with any questions or concerns.
          </p>
        </div>
      </div>
    </section>
  );
};