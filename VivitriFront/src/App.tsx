import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "./components/layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyApplications from "./pages/CompanyApplications";
import CompanyApplicationDetail from "./pages/CompanyApplicationDetail";
import ApplicationWizard from "./pages/ApplicationWizard";
import BankDashboard from "./pages/BankDashboard";
import BankWorkspace from "./pages/BankWorkspace";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route element={<AppLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/company/dashboard" element={<CompanyDashboard />} />
            <Route path="/company/apply" element={<ApplicationWizard />} />
            <Route path="/company/applications" element={<CompanyApplications />} />
            <Route path="/company/applications/:id" element={<CompanyApplicationDetail />} />
            <Route path="/bank/dashboard" element={<BankDashboard />} />
            <Route path="/bank/workspace/:id" element={<BankWorkspace />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
