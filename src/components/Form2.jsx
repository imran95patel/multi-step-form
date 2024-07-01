import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form2 = ({ formData, setFormData, prevStep, nextStep }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, "Only alphabets allowed")
        .min(2, "Must be at least 2 characters")
        .max(50, "Must be at most 50 characters")
        .required("Required"),
      lastName: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets allowed"),
      address: Yup.string()
        .min(10, "Must be at least 10 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setFormData(values);
      nextStep();
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 p-8 bg-white shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-teal-600">
          Personal Information
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
          />
          {formik.errors.address && formik.touched.address ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.address}
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
              disabled={!formik.isValid}
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded mr-2"
            >
              Save
            </button>
            <button
              type="submit"
              disabled={!formik.isValid}
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded"
            >
              Save and Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form2;
