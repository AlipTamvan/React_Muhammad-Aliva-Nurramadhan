import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const LoginPage = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        }).then(() => {
          localStorage.setItem("isAuthenticated", "true");
          navigate("/product-management"); // Redirect to product-management
        });
      } else {
        setLoginError("Invalid email or password");
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-5">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none${
                      formik.errors.email && formik.touched.email
                        ? " border-red-500"
                        : ""
                    }`}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-2 text-sm text-red-600">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                      formik.errors.password && formik.touched.password
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="mt-2 text-sm text-red-600">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            {loginError && (
              <div className="mt-4 text-sm text-red-600">{loginError}</div>
            )}

            <div className="mt-6">
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>

          {/* Link to Register */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
