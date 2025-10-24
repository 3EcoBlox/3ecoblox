import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import DuoIndex from "./pages/DuoIndex";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import Parents from "./pages/Parents";
import Nonprofit from "./pages/Nonprofit";
import Companies from "./pages/Companies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DuoIndex />} />
            <Route path="/old" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/partners/parents" element={<Parents />} />
            <Route path="/partners/nonprofit" element={<Nonprofit />} />
            <Route path="/partners/companies" element={<Companies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
