import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import { getAppDetails } from "@/lib/actions/users.actions";
import React from "react";

const page = () => {
  return (
    <div className="space-y-5">
        <div className="p-4">
      <Hero />
      </div>
      <RefundPolicy />
      <Footer />
    </div>
  );
};

export default page;

const RefundPolicy = async () => {
  const { data } = await getAppDetails();

  return (
    <section className="mx-auto mt-10">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[#45443F] text-5xl font-mono">PRIVACY POLICY </h1>
        <div className="p-20 max-sm:p-10 flex flex-col gap-10 -mt-5 leading-6 text-center">
        <p>This privacy policy sets out how Brundhavan Garden uses and protects any information that you give Brundhavan Garden when you visit their website and/or agree to purchase from them. Brundhavan Garden is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement. Brundhavan Garden may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes. We may collect the following information: Name Contact information including email address Demographic information such as postcode, preferences and interests, if required Other information relevant to customer surveys and/or offers What we do with the information we gather We require this information to understand your needs and provide you with a better service, and in particular for the following reasons: Internal record keeping. We may use the information to improve our products and services. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests. We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures. How we use cookies A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website. Controlling your personal information You may choose to restrict the collection or use of your personal information in the following ways: whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at brundhavangarden@gmail.com We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen. If you believe that any information we are holding on you is incorrect or incomplete, please write to 3/347A, PANNAIKADU MAIN ROAD, Thandigudi, Dindigul, Tamil Nadu, 624216 Tandigudi SO TAMIL NADU 624216 . or contact us at 9360275607 or brundhavangarden@gmail.com as soon as possible. We will promptly correct any information found to be incorrect.
</p>
        </div>
      </div>
    </section>
  );
};
