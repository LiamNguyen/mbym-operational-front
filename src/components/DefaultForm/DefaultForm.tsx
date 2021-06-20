import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'
import { TextField } from '@material-ui/core'

import { Credentials, onLogin } from '../../views/login.api'

import './styles.scss'
const DefaultForm = () => {
  const validationSchema = yup.object({
    username: yup.string().required().max(30),
    // newPassword: yup.string().required('Password is required'),
    // reNewPassword: yup.string()
    //    .oneOf([yup.ref('password'), null], 'Passwords must match')
  })

  return (
    <div className="DefaultForm">
      <h1>Reset default password</h1>
      <Formik
        initialValues={{
          username: '',
          defaultPassword: '',
          newPassword: '',
          reNewPassword: ''
        }}
  
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            alert(JSON.stringify(values.username, null, 2))
            const usernameprocess: string = values.username
            const passwordprocess: string = values.defaultPassword
            await onLogin({
              email: usernameprocess,
              password: passwordprocess,
              newPassword: values.newPassword
            })
            console.log(values)
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          isSubmitting,

          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit} className="DefaultForm__form">
            <Field
              placeholder="Username"
              name="username"
              type="input"
              as={TextField}
            />

            <Field
              placeholder="Default Password"
              name="defaultPassword"
              type="password"
              as={TextField}
            />
            <Field
              placeholder="New Password"
              name="newPassword"
              type="password"
              as={TextField}
            />
            <Field
              placeholder="Re-Enter New Password"
              name="reNewPassword"
              type="password"
              as={TextField}
            />

            <Button disabled={isSubmitting} type="submit" color="primary">
              Submit
            </Button>

            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DefaultForm
