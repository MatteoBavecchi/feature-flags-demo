import { Page } from "./page";

export interface RuleOption<T> {
  values: T[];
  isActivated: boolean;
}

export interface Rule {
  domain: string;
  pages?: RuleOption<Page>;
}
