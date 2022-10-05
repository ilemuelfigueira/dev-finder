import { BrowserRouter } from "react-router-dom";

import Routes from "routes";

import { AuthProvider } from "contexts/auth";
import { ToastProvider } from "contexts/toast";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </>
  );
}

export default App;
