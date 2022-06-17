import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import rpc from '../../utils/rpc';
import { loremIpsum } from 'lorem-ipsum';
 
const defaultCompanyDetails = loremIpsum();
const defaultRoleDetails = loremIpsum();

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  companyDetails: Yup.string()
    .min(10, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
  roleDetails: Yup.string()
    .min(10, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required')
});

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        isRecruiterInternal: false,
        email: "timothy.carlock@gmail.com",
        companyDetails: defaultCompanyDetails,
        roleDetails: defaultRoleDetails
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        rpc.callForForm('share-job-posting', values).then((res) => {
          actions.setSubmitting(false);
        })
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="container mx-auto lg:w-1/2 flex flex-col items-center justify-center px-2 w-full">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Connect With Talent</h1>
              <p>
                Provide details the details about the role requested by this developer to increase your chances 
                of hearing back from them. 
              </p>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isRecruiterInternal">
                Are you working on behalf of a third-party recruiter?
              </label>
              <Field id="isRecruiterInternal" name="isRecruiterInternal" className="block border border-grey-light w-full p-3 rounded mb-4" as="select">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Field>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">Company Stage</label>
              <Field id="companyStage" name="companyStage" className="block border border-grey-light w-full p-3 rounded mb-4" as="select">
                <option value="Pre-Seed">Pre-Seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="Series C">Series C</option>
                <option value="Series D">Series D</option>
                <option value="Series E">Series E</option>
                <option value="Series F+">Series F+</option>
                <option value="Public">Public</option>
              </Field>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">Email</label>
              <Field id="email" name="email" className="block border border-grey-light w-full p-3 rounded mb-4" />
              <ErrorMessage name="email" />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">Company Overview</label>
              <Field id="companyDetails" name="companyDetails" className="block border border-grey-light w-full p-3 rounded mb-4" as="textarea" />
              <ErrorMessage name="companyDetails" />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">Role Details</label>
              <Field id="roleDetails" name="roleDetails" className="block border border-grey-light w-full p-3 rounded mb-4" as="textarea" />
              <ErrorMessage name="roleDetails" />
              <div className="mt-8">
                <button type="submit" className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1">
                  Register
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );

  // return (
  //   <form onSubmit={formik.handleSubmit}>
  //     <div className="bg-grey-lighter min-h-screen flex flex-col">
  //       <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
  //         <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
  //           <h1 className="mb-8 text-3xl text-center">Registration 🚀</h1>
  //           <input
  //             type="text"
  //             className="block border border-grey-light w-full p-3 rounded mb-4"
  //             name="firstName"
  //             placeholder="First Name"
  //             {...formik.getFieldProps("firstName")}
  //           />
  //           {formik.touched.firstName && formik.errors.firstName ? (
  //             <div>{formik.errors.firstName}</div>
  //           ) : null}

  //           <input
  //             type="text"
  //             className="block border border-grey-light w-full p-3 rounded mb-4"
  //             name="lastName"
  //             placeholder="Last Name"
  //             {...formik.getFieldProps("lastName")}
  //           />
  //           {formik.touched.lastName && formik.errors.lastName ? (
  //             <div>{formik.errors.lastName}</div>
  //           ) : null}

  //           <input
  //             type="text"
  //             className="block border border-grey-light w-full p-3 rounded mb-4"
  //             name="email"
  //             placeholder="Email"
  //             {...formik.getFieldProps("email")}
  //           />
  //           {formik.touched.email && formik.errors.email ? (
  //             <div>{formik.errors.email}</div>
  //           ) : null}

  //           <input
  //             type="password"
  //             className="block border border-grey-light w-full p-3 rounded mb-4"
  //             name="password"
  //             placeholder="Password (5 characters and above)"
  //             {...formik.getFieldProps("password")}
  //           />
  //           {formik.touched.password && formik.errors.password ? (
  //             <div>{formik.errors.password}</div>
  //           ) : null}

  //           <input
  //             type="password"
  //             className="block border border-grey-light w-full p-3 rounded mb-4"
  //             name="Vpassword"
  //             placeholder="Confirm Password"
  //             {...formik.getFieldProps("Vpassword")}
  //           />
  //           {formik.touched.Vpassword && formik.errors.Vpassword ? (
  //             <div>{formik.errors.Vpassword}</div>
  //           ) : null}

  //           <button
  //             type="submit"
  //             className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
  //           >
  //             Create Account 🚀
  //           </button>

  //           <div className="text-center text-sm text-grey-dark mt-4">
  //             By signing up, you agree to the
  //             <a
  //               className="no-underline border-b border-grey-dark text-grey-dark"
  //               href="#"
  //             >
  //               Terms of Service
  //             </a>{" "}
  //             and{" "}
  //             <a
  //               className="no-underline border-b border-grey-dark text-grey-dark"
  //               href="#"
  //             >
  //               Privacy Policy
  //             </a>
  //           </div>
  //         </div>

  //         <div className="text-grey-dark mt-6">
  //           Already have an account?
  //           <a
  //             className="no-underline border-b border-blue text-blue"
  //             href="../login/"
  //           >
  //             Log in
  //           </a>
  //           .
  //         </div>
  //       </div>
  //     </div>
  //   </form>
  // )
}