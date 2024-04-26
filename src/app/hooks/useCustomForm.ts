import { useState } from 'react'

interface FormState {
  [key: string]: any
}

export const useCustomForm = (initialForm: FormState = {}) => {
  const [formState, setFormState] = useState<FormState>(initialForm)

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    onInputChange,
    onResetForm
  }
}
