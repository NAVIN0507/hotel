import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import { getAppDetails } from "@/lib/actions/users.actions";
import { Shield, Lock, Eye, Cookie, UserCheck, Mail, FileText } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="space-y-5">
      <div className="p-4">
        <Hero />
      </div>
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default page;

const PrivacyPolicy = async () => {
  const { data } = await getAppDetails();

  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Our Commitment",
      content: "Brundhavan Garden is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement. We may change this policy from time to time by updating this page. You should check this page periodically to ensure that you adhere to these changes."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content: "We may collect the following information:",
      list: [
        "Name and contact information including email address",
        "Demographic information such as postcode, preferences and interests",
        "Other information relevant to customer surveys and/or offers"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: "We require this information to understand your needs and provide you with a better service, particularly for the following reasons:",
      list: [
        "Internal record keeping and improving our products and services",
        "Sending promotional emails about new products, special offers or other information",
        "Contacting you for market research purposes via email, phone, fax or mail",
        "Customizing the website according to your interests"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security",
      content: "We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online."
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "How We Use Cookies",
      content: "A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site.",
      list: [
        "Cookies allow web applications to respond to you as an individual",
        "We use traffic log cookies to identify which pages are being used",
        "This helps us analyze data about webpage traffic and improve our website",
        "We only use this information for statistical analysis purposes",
        "You can choose to accept or decline cookies in your browser settings"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Controlling Your Personal Information",
      content: "You may choose to restrict the collection or use of your personal information in the following ways:",
      list: [
        "Look for the checkbox on forms to indicate you don't want information used for direct marketing",
        "Change your mind at any time by contacting us at brundhavangarden@gmail.com",
        "We will not sell, distribute or lease your personal information to third parties unless required by law",
        "Contact us immediately if you believe any information we hold is incorrect or incomplete"
      ]
    }
  ];

  return (
    <section className="mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-[#b79464] bg-opacity-10 rounded-full flex items-center justify-center text-white mx-auto">
              <Shield className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-[#b79464] text-4xl sm:text-5xl lg:text-6xl font-mono uppercase mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 sm:w-24 h-0.5 bg-[#b79464]"></div>
            <div className="w-2 h-2 bg-[#b79464] rounded-full"></div>
            <div className="w-16 sm:w-24 h-0.5 bg-[#b79464]"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#b79464] bg-opacity-10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#b79464] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
      

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This privacy policy is subject to change. Please check this page periodically for updates.</p>
        </div>
      </div>
    </section>
  );
};