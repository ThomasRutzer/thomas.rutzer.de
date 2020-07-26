import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export default ({ children, defaultIndex }) => {
  return (
    <Tabs defaultIndex={defaultIndex} className="tabs">
      <TabList className="tabs__tab-list">
        {children.map((tab, key) =>
          <Tab
            key={key}
            className="tabs__tab"
            selectedClassName="tabs__tab--selected">
            {tab.props.label}
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