import React from 'react'
import Button from '../../../../../reusable-UI/Button.js'
import SubmitMessage from './SubmitMessage.js'

export default function SubmitButton({ isSubmitted }) {
    return (
        <>
            <Button
                className="submit-button"
                type="submit"
                label={"Ajouter un nouveau produit au menu"}
                version="success"
            />
            {isSubmitted && <SubmitMessage />}
        </>
    )
}
