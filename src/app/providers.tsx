'use client';

import { ReactNode } from 'react';
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PermissionsProvider } from "@/contexts/PermissionsContext";
import { ErrorBoundary } from "@/components/custom/ErrorBoundary";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <PermissionsProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </PermissionsProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
