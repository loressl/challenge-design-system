import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@lsslima-ignite-ui/react'

export default {
    title: 'Data display/Toast',
    component: Toast,
    args: {
        position: 'top-center',
        title: 'Agendamento realizado',
        message: 'Quarta-feira, 23 de Outubro às 16h',
        show: true,
        duration: 99999,
        reverseOrder: false
    },
    argTypes: {
        position: {
            options: ['top-left' , 'top-right' , 'top-center' , 'bottom-left' , 'bottom-right' , 'bottom-center'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}