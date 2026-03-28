"use client";

import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-monolithic";
import { useMemo, ReactNode } from "react";

interface StyletronProviderWrapperProps {
  children: ReactNode;
}

export default function StyletronProviderWrapper({ children }: StyletronProviderWrapperProps) {
  const engine = useMemo(() => new Styletron(), []);
  
  return (
    <StyletronProvider value={engine}>
      {children}
    </StyletronProvider>
  );
}
