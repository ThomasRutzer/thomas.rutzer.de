import React, { useCallback, useRef } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export default ({ children, defaultIndex }) => {
  return (
    <Tabs
      defaultIndex={defaultIndex}
      className="tabs py">
      <TabList className="tab-list text-sm mb-5">
        {children.map((tab, key) =>
          <Tab
            key={key}
            className={`tab-list__item tab-list__item--${key}`}
            selectedClassName="tab-list__item--selected">
            {tab.props.label}
            <svg
              className="tab-list__icon relative"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="16"
              width="16">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </svg>
          </Tab>
        )}

      </TabList>

      {children.map((tab, key) =>
        <TabPanel
          key={key}
          className="tabs__tab-panel"
          selectedClassName="tabs__tab-panel--selected">
          {tab.props.children}
        </TabPanel>
      )}
    </Tabs>
  )
}