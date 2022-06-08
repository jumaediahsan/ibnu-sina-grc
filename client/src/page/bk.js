import * as React from 'react';
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { jsPDF } from "jspdf";
import $ from "jquery";

import AppBar from '../components/AppBar';

const printPdf = () => {
  let doc = new jsPDF();
  console.log('doc',doc)
  let elementHTML = $('#printPage').html();
  let specialElementHandlers = {
      '#elementH': function (element, renderer) {
          return true;
      }
  };
  doc.html(elementHTML, {
    elementHandlers: specialElementHandlers,
		callback: function(doc) {
			doc.save("output.pdf");
		},
		// x: 10,
		// y: 10
  });
  
}

const Rab = () => {
  return (
    <div>
      <AppBar />
      <h1>Anywhere in your app!</h1>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: 794,
            height: 1123,
            padding: '20px',
          },
        }}
        id="printPage"
      >
        <Paper elevation={3} >
        <h1>Anywhere in your app!</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            // onSubmit={(values, { setSubmitting }) => {
            //   setTimeout(() => {
            //     setSubmitting(false);
            //   }, 400);
            // }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button onClick={() => printPdf()} id="elementH">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </Paper>
      </Box>
    </div>
  )
}

export default Rab