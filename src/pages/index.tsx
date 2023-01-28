import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import ResponsiveFrame from 'src/components/ResponsiveFrame'
import { useEffect } from 'react';
import CUSTOM_ICON_PACK from 'src/const/IconPack';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const goToStartPage = () => {
    router.push("/welcome-screen");
  }

  return (
    <ResponsiveFrame backState={false} paddingState={0}>
      <div className="start-page-bg h-screen px-10" onClick={goToStartPage}>
        <div className='flex flex-col items-center z-20 h-screen cursor-pointer text-white'>
          <div className="logo-container-1 aspect-logo z-50 m-auto">
            <div className="flex justify-center">
              {CUSTOM_ICON_PACK.newsmastIcon}
            </div>
          </div>
        </div>
      </div>

    </ResponsiveFrame>
  )
}
