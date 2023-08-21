import { alertMessage } from "./stores"

export const showAlert = (msg: string, timeout: number = 2000) => {
    alertMessage.set(msg)
    setTimeout(() => alertMessage.set(null), timeout)
}