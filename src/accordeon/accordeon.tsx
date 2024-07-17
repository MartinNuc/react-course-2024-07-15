import React, { useState, useCallback } from "react";

type Props = {
  children: React.ReactNode[];
}

type ExpandedState = Record<number, boolean>;

export function Accordeon({ children }: Props) {
  const [expandedState, setExpandedState] = useState<ExpandedState>({});

  const toggleExpansionHandler = useCallback(
    (index: number) => {
      setExpandedState(expandedState => {
        if (expandedState[index]) {
          return {
            ...expandedState,
            [index]: false
          }
        } else {
          return {
            ...expandedState,
            [index]: true
          }
        }

        return {
          ...expandedState,
        };
      });
    },
    [],
  );

  return <>
    {React.Children.map(children, (child, index) => (
      <div>
        <button onClick={() => toggleExpansionHandler(index)}>
          {expandedState[index] ? '➖' : '➕'}
        </button>
        {child && expandedState[index] && child}
      </div>
    ))}
  </>;
}
