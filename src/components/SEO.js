import { NextSeo } from 'next-seo';

const SEO = () => (
  <NextSeo
    title="My Code Editor"
    description=" Best Frontend Libraries which are used by professionals working at facebook, Google, Microsoft and many other top companies."
    canonical="https://mycodeeditor.now.sh/"
    openGraph={{
      url: 'https://mycodeeditor.now.sh/',
      title: 'Frontend Libraries',
      description:
        ' Best Frontend Libraries which are used by professionals working at facebook, Google, Microsoft and many other top companies.',
      images: [
        {
          url: 'https://mycodeeditor.now.sh/shareSEO.png',
          alt: 'SEO Image',
        },
      ],
      site_name: 'Frontend Libraries',
    }}
  />
);
export default SEO;
