import React from 'react'
import spotifyclone from '../images/spotify-clone.png'
import newapp from '../images/news-app.png'
import newsapp from '../images/news-app.png'
import birthdayremainder from '../images/birthdayremainder.png'
import dropbox from '../images/dropbox.png'
import pdfmerger from '../images/dropbox.png'
import livestream from '../images/livestream.png'

const Projects = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Things I’ve built so far</p>
                    </div>






                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3 ">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 flex-col">
                            <a href="#" >
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={spotifyclone} alt="Bonnie Avatar" />

                            </a>



                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-6">
                                    <a href="#">Spotify</a>
                                </h3>

                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6">This app lets you add songs, play/pause tracks, skip songs, and manage multiple playlists for a streamlined music experience.</p>

                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6"><strong>Tech Stack: HTML, CSS, JavaScript</strong></p>



                                <ul className="flex space-x-4 sm:mt-0 ml-6">
                                    <li>
                                        <a href="https://spotify-clone-ebon-ten.vercel.app/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://github.com/WazeerIqbal/spotify-clone" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            {/* project details end */}

                        </div>



                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 flex-col">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={newapp} alt="Jese Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-6">
                                    <a href="#">News Web App</a>
                                </h3>

                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6">This app fetches the latest news daily, keeping you updated with current events and top stories every day.</p>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6"><strong>Tech Stack: MERN</strong></p>
                                <ul className="flex space-x-4 sm:mt-0 ml-6">
                                    <li>
                                        <a href="https://news-web-app-dusky.vercel.app/" target='https://news-web-app-dusky.vercel.app/' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://github.com/WazeerIqbal/day-to-day" target='https://github.com/WazeerIqbal/day-to-day' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 flex-col">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={birthdayremainder} alt="Michael Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-6">
                                    <a href="#">Birthday Remainder
                                    </a>
                                </h3>

                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6">This app reminds you of daily birthdays and shows the latest upcoming birthdays.</p>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6"><strong>Tech Stack: HTML, CSS, REACT</strong></p>
                                <ul className="flex space-x-4 sm:mt-0 ml-6">

                                    <li>
                                        <a href="https://birthday-remainder-woad.vercel.app/" target='https://birthday-remainder-woad.vercel.app/' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://github.com/WazeerIqbal/birthday-remainder" target='https://github.com/WazeerIqbal/birthday-remainder' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>



                       
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 flex-col">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={dropbox} alt="Sofia Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-6">
                                    <a href="#">Dropbox</a>
                                </h3>

                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6">This app allows you to add notes and perform CRUD operations: Create, Read, Update, and Delete.</p>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6"><strong>Tech Stack: MERN</strong></p>
                                <ul className="flex space-x-4 sm:mt-0 ml-6">
                                    <li>
                                        <a href="https://add-your-notes-dropbox-crud-operation.vercel.app/" target='https://add-your-notes-dropbox-crud-operation.vercel.app/' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://github.com/WazeerIqbal/drop-box" target='https://github.com/WazeerIqbal/drop-box' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>




                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 flex-col">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={livestream} alt="Michael Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-6">
                                    <a href="#">Live Stream</a>
                                </h3>

                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6">This app streams live matches, letting you watch your favorite sports events in real-time with ease.</p>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6"><strong>Tech Stack: HTML, CSS, REACT</strong></p>
                                <ul className="flex space-x-4 sm:mt-0 ml-6">

                                    <li>
                                        <a href="https://livestream-lovat.vercel.app/" target='https://livestream-lovat.vercel.app/' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://livestream-lovat.vercel.app" target='https://livestream-lovat.vercel.app" className="text-gray-500 hover:text-gray-900 dark:hover:text-white' className="text-gray-500 hover:text-gray-900 dark:hover:text-white" >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 flex-col">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={pdfmerger} alt="Michael Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-6">
                                    <a href="#">Pdf Merger</a>
                                </h3>

                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6">This app allows you to add various PDF files, create new PDFs, and manage your documents efficiently and effortlessly.</p>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 ml-6"><strong>Tech Stack: HTML, CSS, JavaScript</strong></p>
                                <ul className="flex space-x-4 sm:mt-0 ml-6">
                                    <li>
                                        <a href="https://github.com/WazeerIqbal/PDF-Merger" target='https://github.com/WazeerIqbal/PDF-Merger' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://github.com/WazeerIqbal/PDF-Merger" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target='https://github.com/WazeerIqbal/PDF-Merger'>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
