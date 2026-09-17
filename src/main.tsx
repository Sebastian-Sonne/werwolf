import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/app/theme-provider.tsx"

import "./lib/i18n"

import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router"




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
