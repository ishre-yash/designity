import React, { useState } from "react";
import ComboBox from "./ComboBox";
import DropDown from "./DropDown";
import RichEditorExample from "./RichTextEditor/RichEditorExample";
import RoundQuestion from "./RoundQuestion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "../containers/SideBar";

const Round = () => {
  const [roundType, setRoundType] = useState("Online - MCQ + Coding Round");
  const [questionNumbersArr, setQuestionNumbersArr] = useState([1]);
  const addQuestionNumber = () => {
    const tempArr = questionNumbersArr;
    tempArr.push(questionNumbersArr[questionNumbersArr.length - 1] + 1);
    setQuestionNumbersArr([...tempArr]);
  };

  const QuestionSection = ({ questionNumbersArr }) => {
    return (
      <div className="flex flex-col gap-3">
        {questionNumbersArr.map((index) => (
          <RoundQuestion
            problemNumber={index}
            questionNumbersArr={questionNumbersArr}
            setQuestionNumbersArr={setQuestionNumbersArr}
          />
        ))}
      </div>
    );
  };

  const roundFunction = (round) => {
    switch (round) {
      case "Online - MCQ + Coding Round":
        return onlineRound;
      case "Telephonic":
        return telephonicRound;
      case "Face to Face":
        return faceToFaceRound;
      case "Video Call":
        return videoCall;
      case "HR Round":
        return hrRound;
      case "Group Discussion":
        return groupDiscussion;
      case "Assignment":
        return assignment;
      case "Subjective Test - Pen and Paper":
        return subjectiveTest;
      case "Online Subjective Coding Test":
        return onlineSubjective;
      default:
        return <></>;
    }
  };

  const onlineRound = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Description Of Round
        </p>
        <RichEditorExample
          value={
            "Please specify the following : -\nTiming( was it late night)\nHow was the environment? \nAny other significant activity \nHow the interviewer was? (If it was there any interview)"
          }
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Platform"} value={"Hackerrank/ Amcat/ etc."} />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Location"}
          value={"Company Office, Test Institute"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Number of MCQs"} value={""} />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          MCQs Description
        </p>
        <RichEditorExample value={""} />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  const telephonicRound = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Description Of Round
        </p>
        <RichEditorExample
          value={
            "Please specify the following : -\nTiming( was it late night)\nHow was the environment? \nAny other significant activity \nHow the interviewer was? (If it was there any interview)"
          }
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Medium of Interview"}
          value={"Skype, Google Doc, Codeshare"}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  const faceToFaceRound = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Description Of Round
        </p>
        <RichEditorExample
          value={
            "Please specify the following : -\nTiming( was it late night)\nHow was the environment? \nAny other significant activity \nHow the interviewer was? (If it was there any interview)"
          }
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Location"}
          value={"Company Office, Test Institute"}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  const videoCall = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Description Of Round
        </p>
        <RichEditorExample
          value={
            "Please specify the following : -\nTiming( was it late night)\nHow was the environment? \nAny other significant activity \nHow the interviewer was? (If it was there any interview)"
          }
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Medium of Interview"}
          value={"Skype, Google Doc, Codeshare"}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  const hrRound = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Description Of Round
        </p>
        <RichEditorExample
          value={
            "Please specify the following : -\nTiming( was it late night)\nHow was the environment? \nAny other significant activity \nHow the interviewer was? (If it was there any interview)"
          }
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Location of Round"}
          value={"Company Office, Test Institute"}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  const groupDiscussion = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Description Of Round
        </p>
        <RichEditorExample
          value={
            "Please specify the following : -\nTiming( was it late night)\nHow was the environment? \nAny other significant activity \nHow the interviewer was? (If it was there any interview)"
          }
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Number of Participants"} value={""} />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          How did you approach the Group Discussion
        </p>
        <RichEditorExample value={""} />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  const assignment = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Number of Days given"} value={""} />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Skills required for the assignment"}
          value={"Data Structures, OOPS etc."}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  const subjectiveTest = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Description Of Round
        </p>
        <RichEditorExample
          value={
            "Please specify the following : -\nTiming( was it late night)\nHow was the environment? \nAny other significant activity \nHow the interviewer was? (If it was there any interview)"
          }
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Location of Round"}
          value={"Company Office, Test Institute"}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Number of MCQs"} value={""} />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          MCQs Description
        </p>
        <RichEditorExample value={""} />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  const onlineSubjective = (
    <>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Date of Round (approx.)"} value={"DD/MM/YYYY"} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Difficulty Of Round"
          name="round-difficulty"
          autoComplete="round-difficulty"
          optionsArray={["Easy", "Medium", "Hard"]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Duration of Round (in minutes)"}
          value={"Ex - 50 minutes, 90 minutes"}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <ComboBox
          labelTag="Topic of Round"
          name="round-topic"
          autoComplete="round-topic"
          optionsArray={[
            "Data Structures",
            "System Design",
            "OS/DBMS",
            "Problem Solving",
          ]}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <DropDown
          Heading={"Location"}
          value={"Company Office, Test Institute"}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <DropDown Heading={"Platform"} value={"Skype, Codeshare etc."} />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Description of the
        </p>
        <RichEditorExample value={""} />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Ex - I feel I was not able to give optimized approaches. That's why i was rejected."
          }
        />
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="pl-[16.5rem] bg-[#f8f8f8 ">
        <div className=" bg-[#f8f8f8]">
          <div className="bg-[#f8f8f8] flex 2xl:justify-center items-center">
            <div className="px-4 py-4">
              <div className="px-8 w-[644px] h-[100px] flex flex-col items-center justify-center py-4 bg-white">
                <h1 className="font-inter font-bold leading-5 rounded-md">
                  Round 1
                </h1>
              </div>
              <div className="px-8  py-4 mt-5 w-[644px]  bg-white">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <ComboBox
                      labelTag="Round Type"
                      name="round-type"
                      autoComplete="round-type"
                      setState={setRoundType}
                      optionsArray={[
                        "Online - MCQ + Coding Round",
                        "Telephonic",
                        "Face to Face",
                        "Video Call",
                        "HR Round",
                        "Group Discussion",
                        "Assignment",
                        "Subjective Test - Pen and Paper",
                        "Online Subjective Coding Test",
                      ]}
                    />
                  </div>
                  {roundFunction(roundType)}

                  <div className="col-span-6 mt-10">
                    <h3 className="text-[21px] font-inter leading-5">
                      Problems Data
                    </h3>

                    <p className="mt-1 mb-5 text-sm font-medium leading-5 font-inter text-[14px] ">
                      Please specify each problem in detail with proper
                      statement or references.
                      <br />
                      This is the major contribution for your interview
                      experience.
                    </p>

                    <QuestionSection questionNumbersArr={questionNumbersArr} />
                  </div>
                  <button
                    onClick={addQuestionNumber}
                    className="inline-flex font-inter p-2 text-[14px]  justify-center items-center w-[100px] h-[45px] font-bold border border-transparent shadow-sm mt-2 mb-5 rounded-full text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 "
                  >
                    Add Question
                  </button>
                </div>
                <div className=" px-4 py-3 bg-white mt-8 text-right sm:px-6 ">
                  <Link to={"/numberofrounds"}>
                    <button className="inline-flex mr-4 font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                      Back
                    </button>
                  </Link>

                  <button className="inline-flex font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Round;
