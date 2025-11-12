import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import { getAppDetails } from "@/lib/actions/users.actions";
import { RefreshCcw, DollarSign, Clock, Shield, CheckCircle, AlertCircle, FileText } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="">
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
    <section className="mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-[#b79464] bg-opacity-10 rounded-full flex items-center justify-center text-white mx-auto">
              <RefreshCcw className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-[#b79464] text-4xl sm:text-5xl lg:text-6xl font-mono uppercase mb-4">
            Refund Policy
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 sm:w-24 h-0.5 bg-[#b79464]"></div>
            <div className="w-2 h-2 bg-[#b79464] rounded-full"></div>
            <div className="w-16 sm:w-24 h-0.5 bg-[#b79464]"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Understanding our refund and return process to ensure your satisfaction.
          </p>
        </div>


        {/* Main Content */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          {/* Content Header */}
          <div className="border-b border-gray-200 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#b79464] bg-opacity-10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  Returns & Refunds
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our commitment to your satisfaction includes a fair and transparent refund policy.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div
              className="prose prose-gray max-w-none
                prose-headings:text-gray-800 prose-headings:font-semibold prose-headings:mb-4 prose-headings:mt-6
                prose-h1:text-2xl prose-h1:sm:text-3xl prose-h1:text-[#b79464] prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-3
                prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:text-gray-800
                prose-h3:text-lg prose-h3:sm:text-xl prose-h3:text-gray-700
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base prose-p:sm:text-lg prose-p:mb-4
                prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ul:text-gray-600
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2 prose-ol:text-gray-600
                prose-li:text-gray-600 prose-li:text-base prose-li:sm:text-lg
                prose-strong:text-gray-800 prose-strong:font-semibold
                prose-a:text-[#b79464] prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-[#b79464] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-code:text-[#b79464] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg
                prose-table:border-collapse prose-table:w-full
                prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left
                prose-td:border prose-td:border-gray-300 prose-td:p-3
                [&>*:first-child]:mt-0"
              dangerouslySetInnerHTML={{
                __html: data?.refund || `
                  <div class="text-center py-12">
                    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500 text-lg">No refund policy found.</p>
                    <p class="text-gray-400 text-sm mt-2">Please contact us for refund information.</p>
                  </div>
                `,
              }}
            />
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact for Refund Queries */}
          <div className="bg-gradient-to-br from-[#b79464] to-[#a67c52] rounded-xl p-6 sm:p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-black flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Need a Refund?
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Contact our customer service team to initiate a refund request.
                </p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:brundhavangarden@gmail.com" className="block hover:underline opacity-90">
                    brundhavangarden@gmail.com
                  </a>
                  <a href="tel:+919360275607" className="block hover:underline opacity-90">
                    +91 93602 75607
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Process */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#b79464] bg-opacity-10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Simple Process
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our refund process is designed to be straightforward and hassle-free.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Contact us with your order details</li>
                  <li>• We'll review your request</li>
                  <li>• Refund processed to original payment method</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Important Information
              </h3>
              <p className="text-sm text-blue-800">
                Please read our complete refund policy above carefully. Refund eligibility and processing times may vary based on the nature of your purchase and payment method used.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            This refund policy is subject to change. Please review for the most current terms.
          </p>
        </div>
      </div>
    </section>
  );
};