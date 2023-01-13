import { styled } from "../../styles";

export const ToastWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$2 $5",
  gap: "$1",
  borderRadius: "$sm",
  width: "360px",
  height: "82px",
  border: "$px solid $gray600",
  background: "$gray800",
  justifyContent: "space-evenly",
});

export const ToastHeaderContainer = styled("header", {
  display: "flex",
  flexDirection: "row",
  width: "auto",
  justifyContent: "space-between",
});

export const ToastTitle = styled("span", {
  color: "$white",
  fontSize: "$xl",
  fontWeight: "$bold",
  lineHeight: "$base",
  fontFamily: "$default",
});

export const ToastClose = styled("button", {
  outline: "none",
  border: "none",
  background: "transparent",
  color: "$gray200",
  fontSize: "$sm",
  cursor: "pointer",
});

export const ToastDescription = styled("div", {
  display: "flex",
  alignItems: "center",
  fontWeight: "$regular",
  color: "$gray200",
  fontFamily: "$default",
});
