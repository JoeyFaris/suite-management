import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
    iconStle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#444",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antaliased",
            ":-webkit-autofill": {color: "#fce883"},
            "::placeholder": {color: "#87bbfd"},
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}


export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:3000/payment", {
                amount: 1000,
                id: id
            })
        if (response.data.success) {
            console.log("Successful payment")
            setSuccess(true)
        }

    } catch (error) {
        console.log("Error", error)
    }
    } else {
        console.log(error.message)
    }
}

  return (
    <>
        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
        <div>
            <h2>You just paid your rent!</h2>
        </div>
        }
        
    </>
  )
}
