import React, { ReactElement, ReactNode, useMemo, useState } from "react";
import { TabItemProps } from "./TabItem";
import classnames from "classnames";

type Props = {
  children: ReactNode;
};

function TabPanel({ children }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const allChildrens = useMemo(
    () =>
      React.Children.map(
        children,
        (item) => (item as ReactElement<TabItemProps>)?.props?.children
      ),
    [children]
  );
  return (
    <div className="tab-panel">
      <div className="tab-panel-header">
        {React.Children.map(children, (item, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
            className={classnames("tab-panel-header-item", {
              "active-tab": index === activeIndex,
            })}
          >
            {(item as ReactElement<TabItemProps>)?.props?.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {allChildrens?.[activeIndex]}
      </div>
    </div>
  );
}

export default TabPanel;
