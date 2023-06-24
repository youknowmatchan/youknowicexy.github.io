import Link from 'next/link'
import { Inter } from 'next/font/google'
import Clock from '@/components/Clock'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
       <div>
       </div>
       <div className="container flex items-center p-4 mx-auto min-h-screen justify-center font-mono">
           <div>
               <h1 className="text-center text-4xl code">Hello!&#128075; I'm <span className="font-bold">"Youknowicexy"</span></h1>
               <h2 className="text-center text-3xl text-gray-dark dark:text-gray-light mb-10">A student from thailand</h2>
         </div>
       </div>
   </>
  )
}
