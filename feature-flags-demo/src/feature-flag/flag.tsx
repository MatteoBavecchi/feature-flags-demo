import { useContext, ReactNode, FC } from "react";
import { Rule, RuleOption } from "../types/rule";
import { FFContext } from "./flag-context";
import { Page } from "../types/page";

interface FlagsProps {
  currentPage: Page;
  renderOn?: (matchingFlags: Rule[]) => ReactNode;
  renderOff?: (matchingFlags: Rule[]) => ReactNode;
  children?: ReactNode;
}

export const Flags: FC<FlagsProps> = ({
  currentPage,
  renderOn = () => null,
  renderOff = () => null,
  children,
}) => {
  const { domain, rules } = useContext(FFContext);

  const matchingPages = rules.reduce<RuleOption<Page> | undefined>(
    (acc, curr) => (curr.domain === domain ? curr.pages : acc),
    undefined
  );

  const resolveRender = (matchingFlags: Rule[]) => {
    return children ? children : renderOn(matchingFlags);
  };

  const shouldRenderPage = matchingPages?.values.includes(currentPage);

  return shouldRenderPage && matchingPages?.isActivated ? (
    <>{resolveRender(rules)}</>
  ) : (
    <>{renderOff(rules)}</>
  );
};
