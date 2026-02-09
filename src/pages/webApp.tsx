/* External dependencies */
import { graphql } from 'gatsby';
import React from 'react';
import loadable from '@loadable/component';

/* Local dependencies */
import Layout from '../components/layout';
import SEO from '../components/layout/seo';
import WebApp from '../components/WebApp/WebApp';

const LoadableMapApp = loadable(() => import('../components/WebApp/MapApp/MapApp'), {
  fallback: (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      Загрузка карты...
    </div>
  ),
});

export default function HomePage({ data }) {
  const title = 'Мой базовый сайт Mancho School';

  const {
    site: {
      siteMetadata: { titleTemplate },
    },
  } = data;

  return (
    <Layout>
      <SEO title={titleTemplate.replace('%s', title)} description={title} />
      <LoadableMapApp />
      <WebApp />
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
