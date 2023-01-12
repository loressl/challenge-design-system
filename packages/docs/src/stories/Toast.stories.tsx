import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@lsslima-ignite-ui/react'

export default {
    title: 'Data display/Toast',
    component: Toast,
    args: {
        show: true,
        title: 'Agendamento realizado',
        text: <span>Quarta-feira, 23 de Outubro às 16h</span>,
        direction: 'up',
        duration: 10000
    },
    argTypes: {
        direction: {
            options: ['right', 'up', 'down', 'left'],
            control: {
                type: 'inline-radio'
            }
        },
        onClose: {
            action: 'onClose',
            table: { disable: true}
        }
    }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}