import React, { createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

interface IToast {
  toast: any;
}

const ToastContext = createContext<IToast>({} as any);

export const ToastProvider = ({ children }: any) => (
  <ToastContext.Provider value={{ toast }}>
    {children}
    <div className="toast-wrapper">
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: 70,
        }}
        toastOptions={{
          style: {
            minWidth: "10em",
            height: "2.5em",
            display: "flex",
            fontSize: "1.2em",
            fontWeight: "bolder",
            background: "#FFb700",
            color: "white",
            zIndex: 1,
          },
          loading: {
            style: {
              minWidth: "10em",
              height: "2.5em",
              display: "flex",
              fontWeight: "bold",
              lineHeight: "3px",
              background: "#f4f4f4",
              color: "#000",
              zIndex: 1,
            },
          },
          error: {
            style: {
              display: "flex",
              justifyContent: "center",
              background: "red",
              color: "#fff",
            },
          },
          success: {
            style: {
              display: "flex",
              justifyContent: "center",
              background: "rgb(76,175,80)",
              color: "#fff",
            },
            duration: 2000,
          },
        }}
      />
    </div>
  </ToastContext.Provider>
);

export function useToast() {
  const context = useContext(ToastContext);

  return context;
}
