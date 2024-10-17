import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(3, "Last name must be at least 3 characters")
      .required("Last name is required"),
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Save the registered user data to localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("users", JSON.stringify(users));

      console.log("Registration successful:", values);

      // Redirect to login page or show success message
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have been successfully registered!",
      }).then(() => {
        navigate("/login"); // Redirect to login page after success
      });
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-5">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form onSubmit={formik.handleSubmit}>
            {/* Form fields */}
            <div className="space-y-6">
              {/* First Name & Last Name */}
              <div className="flex space-x-4">
                {/* First Name */}
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                        formik.errors.firstName && formik.touched.firstName
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="mt-2 text-sm text-red-600">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>

                {/* Last Name */}
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                        formik.errors.lastName && formik.touched.lastName
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="mt-2 text-sm text-red-600">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                      formik.errors.username && formik.touched.username
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                </div>
                {formik.touched.username && formik.errors.username ? (
                  <div className="mt-2 text-sm text-red-600">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>

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
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                      formik.errors.email && formik.touched.email
                        ? "border-red-500"
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
                    autoComplete="new-password"
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

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                </div>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="mt-2 text-sm text-red-600">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" className="w-full">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
