import Head from 'next/head'
import { Amita } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const amita = Amita({ subsets: ['latin'], weight: "700" })

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Show</title>
        <meta name="description" content="Discover designs and hire designers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid grid-cols-2 overflow-x-hidden'>

        <div className='min-h-screen flex flex-col items-center justify-center -mt-20 space-y-10'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className={`text-5xl text-center ${amita.className}`}>Discover UI Designs</h1>
            <p className={`text-sm text-center text-gray-600 ${amita.className}`}>&amp;</p>
            <h1 className={`text-4xl text-center ${amita.className}`}>Hire Designers</h1>
          </div>

          <div>
            <Link
              className='flex items-center space-x-2 border border-black px-4 py-2 rounded-lg bg-black text-white'
              href={'#'}
            >
              <span className='font-medium'>Login with</span>
              <span><svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg></span>
            </Link>
          </div>
        </div>

        <div className='absolute top-0 right-0'>
          <Image
            className='min-h-screen'
            src={'/Wairau.svg'}
            width={1080}
            height={1080}
            alt='Background image missing'
          />
        </div>
      </main>
    </>
  )
}


