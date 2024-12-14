import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="mt-10 bg-white overflow-hidden mb-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap xl:items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="md:max-w-xl">
              <h2 className="mb-3 text-xl  font-bold font-heading tracking-px-n leading-tight">
                Get Latest Updates
              </h2>
              <p className="mb-9 font-medium text-gray-600 leading-relaxed">
              Subscribe Our Newsletter To Stay Updated With Our Latest Offers !!
              </p>
              <div className="mb-3 p-2 xl:pl-6 inline-block md:max-w-xl w-full border rounded-lg">
                <div className="flex flex-wrap items-center">
                  <div className="w-full xl:flex-1">
                    <input
                      className="p-3 xl:p-0 xl:pr-6 w-full font-medium text-gray-500 placeholder-gray-500 outline-none"
                      id="newsletterInput"
                      type="text"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="w-full xl:w-auto">
                    <button
                      className="py-2 px-4 w-full button-primary2 rounded-lg"
                      type="button"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
              <p className=" text-gray-500  text-[14px]">
                Get the latest content in your inbox every week. We don’t spam.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-wrap -m-4">
              <div className="w-full xl:w-1/2 p-4">
                <div className="p-5 m-2 bg-gray-50 rounded-2xl">
                  <h2 className="mb-2 text-[32px] font-bold font-heading tracking-px-n leading-tight">
                    7k+
                  </h2>
                  <p className="mb-2 text-gray-800 font-semibold">
                    Happy and Satisfied Customers
                  </p>
                  <p className="text-gray-600 text-[14px] ">
                    Get the latest content on your inbox of every week. We don’t need to spam.
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-1/2 p-4">
                <div className="p-5 m-2 bg-gray-50 rounded-2xl">
                  <h2 className="mb-2 text-[32px] font-bold font-heading tracking-px-n leading-tight">
                    35+
                  </h2>
                  <p className="mb-2 text-gray-800 font-semibold">
                    Cities Covered Domestic and  International
                  </p>
                  <p className="text-gray-600 text-[14px]">
                    Get the latest content on your inbox of every week. We don’t need to spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
