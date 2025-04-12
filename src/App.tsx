
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DonateFood from "./pages/DonateFood";
import RequestFood from "./pages/RequestFood";
import Dashboard from "./pages/Dashboard";
import Rewards from "./pages/Rewards";
import Community from "./pages/Community";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/Layout";

// Create a new instance of QueryClient inside the component
const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout><Index /></Layout>} />
              <Route path="/donate" element={<Layout><DonateFood /></Layout>} />
              <Route path="/request" element={<Layout><RequestFood /></Layout>} />
              <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
              <Route path="/rewards" element={<Layout><Rewards /></Layout>} />
              <Route path="/community" element={<Layout><Community /></Layout>} />
              <Route path="/about" element={<Layout><AboutUs /></Layout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
