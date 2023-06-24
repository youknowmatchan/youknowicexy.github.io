import Navbar from '@/components/Navbar'
import Instragram from '@/public/svg/instagram.svg'
import Twitter from '@/public/svg/twitter.svg'
import Phone from '@/public/svg/phone.svg'
import Mail from '@/public/svg/mail.svg'

export default function contact() {
    return(
        <>
       <div className="container flex p-4 mx-auto min-h-screen justify-center font-mono">
           <div className =" my-48">
                <div>
                    <h1 className="text-center text-4xl">Contact Me!</h1>
                    <h2 className="text-center text-2xl text-gray mb-16">Address where you can find me!</h2>
                </div>

                <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href=" https://instagram.com/youknowicexy/">
                    <div className="flex justify-between dark:bg-dark-bubblegum dark:hover:text-light-bubblegum bg-coffee hover:bg-light-coffee transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <Instragram className="stroke-white"/>
                        <p className="font-semibold text-xl text-white">@youknowicexy</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://twitter.com/youknowicexy/">
                    <div className="mt-2 flex justify-between dark:bg-dark-bubblegum dark:hover:text-light-bubblegum bg-coffee hover:bg-light-coffee transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <Twitter className="stroke-white"/>
                        <p className="font-semibold text-xl text-white">@youknowicexy</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="tel:+66839101617">
                    <div className="mt-2 flex justify-between dark:bg-dark-bubblegum dark:hover:text-light-bubblegum bg-coffee hover:bg-light-coffee transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        < Phone className="stroke-white"/>
                        <p className="font-semibold text-xl text-white">(+66)839101617</p>
                    </div>
                </a>
                <a href="mailto:contact@wintry.me">
                    <div className="mt-2 flex justify-between dark:bg-dark-bubblegum dark:hover:text-light-bubblegum bg-coffee hover:bg-light-coffee transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        < Mail className="stroke-white"/>
                        <p className="font-semibold text-xl text-white">contact@wintry.me</p>
                    </div>
                </a>
                </div>
           </div>
       </div>
        </>
    )
}