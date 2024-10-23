import React, { useState } from 'react'
import { SignIn } from './ui/SignIn'
import { Registration } from './ui/Registration'

function Auth() {
  const [registration, setRegistration] = useState(false)
  return (
    <>
      {!registration && <SignIn registration={registration} setRegistration={setRegistration} />}

      {registration && <Registration />}
    </>
  )
}

export default Auth
