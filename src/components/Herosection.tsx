import React from 'react'
import iqbalImage from '../images/iqbal-rasool-portfolio.png'
const Herosection = () => {
    return (
        <div className='sm:pt-16'>
            <section className="bg-white dark:bg-gray-900 pt-16 lg:pt-0 ">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 pt-16 lg:pt-0">
                    <div className="mr-auto place-self-center lg:col-span-7  ">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white "><span className="block animate-slide-in-left ">Hi!  👋</span>
                            <span className="block animate-slide-in-right">My name is</span>
                            <span className="block animate-slide-in-left" style={{ color: '#F9760E' }}>Iqbal DK</span>
                            <span className="block animate-slide-in-right">and I am a Web Developer</span></h1>
                        <p className="animate-slide-in-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I specialize in creating responsive and dynamic websites using the latest technologies. Let's work together to bring your ideas to life!.</p>

                    </div>
                    <div className="hidden lg:mt-14 lg:col-span-5 lg:flex">
                        <img src={iqbalImage} alt="mockup " />

                    </div>
                </div>
            </section>
        </div>
    )
}


export default Herosection
