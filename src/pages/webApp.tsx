/* External dependencies */
import { graphql } from 'gatsby';
import React from 'react';
import loadable from '@loadable/component';
import { I18nextProvider } from 'react-i18next';

/* Local dependencies */
import Layout from '../components/layout';
import SEO from '../components/layout/seo';
import WebApp from '../components/WebApp/WebApp';
import i18n from '../locales/i18next.js';

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
      <I18nextProvider i18n={i18n}>
        <WebApp />
      </I18nextProvider>
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
