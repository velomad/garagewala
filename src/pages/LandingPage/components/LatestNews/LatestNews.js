import React from "react";
import { Text } from '../../../../components';

const LatesNews = () => {
    return (
        <React.Fragment>
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-wrap w-full mb-6 flex-col items-center text-center">
                    <Text
                        text={'Latest News'}
                        className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'
                    />
                    <Text
                        text={'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.'}
                        className='lg:w-1/2 w-full leading-relaxed text-gray-500'
                    />
                </div>
            </div>
            <div class="max-w-screen-xl mx-auto p-5 sm:p-10">
                <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {
                        [...new Array(5)].map((el, index) => {
                            return (
                                <div class="rounded overflow-hidden shadow-lg">
                                    <a href="#"><div class="relative">
                                        <img class="w-full" src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                                        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                        <a href="#!"><div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            Photos
                                        </div></a>
                                        <a href="!#"><div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            <span class="font-bold">27</span>
                                            <small>March</small>
                                        </div></a>
                                    </div></a>
                                    <div class="px-6 py-4">
                                        <a href="#" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best View in Newyork City</a>
                                        <p class="text-gray-500 text-sm">
                                            The city that never sleeps
                                        </p>
                                    </div>
                                    <div class="px-6 py-4 flex flex-row items-center">
                                        <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                            <span class="ml-1">6 mins ago</span></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default LatesNews;