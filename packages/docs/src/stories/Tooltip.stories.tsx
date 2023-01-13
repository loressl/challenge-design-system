import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@lsslima-ignite-ui/react'

export default {
    title: 'Data display/Tooltip',
    component: Tooltip,
    args: {
        content: '26 de Outubro - Disponível',
        anchorId: 'date',
    },
    decorators: [
        (Story) => {
            return (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh',
                    }}
                >
                    <div
                        id="date"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0.5rem',
                            width: '30px',
                            height: '30px',
                            background: 'green',
                            borderRadius: '6px',
                        }}
                    >
                        {Story()}
                        <span style={{
                            color: '#ffffff',
                            fontSize: '1rem',
                        }}>26</span>
                    </div>
                </div>
            )
        }
    ],
    argTypes: {
        place: {
            options: ['right', 'top', 'bottom', 'left'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}