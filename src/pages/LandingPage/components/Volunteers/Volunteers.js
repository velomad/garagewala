import React from "react";
import { Text } from '../../../../components';

const Volunteers = () => {
    return (
        <React.Fragment>
            <div class="flex flex-col text-center w-full mb-10">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"> </h2>
                <Text
                    text={'LEAD VOLUNTEERS'}
                    className='text-xs font-medium title-font mb-4 text-green-500'
                />
                <Text
                    text={'VOLUNTEERS'}
                    className='text-2xl font-bold  md:text-3xl'
                />
                <Text
                    text={'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.'}
                    className='lg:w-2/3 mt-2 mx-auto leading-relaxed text-sm text-gray-500'
                />
            </div>
            <div id="container" class="w-4/5 mx-auto">
                <div class="flex flex-col sm:flex-row">
                    <div class="sm:w-1/4 p-2">
                        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                            <div class="mb-3">
                                <img
                                    class="w-auto mx-auto rounded-full"
                                    src="https://i.pravatar.cc/150?img=66"
                                    alt=""
                                />
                            </div>
                            <h2 class="text-xl font-medium text-gray-700">Pande Muliada</h2>
                            <Text
                                text={'Volunteers'}
                                className='text-xs font-medium title-font mb-4 text-gray-500'
                            />
                        </div>
                    </div>

                    <div class="sm:w-1/4 p-2">
                        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                            <div class="mb-3">
                                <img
                                    class="w-auto mx-auto rounded-full"
                                    src="https://i.pravatar.cc/150?img=31"
                                    alt=""
                                />
                            </div>
                            <h2 class="text-xl font-medium text-gray-700">Saraswati Cahyati</h2>
                            <Text
                                text={'Volunteers'}
                                className='text-xs font-medium title-font mb-4 text-gray-500'
                            />
                        </div>
                    </div>

                    <div class="sm:w-1/4 p-2">
                        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                            <div class="mb-3">
                                <img
                                    class="w-auto mx-auto rounded-full"
                                    src="https://i.pravatar.cc/150?img=18"
                                    alt=""
                                />
                            </div>
                            <h2 class="text-xl font-medium text-gray-700">Wayan Alex</h2>
                            <Text
                                text={'Volunteers'}
                                className='text-xs font-medium title-font mb-4 text-gray-500'
                            />
                        </div>
                    </div>

                    <div class="sm:w-1/4 p-2">
                        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                            <div class="mb-3">
                                <img
                                    class="w-auto mx-auto rounded-full"
                                    src="https://i.pravatar.cc/150?img=28"
                                    alt=""
                                />
                            </div>
                            <h2 class="text-xl font-medium text-gray-700">Ketut Julia</h2>
                            <Text
                                text={'Volunteers'}
                                className='text-xs font-medium title-font mb-4 text-gray-500'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Volunteers;