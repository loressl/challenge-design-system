import { ToastHeaderContainer, ToastWrapper, ToastTitle, ToastClose, ToastDescription } from "./styles";
import { Toaster, toast } from 'react-hot-toast'
import { ComponentProps } from "react";
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof Toaster> {
    show: boolean
    title: string
    message: string
    duration: number
}

export function Toast({
    title,
    message,
    show,
    duration,
    ...props
}: ToastProps) {
    show && toast.custom((t) => (
        <ToastWrapper>
            <ToastHeaderContainer>
                <ToastTitle>{title}</ToastTitle>
                <ToastClose onClick={() => toast.dismiss(t.id)}>
                    <X size={20} />
                </ToastClose>
            </ToastHeaderContainer>
            <ToastDescription>{message}</ToastDescription>
        </ToastWrapper>
    ),
        {
            duration
        }
    )

    return  <Toaster {...props} />
}

Toast.displayName = 'Toast'