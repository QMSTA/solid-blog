import toast from "solid-toast";


export const normalNotify = (message) => toast(message)
export const successNotify = (message) => toast.success(message, {position: 'top-center'})