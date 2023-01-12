import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider= styled(Tooltip.Provider, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

export const TootipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$medium',
    lineHeight: '$short',
    textAlign: 'center',
    backgroundColor: '$gray900',
    padding: '0.75rem 1rem',
    borderRadius: '$xs',
    gap: '$2',
    fontFamily: '$default'
})

export const TooltipArrow = styled(Tooltip.Arrow, {
    width: '$4',
    height: '$2'
})
