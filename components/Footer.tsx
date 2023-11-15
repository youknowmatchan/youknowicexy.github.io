import Link from 'next/link'
import Image from 'next/image'
import Youtube from '@/public/svg/youtube.svg'
import Instragram from '@/public/svg/instagram.svg'
import Twitter from '@/public/svg/twitter.svg'
import Github from '@/public/svg/github.svg'

const Footer = () => {
    return (
        <>
           <footer className="fixed bottom-0 w-full h-12 font-mono text-xl bg-white dark:bg-black dark:text-white">
               <div className="flex justify-between items-center h-full w-full px-8 2xl:px-32">
                   
                   <Link href="/"><div className="align-right mr-5">@Youknowicexy</div></Link>
                   <div>
                       <ul className="flex space-x-7">
                           <Link href="https://www.youtube.com/channel/UCo7Qxfiq0CRf_1Z-u-NCKqw" target="_blank">
                               <li><Youtube className="font-white hover:text-fallow dark:hover:text-light-bubblegum"/></li>
                           </Link>
                           <Link href="https://www.instagram.com/youknowicexy" target="_blank">
                               <li><Instragram className="font-white hover:text-fallow dark:hover:text-light-bubblegum"/></li>
                           </Link>
                           <Link href="https://twitter.com/youknowicexy" target="_blank">
                               <li><Twitter className="font-white hover:text-fallow dark:hover:text-light-bubblegum"/></li>
                           </Link>
                           <Link href="https://github.com/youknowicexy" target="_blank">
                               <li><Github className="font-white hover:text-fallow dark:hover:text-light-bubblegum"/></li>
                           </Link>
                       </ul>
                    </div>
               </div>
           </footer>
        </>
    )
}

export default Footer;
