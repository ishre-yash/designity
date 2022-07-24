import React, { useState } from "react";
import ComboBox from "./ComboBox";
import RichEditorExample from "./RichTextEditor/RichEditorExample";

const RoundQuestion = ({
  problemNumber,
  questionNumbersArr,
  setQuestionNumbersArr,
}) => {
  const [problemType, setProblemType] = useState("Coding Problem");
  const removeQuestionNumber = () => {
    const tempArr = questionNumbersArr;
    if (tempArr.length > 1) {
      tempArr.pop(questionNumbersArr[questionNumbersArr.length - 1] + 1);
      setQuestionNumbersArr([...tempArr]);
    }
  };

  const codingQuestionSet = (
    <div className="col-span-6 grid grid-cols-6 gap-6">
      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Why were you passed/rejected for this round?
        </p>
        <RichEditorExample
          value={
            "Provide proper problem statement or reference link from geeks for geeks or other sources. Ex- Given an array A[] consisting of N integers, you have to find total number of subsequences of this array."
          }
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Can you explain stepwise how you solved this problem?
        </p>
        <RichEditorExample
          value={
            "Ex - Step 1 : I first applied bubble sort. It was not good enough.\nStep 2 : Interviewer asked me to optimise the solution.\nStep 3 : Then i gave solution with merge sort and interviewer was happy."
          }
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Important Corner Cases for this problem (Please specify - this will be
          very helpful for us)
        </p>
        <RichEditorExample
          value={"Please specify important corner cases that you remember"}
        />
      </div>
    </div>
  );

  const otherQuestionSet = (
    <div className="col-span-6 grid grid-cols-6 gap-6">
      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Problem Description/s
        </p>
        <RichEditorExample
          value={"What are semaphores?\nWhat is virtual memory?"}
        />
      </div>

      <div className="col-span-6">
        <p className="mt-2 font-inter mb-2 font-semibold leading-5 text-[14px]">
          Tips/Answers for Solving these Problem/Problems
        </p>
        <RichEditorExample
          value={
            "Tip 1 : Read Galvin for OS thoroughly.\nTip 2: Do practice for SQL queries."
          }
        />
      </div>
    </div>
  );
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="mt-5 md:mt-0 md:col-span-3">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-gray-100 sm:p-6">
            <h3 className="font-bold text-base mb-4">
              Problem {problemNumber}
            </h3>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="col-span-6">
                <ComboBox
                  setState={setProblemType}
                  labelTag="Problem Type"
                  name={`problem-${problemNumber}-type`}
                  autoComplete={`problem-${problemNumber}-type`}
                  optionsArray={[
                    "Coding Problem",
                    "Puzzle",
                    "System Design",
                    "Operating System",
                    "DBMS",
                  ]}
                />
              </div>
              {problemType === "Coding Problem"
                ? codingQuestionSet
                : otherQuestionSet}
            </div>
          </div>
          <div className="flex items-center justify-end mr-5">
            <button
              onClick={removeQuestionNumber}
              className={` ${
                questionNumbersArr.length === 1
                  ? "opacity-40 cursor-not-allowed hover:bg-indigo-400"
                  : "opacity-100"
              } inline-flex font-inter text-[14px]  justify-center items-center w-[100px] h-[45px] font-bold border border-transparent shadow-sm mt-5 mb-5 rounded-full text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 `}
            >
              Remove Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundQuestion;
