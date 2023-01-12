import {ReactNode} from 'react'
import { TooltipProvider, TootipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from "./styles";

export type SideTooltip = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps {
    children: ReactNode
    text: string
    side?: SideTooltip
    sideOffset?: number
}

export function Tooltip({
    children,
    text,
    side = 'bottom',
    sideOffset = 5
}: TooltipProps) {
    return(
        <TooltipProvider>
            <TootipRoot>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>

                <TooltipPortal>
                    <TooltipContent sideOffset={sideOffset} side={side}>
                        {text}
                        <TooltipArrow />
                    </TooltipContent>
                </TooltipPortal>
            </TootipRoot>
        </TooltipProvider>
    )
}

Tooltip.displayName = 'Tooltip'