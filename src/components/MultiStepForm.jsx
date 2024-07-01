import React, { useState } from "react";
import axios from "axios";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import TabNavigation from "./TabNavigation";
import { useNavigate } from "react-router-dom";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const goToStep = (step) => setStep(step);

  const submitForm = async (values) => {
    const { acceptTermsAndCondition, ...dataToSubmit } = values; // Exclude the checkbox value
    try {
      await axios.post("https://codebuddy.review/submit", dataToSubmit);
      navigate("/posts");
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <TabNavigation currentStep={step} setStep={goToStep} />
      <div className="mt-4 p-6 bg-white rounded-lg shadow-lg">
        {step === 1 && (
          <Form1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <Form2
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}
        {step === 3 && (
          <Form3
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            submitForm={submitForm}
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
