import * as Toast from "@radix-ui/react-toast";
import { styled } from "../../styles";

export const ToastProvider = styled(Toast.Provider, {});

export const ToastRoot = styled(Toast.Root, {
  display: "flex",
  flexDirection: "column",
  padding: "$2 $5",
  gap: "$1",
  background: "$gray600",
  borderRadius: "$sm",
  width: "360px",
  height: "82px",
  listStyle: 'none',
  border: '$px solid $gray800'
});

export const HeaderContainer = styled("header", {
  display: "flex",
  flexDirection: "row",
  width: "auto",
  justifyContent: "space-between",
});

export const ToastTitle = styled(Toast.Title, {
  color: "$white",
  fontSize: "$xl",
  fontWeight: "$bold",
  lineHeight: "$base",
  fontFamily: "$default",
});

export const ToastClose = styled(Toast.Close, {
  outline: "none",
  border: "none",
  background: "transparent",
  color: "$gray200",
  fontSize: '$sm'
});

export const ToastDescription = styled(Toast.Description, {
    fontWeight: '$regular',
    color: '$gray200',
    fontFamily: '$default',
});

export const ToastViewPort = styled(Toast.Viewport, {});
