import React, { ReactNode } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface UiIconButtonProps extends IconButtonProps {
  children: ReactNode;
}

const UiIconButton = React.forwardRef<HTMLButtonElement, UiIconButtonProps>(
  ({ children, ...props }, ref) => (
    <IconButton ref={ref} {...props}>
      {children}
    </IconButton>
  )
);

export default UiIconButton;
