import { ReactNode, FC } from "react";
import { FeatureFlags } from "./flag";
import { Rule } from "../types/rule";

interface FlagsProviderProps {
  rules: Rule[];
  children: ReactNode;
  domain: string;
}

export const FlagsProvider: FC<FlagsProviderProps> = ({
  rules,
  children,
  domain,
}) => {
  return (
    <FeatureFlags.Provider value={{ rules, domain }}>
      {children}
    </FeatureFlags.Provider>
  );
};
