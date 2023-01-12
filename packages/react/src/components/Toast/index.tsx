import { HeaderContainer, ToastClose, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewPort } from "./styles";
import { ReactNode } from "react";

export type DirectionToast = 'right' | 'left' | 'up' | 'down'

export interface ToastProps {
    title: string
    text: ReactNode
    show: boolean
    onClose: () => void
    direction?: DirectionToast
    duration?: number
}

export function Toast({
    title,
    text,
    show,
    onClose,
    direction= 'down',
    duration = 5000
}:ToastProps) {
    return(
        <ToastProvider swipeDirection={direction} duration={duration}>
            <ToastRoot open={show} onOpenChange={onClose}>
                <HeaderContainer>
                    <ToastTitle>{title}</ToastTitle>
                    <ToastClose>
                        X
                    </ToastClose>
                </HeaderContainer>
                <ToastDescription asChild>
                    {text}
                </ToastDescription>
            </ToastRoot>
            <ToastViewPort />
        </ToastProvider>
    )
}

Toast.displayName= 'Toast'