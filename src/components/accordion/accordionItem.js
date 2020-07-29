import React from "react"
import {
  AccordionItem as AccessibleAccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import AccordionImage from "./AccordionImage"

const AccordionItem = ({ children, title, subTitle, imgSrc, imgAlt }) => {
  return (
    <AccessibleAccordionItem
      activeClassName="accordion-item accordion-item--expanded"
      className="accordion-item">
      <div className="accordion-item__content-wrapper flex flex-col max-w-screen-md">
        <AccordionItemHeading className="accordion-item__heading">
          <AccordionItemButton className=" accordion-item__title flex flex-row items-center">
            <AccordionImage
              alt={imgAlt}
              src={imgSrc}
              className="accordion-item__image" />
            <div className="ml-4">
              <h2 className="text-3xl md:5xl underline underline-under">{title}</h2>
              <h3 className="text-xl">{subTitle}</h3>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion-item__panel py-3">
          {children}
        </AccordionItemPanel>
      </div>
    </AccessibleAccordionItem>
  )
}

export default AccordionItem
