import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const Seo = ({
  title = null,
  description = null
}) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      };

      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
          </Helmet>
        </>
      );
    }}
  />
);

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

export default Seo;
