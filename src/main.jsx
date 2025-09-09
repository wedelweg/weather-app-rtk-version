import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";       // ✅ нужно добавить
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.ts";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
