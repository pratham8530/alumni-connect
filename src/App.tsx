import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppStore } from "./store/appStore";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import OnboardingStepper from "./components/onboarding/OnboardingStepper";
import StudentDashboard from "./pages/StudentDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";

const queryClient = new QueryClient();

const App = () => {
  const { userRole, isOnboardingComplete } = useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            {!userRole ? (
              <Landing />
            ) : !isOnboardingComplete ? (
              <OnboardingStepper />
            ) : (
              <Routes>
                <Route 
                  path="/" 
                  element={
                    userRole === 'student' ? <StudentDashboard /> : <AlumniDashboard />
                  } 
                />
                <Route 
                  path="*" 
                  element={
                    userRole === 'student' ? <StudentDashboard /> : <AlumniDashboard />
                  }
                />
              </Routes>
            )}
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
