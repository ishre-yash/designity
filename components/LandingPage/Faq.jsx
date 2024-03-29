import React, { useState } from "react";
import Butten from "../UiComponents/Butten";

function Faq() {
  const [faq, setFaq] = useState([
    {
      title: "Why wouldn't I just hire a full-time designer?",
      answer:
        "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
      open: false,
    },
    {
      title: "Is there a limit to how many requests I can have?",
      answer:
        "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
      open: false,
    },
    {
      title: "How fast will I receive my designs?",
      answer:
        "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
      open: false,
    },
    {
      title: "Who are the designers?",
      answer:
        "You might be surprised to hear this, but Designjoy is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers.",
      open: false,
    },
    {
      title: "What programs do you design in?",
      answer: "Most requests are designed using Figma.",
      open: false,
    },
  ]);

  const handleOpenClick = (index) => {
    const f = [...faq];
    f[index].open = !f[index].open;
    setFaq(f);
  };
  return (
    <>
      <section
        id="faq"
        className="overflow-hidden pt-16 px-4 md:px-16 pb-10 bg-auto bg-white"
        style={{
          backgroundImage: `url('/backgrounds/noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 md:mb-16">
              FAQs
            </h2>
            <section className="w-full">
              {faq.map((f, index) => {
                return (
                  <div className="border-b border-[#000] py-6" key={index}>
                    <div
                      className="flex w-full cursor-pointer items-center justify-between"
                      onClick={() => handleOpenClick(index)}
                    >
                      <div className="text-xl text-left w-[80%] md:w-ful tracking-tighter font-bold text-[#1d1d1f] select-none">
                        {f.title}
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center p-0.5 text-center font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          className={`${
                            f.open ? "rotate-180" : "rotate-0"
                          } transition  duration-150`}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g>
                            <path
                              d="M12 19.5C11.6729 19.5004 11.3495 19.431 11.0513 19.2965C10.7532 19.162 10.4871 18.9655 10.271 18.72L0.459956 7.568C0.149866 7.19846 -0.00333413 6.72225 0.0331156 6.24122C0.0695652 5.76018 0.292771 5.3125 0.655006 4.9939C1.01724 4.67529 1.48975 4.51105 1.9715 4.5363C2.45326 4.56155 2.90601 4.77428 3.23296 5.129L11.812 14.881C11.8354 14.9078 11.8643 14.9292 11.8968 14.9439C11.9292 14.9586 11.9644 14.9662 12 14.9662C12.0356 14.9662 12.0707 14.9586 12.1032 14.9439C12.1356 14.9292 12.1645 14.9078 12.188 14.881L20.767 5.129C20.9252 4.94043 21.1195 4.78539 21.3385 4.67299C21.5575 4.5606 21.7968 4.49312 22.0423 4.47452C22.2877 4.45592 22.5345 4.48657 22.7679 4.56469C23.0013 4.6428 23.2168 4.76678 23.4017 4.92936C23.5865 5.09194 23.737 5.28983 23.8443 5.5114C23.9515 5.73297 24.0134 5.97374 24.0263 6.21957C24.0392 6.4654 24.0028 6.71133 23.9193 6.94289C23.8358 7.17446 23.7068 7.38699 23.54 7.568L13.732 18.716C13.5154 18.9621 13.249 19.1593 12.9504 19.2944C12.6517 19.4296 12.3278 19.4997 12 19.5V19.5Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    {f.open && (
                      <div className=" mt-3 w-full text-left text-base font-normal -tracking-wider text-[#1d1d1f] select-none">
                        {f.answer}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="py-10 ">
                <Butten title="View all FAQs" />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
