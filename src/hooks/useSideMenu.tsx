import { useState } from "react";

export function useSideMenu() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleDrawerState() {
    setOpen(!open);
  }

  return {
    open,
    handleDrawerClose,
    handleDrawerOpen,
    handleDrawerState,
  };
}
