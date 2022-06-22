import Head from 'next/head';
import Header from './global/header';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <div className="bg-slate-100 min-h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <main className='mx-auto lg:w-4/5 flex flex-col items-center justify-center px-2 w-full'>
          {children}
        </main>
        </div>
      </div>
    </div>
  );
}