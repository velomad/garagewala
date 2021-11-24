import React from 'react'
import { Text } from '../../../../components';
import whowe1 from '../../../../assets/images/food.jpg';
import whowe2 from '../../../../assets/images/food2.jpg';

export default function Whoweare(props) {

    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="bg-gray-100 mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <Text
                            text={'title'}
                            className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'
                        />
                        <Text
                            text="content"
                            className='w-full text-left leading-relaxed text-gray-500 text-sm'
                        />
                    </div>
                    <div class="bg-white p-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="w-full h-96 rounded" alt="hero" src={"https://via.placeholder.com/150"} />
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font mt-4">
                <div class="bg-gray-100 mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="bg-white p-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="w-full h-96 rounded" alt="hero" src={"https://via.placeholder.com/150"} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <Text
                            text={'title'}
                            className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'
                        />
                        <Text
                            text="content"
                            className='w-full text-left leading-relaxed text-gray-500 text-sm'
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
