import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { routes } from "./routes";

// hooks
import useAuth from "./hooks/useAuth";
import useStorageSync from "./hooks/useStorageSync";
import useFavicon from "./hooks/useFavicon";
import { DarkModeProvider } from "./hooks/dark-mode";
import { SearchProvider } from "./contexts/SearchContext";

// components
import AtomLoader from "./components/loader/AtomLoader";

// styles
import "./assets/styles/global.css";
import "./assets/styles/typography.css";
import "./assets/styles/layout.css";

const App = () => {
  const { i18n } = useTranslation();
  const { isLoading, authChecked } = useAuth();

  // Synchronize HTML lang attribute with current application language
  // This allows CSS selectors like html[lang="bn"] to apply specific styles (e.g., fonts)
  useEffect(() => {
    if (i18n.language) {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  // Enable real-time storage sync across tabs
  useStorageSync();

  // Dynamically update favicon from API
  useFavicon();

  if (!authChecked || isLoading) {
    return (
      <div className="h-screen w-screen center">
        <AtomLoader />
      </div>
    );
  }
  return (
    <DarkModeProvider>
      <SearchProvider>
        <RouterProvider router={routes} />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "12px",
              background: "#ffffff",
              color: "#1a1a2e",
              fontSize: "13.5px",
              fontWeight: "500",
              padding: "14px 18px",
              border: "1px solid #e8e8f0",
              boxShadow:
                "0 4px 24px rgba(99, 76, 211, 0.08), 0 1px 4px rgba(0,0,0,0.06)",
            },
            success: {
              iconTheme: {
                primary: "#6c4de6",
                secondary: "#ffffff",
              },
              style: {
                borderLeft: "4px solid #6c4de6",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
              style: {
                borderLeft: "4px solid #ef4444",
              },
            },
            loading: {
              iconTheme: {
                primary: "#6c4de6",
                secondary: "#f3f0ff",
              },
            },
          }}
        />
      </SearchProvider>
    </DarkModeProvider>
  );
};

export default App;
