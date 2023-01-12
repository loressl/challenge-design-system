import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@lsslima-ignite-ui/react'

export default {
    title: 'Data display/Tooltip',
    component: Tooltip,
    args: {
        children:
            (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0.5rem',
                    width: '30px',
                    height: '30px',
                    background: 'green',
                    borderRadius: '6px',
                }}>
                    <span style={{
                        color: '#ffffff',
                        fontSize: '1rem',
                    }}>20</span>
                </div>
            ),
        text: '26 de Outubro - Disponível',
        side: 'right',
        sideOffset: 5
    },
    argTypes: {
        side: {
            options: ['right', 'top', 'bottom', 'left'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}