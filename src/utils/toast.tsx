import { Id, toast } from 'react-toastify'

export const commonSuccessToast = (message: string): Id => {
  return toast.success(<>{message}</>)
}
