import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@lsslima-ignite-ui/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/loressl.png',
        alt: 'Lorena Lima',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}