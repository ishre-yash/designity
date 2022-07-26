/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { FaCheck } from 'react-icons/fa';

import Link from 'next/dist/client/link';
import classNames from '../../utils/constants/classNames';
import Input from '../../modals/signup/Input';
// import InputError from '../../components/common/InputError';

const Graduation = () => {
  const [showLocationSelection, setShowLocationSelection] = useState(false);
  //   const {
  //     college,
  //     setCollege,
  //     graduationYear,
  //     setGraduationYear,
  //     degree,
  //     setDegree,
  //     major,
  //     setMajor,
  //   } = useGlobalHomeContext();
  const [college, setcollege] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [degree, setDegree] = useState('');
  const [major, setMajor] = useState('');

  const [validation, setValidation] = useState(false);
  const router = useRouter();

  const handleUpdateLocation = () => {
    setShowLocationSelection(!showLocationSelection);
    if (showLocationSelection) {
      // updateLocation
    }
  };

  const handleCollegeChange = (e) => {
    setCollege(e.target.value);
    // setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handleGraduationYearChange = (e) => {
    setGraduationYear(e.target.value);
    // setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
    // setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  const handleMajorChange = (e) => {
    setMajor(e.target.value);
    // setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    // setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };

  // ~~~~~~~~~~~~ ERRORS~~~~~~~~~~~~~~~~~~~~~~~~~~

  // ~~~~~~~~~~~~ ERRORS~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <>
      <div className="flex w-screen h-screen overflow-y-hidden bg-white">
        <div
          className="w-[40%] flex flex-col justify-center !bg-bottom !bg-contain !bg-no-repeat"
          style={{
            background: '#eff2f6',

            backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
          }}
        >
          <div className="px-10">
            <h6
              className="my-6 text-2xl font-semibold"
              style={{ lineHeight: '1.875rem' }}
            >
              Create Your Profile
            </h6>
            <p
              className="mb-4 text-sm"
              style={{ color: '#788699', marginTop: '.7rem' }}
            >
              Share your story here.
            </p>
          </div>
        </div>
        <div className="w-[60%] self-center px-4 py-6 overflow-y-auto md:px-20 h-screen 2xl:h-[800px] 2xl:my-auto">
          {/*  */}
          <div className="">
            <div className="w-full max-w-xl pt-8" style={{ color: '#141820' }}>
              <div
                className={classNames(
                  'mt-10 flex items-center justify-between'
                )}
              >
                <button type="button" onClick={() => router.back()}>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"
                    height={30}
                    width={30}
                    alt="back"
                    className="cursor-pointer"
                  />
                </button>

                <div className="flex mx-auto">
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                    )}
                  />
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                    )}
                  />
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                    )}
                  />
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                    )}
                  />
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                    )}
                  />
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                    )}
                  />
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                    )}
                  />
                  <div
                    className={classNames(
                      'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="w-fit my-auto">
            <div className={classNames('mt-8 w-full max-w-xl')}>
              <div className="relative flex flex-col gap-2 ">
                <Input
                  label="College"
                  name="college"
                  handleChange={handleCollegeChange}
                  value={college}
                  placeholder="Enter College Name"
                  type="text"
                />

                {true && (
                  <div className="rounded-full bg-[#DEEBFF]/70 text-green-500 p-1 absolute right-2 top-[55%] text-xs">
                    <FaCheck />
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <div>
                  <label
                    className="my-2.5 font-semibold leading-relaxed block text-sm"
                    style={{
                      color: '#201e27',
                    }}
                  >
                    Graduation Year
                  </label>
                  <select
                    placeholder="Graduation Year"
                    name="graduationYear"
                    style={{
                      lineHeight: 1.15,
                      width: '201px',
                    }}
                    value={graduationYear}
                    onChange={handleGraduationYearChange}
                    className="rounded-md mb-2.5 border text-sm p-2.5 outline-none focus:border-2 focus:border-focus-cyan"
                  >
                    <option value={0}>Graduation Year</option>
                    <option value={2015}>2015</option>
                    <option value={2016}>2016</option>
                    <option value={2017}>2017</option>
                    <option value={2018}>2018</option>
                    <option value={2019}>2019</option>
                    <option value={2020}>2020</option>
                    <option value={2021}>2021</option>
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                  </select>
                </div>
                <div
                  style={{
                    marginLeft: '12%',
                  }}
                  className="w-3/5"
                >
                  <label
                    className="my-2.5 w-full  font-semibold leading-relaxed block text-sm"
                    style={{ color: '#201e27' }}
                  >
                    Degree
                  </label>
                  <select
                    placeholder="Degree"
                    name="degree"
                    value={degree}
                    onChange={handleDegreeChange}
                    style={{ lineHeight: '1.15rem' }}
                    className="rounded-md mb-2.5 border w-full text-sm p-3 outline-none focus:border-2 focus:border-focus-cyan"
                  >
                    <option value="">Select Degree Name</option>
                    <option value="BTech">BTech</option>
                    <option value="BSc">BSc</option>
                    <option value="BBA">BBA</option>
                    <option value="BA">BA</option>
                    <option value="Bcom">Bcom</option>
                    <option value="BCA">BCA</option>
                    <option value="BFA">BFA</option>
                    <option value="BE">BE</option>
                  </select>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 ">
                <Input
                  label="Major"
                  name="major"
                  handleChange={handleMajorChange}
                  value={major}
                  placeholder="Enter Major Name"
                  type="text"
                />

                {true && (
                  <div className="rounded-full bg-[#DEEBFF]/70 text-green-500 p-1 absolute right-2 top-[55%] text-xs">
                    <FaCheck />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <Link href="/signup/personalinfo">
                  <a>
                    <button
                      type="button"
                      className="p-3 bg-black text-white rounded-md text-sm font-medium disabled:bg-gray-600 disabled:cursor-not-allowed mt-3 w-40"
                      // disabled={!validated}
                    >
                      Next
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
