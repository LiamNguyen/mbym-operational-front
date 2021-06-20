import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'
import { TextField } from '@material-ui/core'

import { onLogin } from '../../views/login.api'

import './styles.scss'
const DefaultForm = ({ setCredentials, username, password }: any) => {
  const validationSchema = yup.object({
    username: yup.string().required().max(10)
  })
  const login = async (event: React.FormEvent) => {
    event.preventDefault()

    await onLogin({
      username,
      password
    })
  }
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
        // validate={(values) => {
        //   const errors: Record<string, string> = {}
        //   if (values.firstname.includes('Bob')) {
        //     errors.firstname = 'oh no bob'
        //   }
        //   return errors
        // }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          //make async call
          console.log(data)
          setSubmitting(false)
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

            
              <Button disabled={isSubmitting} type="submit" color='primary'>
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
