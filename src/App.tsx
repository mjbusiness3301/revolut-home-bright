import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import QuizLoading from "./pages/QuizLoading";
import QuizResult from "./pages/QuizResult";
import CreditApprovedIntro from "./pages/CreditApprovedIntro";
import CreditLimitLoading from "./pages/CreditLimitLoading";
import CreditApproved from "./pages/CreditApproved";
import RevolutAccount from "./pages/RevolutAccount";
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
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-loading" element={<QuizLoading />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/credit-approved-intro" element={<CreditApprovedIntro />} />
          <Route path="/credit-limit-loading" element={<CreditLimitLoading />} />
          <Route path="/credit-approved" element={<CreditApproved />} />
          <Route path="/revolut-account" element={<RevolutAccount />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
