import React from 'react';
import styles from '../../styles/student.module.css';

function Hero1() {
  return (
    <>
      <section className={`bg-[#f4efe9] ${styles.fontGazpacho} `}>
        <section className="relative py-8 md:py-12">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <div className="grid rounded-2xl pt-14 lg:min-h-[540px] lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:py-0 lg:text-left bg-white text-center">
              <div className="px-5 sm:px-10 md:px-16 md:py-10 ">
                <h1 className="font-black antialiased text-[40px] tracking-wider leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] ">
                  Get hired by companies looking for diverse talent
                </h1>
                <p className="font-medium  mb-4 text-lg tracking-wider whitespace-pre-wrap py-4 md:mb-0 md:py-8 text-[#57545f]">
                  We are creating a future where students are rewarded in the
                  pursuit of their career based on their abilities and
                  experience.
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
        </section>
        <section className="relative py-8 md:py-12">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <h2 className="font-extrabold antialiased text-[40px] tracking-wider leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] text-center my-8">
              Changing the way students connect with companies
            </h2>
            <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:gap-x-8">
              <div>
                <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                  <div className="md:mb-4 flex items-center justify-start md:justify-center">
                    <img
                      className="w-[60px] h-[60px] "
                      src="https://www.empathy.com/images/home/holistic_care.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-[24px] leading-[36px] font-bold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4">
                    Startup Connect
                  </div>
                  <div className="text-lg antialiased tracking-wider font-medium text-[#1e1928cc] ">
                    Connect with local innovators and entrepreneurs to discover
                    the startups creatingadifference
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                  <div className="md:mb-4 flex items-center justify-start md:justify-center">
                    <img
                      className="w-[60px] h-[60px] "
                      src="https://www.empathy.com/images/home/less_stress.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-[24px] leading-[36px] font-bold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4">
                    Recruiter Connect
                  </div>
                  <div className="text-lg antialiased tracking-wider font-medium text-[#1e1928cc] ">
                    Connect with hiring managers and recruiters to find where
                    you belong
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                  <div className="md:mb-4 flex items-center justify-start md:justify-center">
                    <img
                      className="w-[60px] h-[60px] "
                      src="https://www.empathy.com/images/home/better_outcome.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-[24px] leading-[36px] font-bold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4">
                    TalentCon
                  </div>
                  <div className="text-lg antialiased tracking-wider font-medium text-[#1e1928cc] ">
                    First of its kind hiring event that introduces the best
                    talents to companies by taking hiring to the next level
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-8 md:py-12">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <h2 className="font-extrabold antialiased text-[40px] tracking-wider leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] text-center my-8 mb-16">
              Core values
            </h2>
            <div className="mx-auto grid gap-y-14 gap-x-32 sm:grid-cols-2 sm:gap-y-24 md:max-w-5xl">
              <div className="flex max-w-lg flex-col items-start md:flex-row">
                <div className="mr-8 w-10 md:w-auto">
                  <img src="https://www.empathy.com/images/tree1.svg" alt="" />
                </div>
                <div className="flex flex-1 flex-col self-start">
                  <h3 className="text-[24px] leading-[34px] font-bold tracking-wide text-[#1E1928] mb-2">
                    Leadership as Experience
                  </h3>
                  <p className="text-[16px] font-medium leading-[24px] md:leading-[30px] md:text-[18px] tracking-wide antialiased text-[#1e1928cc]">
                    Students&apos;volunteering activities have been of interest
                    to academics,but the impact of these activities on learning
                    and employability has been neglected. Through our platform
                    students can present that category of experience ina number
                    of ways and get rewarded with opportunities form companies.
                  </p>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-start md:flex-row">
                <div className="mr-8 w-10 md:w-auto">
                  <img src="https://www.empathy.com/images/tree2.svg" alt="" />
                </div>
                <div className="flex flex-1 flex-col self-start">
                  <h3 className="text-[24px] leading-[34px] font-bold tracking-wide text-[#1E1928] mb-2">
                    Companies apply to you
                  </h3>
                  <p className="text-[16px] leading-[24px] font-medium md:leading-[30px] md:text-[18px] tracking-wide antialiased text-[#1e1928cc]">
                    Gone are days when students apply to tens of companies and
                    sit for rounds of interviews giving assessments.On
                    Hirable,you don&apos;t need to apply to companies because
                    companies apply to you
                  </p>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-start md:flex-row">
                <div className="mr-8 w-10 md:w-auto">
                  <img src="https://www.empathy.com/images/tree3.svg" alt="" />
                </div>
                <div className="flex flex-1 flex-col self-start">
                  <h3 className="text-[24px] leading-[34px] font-bold tracking-wide text-[#1E1928] mb-2">
                    Experience based hiring
                  </h3>
                  <p className="text-[16px] leading-[24px] font-medium md:leading-[30px] md:text-[18px] tracking-wide antialiased text-[#1e1928cc]">
                    On Hirable,you don&apos;t need to give rounds of interviews
                    and assessments to get selected for an internship orafull
                    time role.Instead,we simulate your experience for the role
                    you are interested to apply and depending on your
                    performance in the real time environment you will be
                    directly sent to the final round
                  </p>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-start md:flex-row">
                <div className="mr-8 w-10 md:w-auto">
                  <img src="https://www.empathy.com/images/tree4.svg" alt="" />
                </div>
                <div className="flex flex-1 flex-col self-start">
                  <h3 className="text-[24px] leading-[34px] font-bold tracking-wide text-[#1E1928] mb-2">
                    Right to opportunity
                  </h3>
                  <p className="text-[16px] leading-[24px] font-medium md:leading-[30px] md:text-[18px] tracking-wide antialiased text-[#1e1928cc]">
                    Education should not only give you knowledge but also an
                    experience and an opportunity to work with companies while
                    you are in college itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-8 md:py-12">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <div className="no-scrollbar relative flex overflow-x-scroll -mx-4 w-screen lg:mx-0 lg:w-auto">
              <div className="mx-auto flex w-fit flex-row">
                <div className="flex flex-col gap-y-6 px-4 md:flex-row md:gap-x-8 lg:px-0">
                  <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                    <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                      <img
                        className="group-hover:scale-110 transition ease-in-out duration-200"
                        src="https://www.empathy.com/_next/image?url=%2Fimages%2Ffeatured%2Flibrary%402x.png&w=1920&q=75"
                        alt=""
                      />
                    </div>
                    <div className="p-10">
                      <div className="text-[#1e1928cc] text-[16px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                        For Students
                      </div>
                      <p className="mt-4 text-[#1e1928cc] font-medium">
                        We help candidates showcase their skills and experience
                        to employers as a way to get hired by connecting student
                        experiences to opportunities&nbsp;
                        <span className="whitespace-nowrap">-&gt;</span>
                      </p>
                    </div>
                  </a>
                  <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                    <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                      <img
                        className="group-hover:scale-110 transition ease-in-out duration-200"
                        src="https://www.empathy.com/_next/image?url=%2Fimages%2Ffeatured%2Fcod%402x.png&w=3840&q=75"
                        alt=""
                      />
                    </div>
                    <div className="p-10">
                      <div className="text-[#1e1928cc] text-[16px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                        For companies
                      </div>
                      <p className="mt-4 text-[#1e1928cc] font-medium">
                        We partner with employers to help companies discover the
                        untapped talent and redefine the way hiring takes
                        place&nbsp;
                        <span className="whitespace-nowrap">-&gt;</span>
                      </p>
                    </div>
                  </a>
                  <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                    <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                      <img
                        className="group-hover:scale-110 transition ease-in-out duration-200"
                        src="https://www.empathy.com/_next/image?url=%2Fimages%2Ffeatured%2Fawards%402x.png&w=3840&q=75"
                        alt=""
                      />
                    </div>
                    <div className="p-10">
                      <div className="text-[#1e1928cc] text-[16px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                        For colleges
                      </div>
                      <p className="mt-4 text-[#1e1928cc] font-medium">
                        We collaborate with colleges to transform the
                        educational opportunities and introduce student talents
                        to the industry&nbsp;
                        <span className="whitespace-nowrap">-&gt;</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Hero1;
