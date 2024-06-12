import { useContext, ReactNode, FC } from "react";
import { Rule } from "../types/rule";
import { FFContext } from "./flag-context";

interface FlagsProps {
  authorizedFlags: string[];
  exactFlags?: boolean;
  renderOn?: (matchingFlags: Rule[]) => ReactNode;
  renderOff?: (matchingFlags: Rule[]) => ReactNode;
  children?: ReactNode;
}

export const Flags: FC<FlagsProps> = ({
  authorizedFlags,
  exactFlags = false,
  renderOn = () => null,
  renderOff = () => null,
  children,
}) => {
  const flags = useContext(FFContext);

  const matchingFlags = flags.filter(
    (flag) => flag.isActive && authorizedFlags.includes(flag.name)
  );

  const resolveRender = (matchingFlags: Rule[]) => {
    return children ? children : renderOn(matchingFlags);
  };

  if (exactFlags) {
    return matchingFlags.length === authorizedFlags.length ? (
      <>{resolveRender(matchingFlags)}</>
    ) : (
      <>{renderOff(matchingFlags)}</>
    );
  } else {
    return matchingFlags.length ? (
      <>{resolveRender(matchingFlags)}</>
    ) : (
      <>{renderOff(matchingFlags)}</>
    );
  }
};
