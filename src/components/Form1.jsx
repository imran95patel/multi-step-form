import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form1 = ({ formData, setFormData, nextStep }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      emailId: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z]{2})(?=.*[a-z]{2})(?=.*\d{2})(?=.*[!@#$%^&*()_+]{2}).{8,}$/,
          "Password must contain at least 2 uppercase letters, 2 lowercase letters, 2 digits, and 2 special characters."
        )
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
        <h2 className="text-2xl font-bold text-center text-teal-600">Login</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            onChange={formik.handleChange}
            value={formik.values.emailId}
            className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
          />
          {formik.errors.emailId ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.emailId}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
          />
          {formik.errors.password ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            disabled
            className="bg-gray-300 text-gray-500 py-2 px-4 rounded"
          >
            Back
          </button>
          <div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded mr-2"
            >
              Save
            </button>
            <button
              type="submit"
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

export default Form1;
