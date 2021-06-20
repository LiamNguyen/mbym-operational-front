import React, { useEffect, useState } from 'react'
import queryString from 'query-string'

import { isValidGuid } from '../../helpers/TypeHelpers'
// import UnauthorizedPanel from '../../components/UnauthorizedPanel'
import DefaultForm from '../../components/DefaultForm'


const ChangeDefaultPasswordView = (props: any) => {
  const [{ username, password }, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const { token } = queryString.parse(props.location.search)

    setIsAuthorized(isValidGuid(token as string))
  }, [props.location.search])





  // return !isAuthorized ? (
  //   <UnauthorizedPanel />
  // ) : (
  return (
    <DefaultForm 
    // setCredentials={setCredentials}
    // username={username}
    // password={password}
    />
  )
}

export default ChangeDefaultPasswordView
