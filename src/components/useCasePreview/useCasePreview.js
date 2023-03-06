import React from "react"
import classNames from "classnames"

import * as ContentWrapper from "../contentWrapper"
import * as ExternalLink from "../externalLink"
import * as FeatureList from "../featureList"

const APPEARANCES = { SECONDARY: "secondary", GREY: "grey" }

const ComponentContext = React.createContext()

const Root = ({ children, appearance }) => {
  return (
    <ComponentContext.Provider value={{ appearance }}>
      <section
        className={appearance === APPEARANCES.SECONDARY ? "bg-secondary-default" : "bg-grey-2"}
      >
        {children}
      </section>
    </ComponentContext.Provider>
  )
}

const HeroContent = ({ children }) => {
  return (
    <ContentWrapper.Root
      className="pt-6 lg:pb-6 lg:pt-7"
      horizontalSpacing
      size={ContentWrapper.SIZES.FULL}
      verticalSpacing
    >
      {children}
    </ContentWrapper.Root>
  )
}

const TitleGroup = ({ category, title, subTitle }) => {
  return (
    <div className="flex flex-col items-start col-start-1 col-span-full lg:items-center lg:justify-center xl:absolute xl:top-0 xl:w-full xl:h-full z-10 mb-6 pointer-events-none">
      <h3 className="text-4xl lg:text-6xl lg:text-stroke-white lg:text-stroke font-mono leading-snug">
        {title}
      </h3>
      <div className="use-case-preview-title-group__subline relative flex lg:inline-flex justify-between items-center gap-2 w-full lg:w-auto">
        <h4 className="text-xl lg:text-2xl tracking-widest uppercase font-mono whitespace-nowrap">
          {subTitle}
        </h4>
        <h5 className="lg:order-3 text-xs text-primary">{category}</h5>
      </div>
    </div>
  )
}

const Content = ({ children }) => {
  return (
    <ContentWrapper.Root className="lg:gap-5 leading-7pt-3 py-6 lg:pt-0 lg:pb-7">
      {children}
    </ContentWrapper.Root>
  )
}

const Infos = ({ facts, features }) => {
  return (
    <div className="flex lg:flex-col justify-between text-sm col-start-1 col-span-full lg:col-span-2 lg:col-start-2 mb-4 lg:mb-0 lg:py-1">
      {facts && (
        <FeatureList.Root>
          <FeatureList.Title>First release</FeatureList.Title>
          <FeatureList.List items={facts} delimiter={false} />
        </FeatureList.Root>
      )}

      {features && (
        <FeatureList.Root>
          <FeatureList.Title>Key facts</FeatureList.Title>
          <FeatureList.List items={features} delimiter={true} />
        </FeatureList.Root>
      )}
    </div>
  )
}

const Copy = ({ children }) => {
  return (
    <div className="my-4 lg:my-0 col-start-1 col-span-full lg:col-start-4 lg:col-span-6 leading-loose">
      {React.Children.map(children, (child, index) => {
        const textNodeClasses = classNames({ "mt-3": index > 0 })
        return <p className={textNodeClasses}>{child}</p>
      })}
    </div>
  )
}

const Links = ({ links }) => {
  return (
    <div className="col-start-1 col-span-full lg:col-start-10 lg:col-span-2">
      <div className="flex flex-col lg:items-start">
        <ul className="lg:transform lg:-rotate-90 lg:-translate-y-full lg:origin-bottom-right">
          {links.map(({ link, label }, key) => (
            <li key={key}>
              <ExternalLink.Root link={link}>{label}</ExternalLink.Root>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Root, HeroContent, TitleGroup, Content, Links, Copy, Infos, APPEARANCES }
