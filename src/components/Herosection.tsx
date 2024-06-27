import React from 'react'
import iqbalImage from '../images/iqbal-rasool-portfolio.png'
const Herosection = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white"><span className="block">Hi!  👋</span>
                            <span className="block">My name is</span>
                            <span className="block " style={{ color: '#F9760E' }}>Iqbal DK</span>
                            <span className="block ">and I am a Web Developer</span></h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I specialize in creating responsive and dynamic websites using the latest technologies. Let's work together to bring your ideas to life!.</p>

                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={iqbalImage} alt="mockup " />

                    </div>
                </div>
            </section>
        </div>
    )
}


export default Herosection
