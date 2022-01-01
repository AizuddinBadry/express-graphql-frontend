import React from "react";
import { Formik } from "formik";
import { useLazyQuery } from "@apollo/client";

import { QUERY_USER_LOGIN } from "../graphql/users/queries";

export default function Login() {
  const [queryUserLogin, { loading, error, data }] =
    useLazyQuery(QUERY_USER_LOGIN);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col text-left space-y-3">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { email, password } = values;
          queryUserLogin({
            variables: { email, password },
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div className="my-3">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-sky-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
