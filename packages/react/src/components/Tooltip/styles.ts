import { styled } from "../../styles";
import { Tooltip } from "react-tooltip";

export const TooltipWrapper = styled(Tooltip, {
  color: "$gray100",
  fontSize: "$md",
  fontWeight: "$medium",
  lineHeight: "$short",
  textAlign: "center",
  backgroundColor: "$gray900",
  padding: "0.75rem 1rem",
  borderRadius: "$xs",
  gap: "$2",
  fontFamily: "$default",
});