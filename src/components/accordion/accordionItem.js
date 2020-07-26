import React from "react"
import {
  AccordionItem as AccessibleAccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import AccordionImage from "./AccordionImage"

const AccordionItem = ({ children, title, subTitle, imgSrc }) => {
  return (
    <AccessibleAccordionItem
      activeClassName="accordion-item accordion-item--expanded"
      className="accordion-item">
      <AccordionImage
        src={imgSrc}
        className="accordion-item__image" />
      <div className="accordion-item__content-wrapper flex flex-col px-4 max-w-screen-sm">
        <AccordionItemHeading className="accordion-item__heading">
          <AccordionItemButton className=" accordion-item__title flex flex-col items-start justify-between">
            <h3 className="text-4xl md:5xl underline underline-under">{title}</h3>
            <h3 className="text-3xl">{subTitle}</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion-item__panel py-3 mt-4">
          {children}
        </AccordionItemPanel>
      </div>
    </AccessibleAccordionItem>
  )
}

export default AccordionItem
