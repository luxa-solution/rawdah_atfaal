import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
// import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import QuranProgram from "./pages/QuranProgram";
import HadithProgram from "./pages/HadithProgram";
import AqeedahProgram from "./pages/AqeedahProgram";
import FiqhProgram from "./pages/FiqhProgram";
import TafsirProgram from "./pages/TafsirProgram";
import TajwidProgram from "./pages/TajwidProgram";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/teachers" element={<Teachers />} /> */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/quran" element={<QuranProgram />} />
          <Route path="/hadith" element={<HadithProgram />} />
          <Route path="/aqeedah" element={<AqeedahProgram />} />
          <Route path="/fiqh" element={<FiqhProgram />} />
          <Route path="/tafsir" element={<TafsirProgram />} />
          <Route path="/tajwid" element={<TajwidProgram />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
