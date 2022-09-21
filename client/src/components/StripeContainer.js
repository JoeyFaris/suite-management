import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51LgAOAB4XnDJEaY3onzYooKaR6KQuOQzxt1J6H2cv5hlfrrOGAzJJ55XCNq29NGWfV8TJ19WFGgtwxdqhkWIQYf700QiKrpfGj"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
        </Elements>

  )
}
