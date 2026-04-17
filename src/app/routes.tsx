import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { ContactPage } from "./pages/ContactPage";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "features", Component: FeaturesPage },
      { path: "how-it-works", Component: HowItWorksPage },
      { path: "pricing", Component: PricingPage },
      { path: "contact", Component: ContactPage },
    ],
  },
], { basename: "/membership-app" });
