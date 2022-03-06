import React, { useContext } from "react"
import classNames from "classnames"

import * as ContentWrapper from "../contentWrapper"
import * as ExternalLink from "../externalLink"
import * as FeatureList from "../featureList"

const ComponentContext = React.createContext()

const Root = ({ children, appearance }) => {
  return (
    <ComponentContext.Provider value={{ appearance }}>
      <section className={appearance === "primary" ? "bg-grey-darkest" : "bg-secondary-default"}>
        {children}
      </section>
    </ComponentContext.Provider>
  )
}

const HeroContent = ({ children }) => {
  return (
    <ContentWrapper.Root
      variant="large"
      className="px-5 pt-6 md:pb-6 md:pt-7"
      verticalSpacing={false}
      horizontalSpacing={false}
    >
      {children}
    </ContentWrapper.Root>
  )
}

const TitleGroup = ({ category, title, subTitle }) => {
  return (
    <div className="flex items-start md:items-center md:justify-center flex-col xl:absolute xl:top-0 xl:w-full xl:h-full z-10 mb-6 pointer-events-none">
      <h3 className="text-4xl lg:text-6xl lg:text-stroke-white lg:text-stroke font-mono leading-snug">
        {title}
      </h3>
      <div className="use-case-preview-title-group__subline relative flex md:inline-flex justify-between items-center gap-2 w-full md:w-auto">
        <h4 className="text-xl lg:text-2xl tracking-widest uppercase font-mono whitespace-nowrap">
          {subTitle}
        </h4>
        <h5 className="md:order-3 text-xs text-primary">{category}</h5>
      </div>
    </div>
  )
}

const Content = ({ children }) => {
  return (
    <ContentWrapper.Root verticalSpacing={false} className="pt-3 pb-6 md:pb-7">
      <div className="grid grid-cols-6 md:gap-5 leading-7">{children}</div>
    </ContentWrapper.Root>
  )
}

const Infos = ({ facts, features }) => {
  const { appearance } = useContext(ComponentContext)

  return (
    <div className="flex md:flex-col justify-between text-sm col-start-1 col-span-6 md:col-span-1 mb-4 md:mb-0 pt-1">
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
    <div className="my-4 md:my-0 col-start-1 col-span-6 md:col-start-2 md:col-span-4 leading-loose">
      {React.Children.map(children, (child, index) => {
        const textNodeClasses = classNames({ "mt-3": index > 0 })
        return <p className={textNodeClasses}>{child}</p>
      })}
    </div>
  )
}

const Links = ({ links }) => {
  return (
    <div className="col-start-1 col-span-6 md:col-start-6 md:col-span-1">
      <div className="flex flex-col md:items-end">
        <div className="md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right">
          {links.map(({ link, label }, key) => (
            <ExternalLink.Root key={key} link={link}>
              {label}
            </ExternalLink.Root>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Root, HeroContent, TitleGroup, Content, Links, Copy, Infos }
