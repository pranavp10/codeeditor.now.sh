import { NextSeo } from 'next-seo';

const SEO = () => (
  <NextSeo
    title="My Code Editor"
    description="A code editor for Frontend development that improves your efficiency."
    canonical="https://mycodeeditor.now.sh/"
    openGraph={{
      url: 'https://mycodeeditor.now.sh/',
      title: 'My Code Editor',
      description:
        'A code editor for Frontend development that improves your efficiency.',
      images: [
        {
          url: 'https://mycodeeditor.now.sh/shareSEO.png',
          alt: 'SEO Image',
        },
      ],
      site_name: 'My Code Editor',
    }}
  />
);
export default SEO;
