import { BrowserRouter } from "react-router-dom";

import Routes from "routes";

import { AuthProvider } from "contexts/auth";
import { ToastProvider } from "contexts/toast";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
