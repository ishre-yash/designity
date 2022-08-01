import React from 'react';

function Hero1() {
  return (
    <>
      <div className="relative py-8 md:py-12">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
          <div className="grid rounded-2xl pt-14 lg:min-h-[540px] lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:py-0 lg:text-left bg-white text-center">
            <div className="px-5 sm:px-10 md:px-16 md:py-10 ">
              <h1 className="font-semibold antialiased text-[40px] tracking-tight leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928]">
                Get hired by companies looking for diverse talent
              </h1>
              <p className="mb-4 text-lg tracking-tighter whitespace-pre-wrap py-4 md:mb-0 md:py-8 text-[#1E1928]">
                We are creatingafuture where students are rewarded in the
                pursuit of their career based on their abilities and experience.
              </p>
              <button
                type="button"
                className="text-sm inline-flex cursor-pointer items-center justify-center text-center h-10 px-8 rounded-full text-white bg-[#1E1928] hover:bg-[#1E1928]/75"
              >
                Book a Demo
              </button>
            </div>

            <div className="ml-5 h-fit flex-row justify-end flex">
              <img
                className="object-cover bg-bottom"
                src="/images/student-hero.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <section className="relative py-8 md:py-12">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
          <h2 className="font-semibold antialiased text-[40px] tracking-tight leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] text-center my-8">
            Changing the way students connect with companies
          </h2>
          <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:gap-x-8">
            <div>
              <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                <div className="md:mb-4 flex items-center justify-center">
                  <img
                    className="w-[60px] h-[60px] "
                    src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg"
                    alt=""
                  />
                </div>
                <div className="text-[24px] leading-[36px] font-semibold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4">
                  Startup Connect
                </div>
                <div className="text-lg antialiased tracking-tighter text-[#1e1928cc] ">
                  Connect with local innovators and entrepreneurs to discover
                  the startups creatingadifference
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                <div className="md:mb-4 flex items-center justify-center">
                  <img
                    className="w-[60px] h-[60px] "
                    src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg"
                    alt=""
                  />
                </div>
                <div className="text-[24px] leading-[36px] font-semibold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4">
                  Recruiter Connect
                </div>
                <div className="text-lg antialiased tracking-tighter text-[#1e1928cc] ">
                  Connect with hiring managers and recruiters to find where you
                  belong
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                <div className="md:mb-4 flex items-center justify-center">
                  <img
                    className="w-[60px] h-[60px] "
                    src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg"
                    alt=""
                  />
                </div>
                <div className="text-[24px] leading-[36px] font-semibold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4">
                  TalentCon
                </div>
                <div className="text-lg antialiased tracking-tighter text-[#1e1928cc] ">
                  First of its kind hiring event that introduces the best
                  talents to companies by taking hiring to the next level
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero1;
