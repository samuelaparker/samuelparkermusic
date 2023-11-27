"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { questions } from "../../helpers/questions";
import { useState } from "react";

export default function Forms() {
  const [formStep, setFormStep] = useState(0);

  const completeFormStep = () => {
    setFormStep(formStep + 1);
  };

  const completeFormStepPrev = () => {
    setFormStep(formStep - 1);
  };

  const renderNextButton = () => {
    if (formStep === questions.length - 1) {
      return (
        <button
          className="bg-slate-400 hover:opacity-80 transition duration-300 ease-in-out  py-4 px-8 border-none rounded cursor-pointer mt-2 shadow-[rgba(255,_255,_255,_0.30)_0px_4px_9px]"
          disabled={!isValid}
          type="submit"
        >
          Submit
        </button>
      );
    } else {
      return (
        <button
          className="bg-slate-400 hover:opacity-80 transition duration-300 ease-in-out  py-4 px-8 border-none rounded cursor-pointer mt-2 shadow-[rgba(255,_255,_255,_0.30)_0px_4px_9px]"
          disabled={!isValid}
          onClick={completeFormStep}
          type="button"
        >
          Next
        </button>
      );
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }, // catch error messages
  } = useForm({ mode: "all" });

  function onSubmit(data: any) {
    console.log("handler fired", data, "event", event);

    completeFormStep();
    fetch("/api/sheet", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    reset(); // clears the input on submitting
  }

  // const onSubmit = (data: any) => console.log('TESTING onSUBMIT', JSON.stringify(data));

  console.log(JSON.stringify(watch())); // watch input value by passing the name of it

  return (
    <>
      <main className="flex flex-col justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          {formStep === 0 && (
            <section className="flex flex-col justify-start items-stretch">
              <label htmlFor={questions[0].question}>
                {questions[0].choices[0].value}*
              </label>

              <input
                className="text-black p-2"
                type={questions[0].inputType}
                id={questions[0].question}
                placeholder={questions[0].placeholder}
                {...register(questions[0].choices[0].value, { required: true })}
              />

              {renderNextButton()}
            </section>
          )}

          {formStep === 1 && (
            <section className="flex flex-col justify-start items-stretch">
              <label htmlFor={questions[1].choices[0].value}>
                {questions[1].choices[0].value}*
              </label>
              <input
                className=" text-black p-2"
                type={questions[1].inputType}
                id={questions[1].choices[0].value}
                placeholder={questions[1].placeholder}
                {...register(questions[1].choices[0].value, { required: true })}
              />

              {renderNextButton()}
            </section>
          )}

          {formStep === 2 && (
            <section className="flex flex-col justify-start items-stretch">
              <label htmlFor={questions[2].question}>
                {questions[2].choices[0].value}*
              </label>
              <input
                // type={questions[2].inputType}
                className="text-black p-2"
                id={questions[2].question}
                placeholder={questions[2].placeholder}
                {...register(questions[2].question, { required: true })}
              ></input>
              {renderNextButton()}
            </section>
          )}

          {formStep === 3 && (
            <section className="flex flex-col justify-start items-stretch">
              <h1>{questions[3].question}</h1>

              <input
                className="hidden text-black p-2"
                type={questions[3].inputType}
                id={questions[3].choices[0].value}
                placeholder={questions[3].placeholder}
                value={questions[3].choices[0].value}
                {...register(questions[3].question, { required: "" })}
              />
              <label
                className="mt-4 py-4 px-8 border-solid border-2 border-[#ccc] rounded transition-all ease-in-out duration-300"
                htmlFor={questions[3].choices[0].value}
              >
                {questions[3].choices[0].value}
              </label>

              <input
                className="hidden text-black p-2"
                type={questions[3].inputType}
                id={questions[3].choices[1].value}
                placeholder={questions[3].placeholder}
                value={questions[3].choices[1].value}
                {...register(questions[3].question, { required: "" })}
              />
              <label
                className="mt-4 py-4 px-8 border-solid border-2 border-[#ccc] rounded transition-all ease-in-out duration-300"
                htmlFor={questions[3].choices[1].value}
              >
                {questions[3].choices[1].value}
              </label>

              {renderNextButton()}
            </section>
          )}

          {formStep === 4 && (
            <section className="flex flex-col justify-start items-stretch">
              <h1>What is your project&apos;s budget?</h1>

              <input
                className="hidden text-black p-2"
                type={questions[4].inputType}
                id={questions[4].choices[0].value}
                placeholder={questions[4].placeholder}
                value={questions[4].choices[0].value}
                {...register("What is your project&apos;s budget?", {
                  required: "",
                })}
              />
              <label
                className="mt-4 py-4 px-8 border-solid border-2 border-[#ccc] rounded transition-all ease-in-out duration-300"
                htmlFor={questions[4].choices[0].value}
              >
                {questions[4].choices[0].value}
              </label>

              <input
                className="hidden text-black p-2"
                type={questions[4].inputType}
                id={questions[4].choices[1].value}
                placeholder={questions[4].placeholder}
                value={questions[4].choices[1].value}
                {...register("What is your project&apos;s budget?", {
                  required: "",
                })}
              />
              <label
                className="mt-4 py-4 px-8 border-solid border-2 border-[#ccc] rounded transition-all ease-in-out duration-300"
                htmlFor={questions[4].choices[1].value}
              >
                {questions[4].choices[1].value}
              </label>

              <input
                className="hidden text-black p-2"
                type={questions[4].inputType}
                id={questions[4].choices[2].value}
                placeholder={questions[4].placeholder}
                value={questions[4].choices[2].value}
                {...register("What is your project&apos;s budget?", {
                  required: "",
                })}
              />
              <label
                className="mt-4 py-4 px-8 border-solid border-2 border-[#ccc] rounded transition-all ease-in-out duration-300"
                htmlFor={questions[4].choices[2].value}
              >
                {questions[4].choices[2].value}
              </label>

              <input
                className="hidden text-black p-2"
                type={questions[4].inputType}
                id={questions[4].choices[3].value}
                placeholder={questions[4].placeholder}
                value={questions[4].choices[3].value}
                {...register("What is your project&apos;s budget?", {
                  required: "",
                })}
              />
              <label
                className="mt-4 py-4 px-8 border-solid border-2 border-[#ccc] rounded transition-all ease-in-out duration-300"
                htmlFor={questions[4].choices[3].value}
              >
                {questions[4].choices[3].value}
              </label>

              {renderNextButton()}
            </section>
          )}

          {formStep === 5 && (
            <section className="flex flex-col justify-start items-stretch">
              <h1>{questions[5].question}</h1>
              <label htmlFor={questions[5].question}>
                {questions[5].choices[0].value}*
              </label>
              <input
                className="text-black p-2"
                type={questions[5].inputType}
                id={questions[5].question}
                placeholder={questions[5].placeholder}
                {...register(questions[5].choices[0].value, { required: true })}
              />

              <label htmlFor={questions[5].question}>
                {questions[5].choices[1].value}*
              </label>
              <input
                className="text-black p-2"
                type={questions[5].inputType}
                placeholder={questions[5].placeholder}
                {...register(questions[5].choices[1].value, { required: true })}
              />

              <label htmlFor={questions[5].question}>
                {questions[5].choices[2].value}*
              </label>
              <input
                className="text-black p-2"
                type={questions[5].inputType}
                placeholder={questions[5].placeholder}
                {...register(questions[5].choices[2].value, {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {renderNextButton()}
            </section>
          )}
          {formStep === 6 && (
            <section className="flex flex-col justify-start items-stretch text-[#699CFF]">
              <h1>Thank you!</h1>
              <p>Your submission has been received.</p>
              <p>We will be in touch shortly.</p>
            </section>
          )}
        </form>
      </main>
    </>
  );
}
