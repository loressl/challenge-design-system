import {ReactNode} from 'react'
import { TooltipProvider, TootipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from "./styles";

export interface TooltipProps {
    children: ReactNode
    text: string
}

export function Tooltip({
    children,
    text
}: TooltipProps) {
    return(
        <TooltipProvider>
            <TootipRoot>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>

                <TooltipPortal>
                    <TooltipContent sideOffset={5}>
                        {text}
                        <TooltipArrow />
                    </TooltipContent>
                </TooltipPortal>
            </TootipRoot>
        </TooltipProvider>
    )
}

Tooltip.displayName = 'Tooltip'