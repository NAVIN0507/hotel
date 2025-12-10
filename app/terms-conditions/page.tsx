import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import { getAppDetails } from "@/lib/actions/users.actions";
import { FileText, Shield, AlertCircle, CheckCircle } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="p-4">
        <Hero />
      </div>
      <TermsConditions />
      <Footer />
    </div>
  );
};

export default page;

const TermsConditions = async () => {
  const { data } = await getAppDetails();

  return (
    <section className="mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-[#b79464] bg-opacity-10 rounded-full flex items-center justify-center text-white mx-auto">
              <FileText className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-[#b79464] text-4xl sm:text-5xl lg:text-6xl font-mono uppercase mb-4">
            Terms & Conditions
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 sm:w-24 h-0.5 bg-[#b79464]"></div>
            <div className="w-2 h-2 bg-[#b79464] rounded-full"></div>
            <div className="w-16 sm:w-24 h-0.5 bg-[#b79464]"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Legal Protection</p>
              <p className="text-xs text-gray-600">Binding agreement</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Your Rights</p>
              <p className="text-xs text-gray-600">Know your benefits</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Important</p>
              <p className="text-xs text-gray-600">Read carefully</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          {/* Content Header */}
          <div className="border-b border-gray-200 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#b79464] bg-opacity-10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  Agreement Overview
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  By accessing and using Brundhavan Garden's services, you agree to be bound by these terms and conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
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
                [&>*:first-child]:mt-0"
              dangerouslySetInnerHTML={{
                __html: data?.terms || `
                  <div class="text-center py-12">
                    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500 text-lg">No terms and conditions found.</p>
                    <p class="text-gray-400 text-sm mt-2">Please contact us for more information.</p>
                  </div>
                `,
              }}
            />
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-8 bg-gradient-to-br from-[#b79464] to-[#a67c52] rounded-xl p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-black flex-shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Questions About These Terms?
              </h3>
              <p className="text-sm sm:text-base opacity-90 mb-3">
                If you have any questions or concerns about these terms and conditions, please don't hesitate to contact us.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="mailto:brundhavangarden@gmail.com" className="hover:underline opacity-90">
                  brundhavangarden@gmail.com
                </a>
                <span className="opacity-50">|</span>
                <a href="tel:+919360275607" className="hover:underline opacity-90">
                  +91 93602 75607
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            These terms and conditions are subject to change. Please review them periodically.
          </p>
        </div>
      </div>
    </section>
  );
};