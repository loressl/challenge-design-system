import { ComponentProps } from 'react'
import { TooltipWrapper } from "./styles";

import 'react-tooltip/dist/react-tooltip.css';

export interface TooltipProps extends ComponentProps<typeof TooltipWrapper> {}

export function Tooltip({
   ...props
}: TooltipProps) {
    return(
        <TooltipWrapper {...props}/>
    )
}

Tooltip.displayName = 'Tooltip'