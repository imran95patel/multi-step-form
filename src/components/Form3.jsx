import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form3 = ({ formData, setFormData, prevStep }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      countryCode: Yup.string()
        .oneOf(["+91", "+1"], "Select a valid country code")
        .required("Required"),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Required"),
      acceptTermsAndCondition: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setFormData(values);
      console.log("Form3 data saved:", values);
      alert(`Data Saved:\n${JSON.stringify(values, null, 2)}`);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 p-8 bg-white shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-teal-600">
          Contact Information
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country Code
          </label>
          <select
            name="countryCode"
            onChange={formik.handleChange}
            value={formik.values.countryCode}
            className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
          >
            <option value="+91">India (+91)</option>
            <option value="+1">America (+1)</option>
          </select>
          {formik.errors.countryCode && formik.touched.countryCode ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.countryCode}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="acceptTermsAndCondition"
              onChange={formik.handleChange}
              checked={formik.values.acceptTermsAndCondition}
              className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            />
            <span className="ml-2 block text-sm text-gray-900">
              I accept the terms and conditions
            </span>
          </label>
          {formik.errors.acceptTermsAndCondition &&
          formik.touched.acceptTermsAndCondition ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.acceptTermsAndCondition}
            </div>
          ) : null}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
          >
            Back
          </button>
          <div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
              disabled={!formik.isValid}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form3;
