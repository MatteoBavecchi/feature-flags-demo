import { createContext } from "react";
import { Rule } from "../types/rule";

interface FlagsContextInterface {
  rules: Rule[];
  domain: string;
}

export const FFContext = createContext<FlagsContextInterface>({
  rules: [],
  domain: "",
});
