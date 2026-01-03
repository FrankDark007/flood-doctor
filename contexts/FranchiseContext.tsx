import { createContext, useContext, ReactNode } from 'react';
import { useFranchise } from '@/hooks/useFranchise';
import { FranchiseData } from '@/data/franchises';

const FranchiseContext = createContext<FranchiseData | null>(null);

export function FranchiseProvider({ children }: { children: ReactNode }) {
  const franchise = useFranchise();

  return (
    <FranchiseContext.Provider value={franchise}>
      {children}
    </FranchiseContext.Provider>
  );
}

export function useFranchiseContext(): FranchiseData {
  const context = useContext(FranchiseContext);
  if (!context) {
    throw new Error('useFranchiseContext must be used within a FranchiseProvider');
  }
  return context;
}
