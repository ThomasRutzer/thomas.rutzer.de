import React from "react"
import {
  Tabs as ReactTabs,
  Tab as ReactTab,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel,
} from "react-tabs"

const Tabs = ({ children, defaultIndex }) => (
  <ReactTabs defaultIndex={defaultIndex} className="tabs">
    <ReactTabList className="tab-list py mb-5">
      {children.map((tab, key) => (
        <ReactTab
          key={key}
          className={`tab-list__item tab-list__item--${key}`}
          selectedClassName="tab-list__item--selected"
        >
          {tab.props.label}
          <svg
            className="tab-list__icon relative"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="16"
            width="16"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
          </svg>
        </ReactTab>
      ))}
    </ReactTabList>
    {children.map((tab, key) => (
      <ReactTabPanel
        key={key}
        className="tabs__tab-panel"
        selectedClassName="tabs__tab-panel--selected"
      >
        {tab.props.children}
      </ReactTabPanel>
    ))}
  </ReactTabs>
)

export default Tabs
