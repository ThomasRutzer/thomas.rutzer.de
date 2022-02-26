import React from "react"
import classNames from "classnames"

import { ContentWrapper } from "../layout"
import ImageGrid from "../imageGrid"
import FeatureList from "../featureList"
import { ExternalLink } from "../links"

const Container = ({ children, appearance }) => {
  return (
    <section className={appearance === "primary" ? "bg-grey-darkest" : "bg-secondary-default"}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          appearance,
        })
      )}
    </section>
  )
}

const Images = ({ title, subTitle, category, imageData }) => {
  return (
    <ContentWrapper
      variant="large"
      additionalClasses="px-5 pt-6 md:pb-6 md:pt-7"
      verticalSpacing={false}
      horizontalSpacing={false}
    >
      <ImageGrid category={category} title={title} subTitle={subTitle} images={imageData} />
    </ContentWrapper>
  )
}

const Content = ({ children, appearance }) => {
  return (
    <ContentWrapper>
      <div className="grid grid-cols-6 md:gap-5 leading-7">
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            appearance,
          })
        )}
      </div>
    </ContentWrapper>
  )
}

const Infos = ({ facts, features, appearance }) => {
  return (
    <div className="flex md:flex-col justify-between text-sm col-start-1 col-span-6 md:col-span-1 mb-4 md:mb-0">
      {facts && (
        <div>
          <FeatureList
            title="first release"
            items={facts}
            appearance={appearance}
            delimiter={false}
          />
        </div>
      )}

      {features && (
        <div>
          <FeatureList title="key facts" items={features} appearance={appearance} />
        </div>
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
            <ExternalLink key={key} appearance="primary" link={link}>
              {label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Container, Images, Content, Links, Copy, Infos }
