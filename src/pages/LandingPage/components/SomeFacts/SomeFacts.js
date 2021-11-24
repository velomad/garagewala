import React from "react";
import { Text } from '../../../../components';

const SomeFacts = () => {
    return (
        <React.Fragment>
            <section className='mb-10'>
                <div class="w-full bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)" }}>
                    <div class="flex flex-col items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                        <div class="text-center py-10">
                            <Text
                                text={'Some Facts'}
                                className='text-white text-2xl font-semibold uppercase md:text-3xl'
                            />
                        </div>
                        <div className='grid sm:grid-cols-4 gap-10 grid-cols-1 my-10'>
                            {
                                [...new Array(4)].map((el, index) => {
                                    return (
                                        <div class="p-2 w-full">
                                            <div class="h-full bg-white flex items-center border-gray-200 border py-2 px-4 rounded-lg">
                                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                                <div class="flex-grow">
                                                    <Text
                                                        text={'Henry Letham'}
                                                        className='text-gray-900 mb-1 title-font font-medium text-sm'
                                                    />
                                                    <p class="text-gray-500">CTO</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}
export default SomeFacts;