/* External dependencies */
import { graphql } from 'gatsby';
import React from 'react';

/* Local dependencies */
import Layout from '../components/layout';
import SEO from '../components/layout/seo';
import Map from '../components/website/Map/Map';

export default function HomePage({ data }) {
  const title = 'Мой базовый сайт Mancho School';

  const {
    site: {
      siteMetadata: { titleTemplate },
    },
  } = data;

  return (
    <Layout>
      <SEO
        title={titleTemplate.replace('%s', title)}
        description={title}
      />
      <Map/>
    </Layout>
  );
}

export const query = graphql`
  query ($language: String) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    site {
      siteMetadata {
        titleTemplate
      }
    }
  }
`;
