import { ReactNode, FC } from "react";
import { Rule } from "../types/rule";
import { FFContext } from "./flag-context";

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
    <FFContext.Provider value={{ rules, domain }}>
      {children}
    </FFContext.Provider>
  );
};
