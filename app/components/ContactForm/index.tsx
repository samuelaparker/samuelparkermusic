"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { questions } from "../../helpers/questions";
import { useState } from "react";

export default function Forms() {
  const [formStep, setFormStep] = useState(0);

  const completeFormStep = () => {
    setFormStep(formStep + 1);
  };

  const renderNextButton = () => {
    if (formStep === questions.length - 1) {
      return (
        <button
          className="bg-slate-400 py-4 px-8 border-none rounded cursor-pointer mt-2 shadow-[rgba(255,_255,_255,_0.30)_0px_4px_9px]"
          disabled={!isValid}
          type="submit"
        >
          Submit
        </button>
      );
    } else {
      return (
        <button
          className="bg-slate-400 py-4 px-8 border-none rounded cursor-pointer mt-2 shadow-[rgba(255,_255,_255,_0.30)_0px_4px_9px]"
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
    formState: { errors, isValid }, // catch error messages
  } = useForm({ mode: "all" });

  //SYNCHRONOUS APPROACH
  // const onSubmit = async (data: any) => {
  //   try {
  //     completeFormStep();
  //     fetch("/api/google-sheet", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  //   reset(); // clears the input on submitting
  // };

  //ASYNCHRONOUS APPROACH
  const onSubmit = async (data: any) => {
    completeFormStep();
    fetch("/api/google-sheet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
    reset(); // clears the input on submitting
  };

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
                {...register("name", { required: true })}
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
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <span role="alert">{String(errors.email.message)}</span>
              )}
              {renderNextButton()}
            </section>
          )}

          {formStep === 2 && (
            <section className="flex flex-col justify-start items-stretch">
              <label htmlFor={questions[2].question}>
                {questions[2].choices[0].value}*
              </label>
              <input
                type={questions[2].inputType}
                className="text-black p-2"
                id={questions[2].question}
                placeholder={questions[2].placeholder}
                {...register("phone", { required: true })}
              ></input>
              {renderNextButton()}
            </section>
          )}

          {formStep === 3 && (
            <section className="flex flex-col justify-start items-stretch">
              <label htmlFor={questions[3].choices[0].value}>
                {questions[3].choices[0].value}*
              </label>
              <textarea
                className="text-black p-2 h-40"
                id={questions[3].choices[0].value}
                placeholder={questions[3].placeholder}
                {...register("message", { required: "" })}
              />
              {renderNextButton()}
            </section>
          )}

          {formStep === 4 && (
            <section className="flex flex-col justify-start items-stretch">
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
