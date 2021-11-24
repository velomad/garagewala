import React from 'react'
import { Text } from '../../../../components';
import aboutus from '../../../../assets/images/poorthree.jpg';
import aboutMain from '../../../../assets/images/poorone.jpg';

export default function Aboutus(props) {

    return (
        <React.Fragment>
            <div class="container px-5 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <Text
                        text={'title'}
                        className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'
                    />
                    <Text
                        text="content"
                        className='lg:w-2/4 mx-auto leading-relaxed text-gray-500 text-sm'
                    />
                </div>
            </div>
            <div class="bg-cover bg-center  h-auto text-white object-fill" style={{ backgroundImage: `url(${"https://via.placeholder.com/150"})` }}>
                <div class="md:w-full text-right">
                    <section class="text-gray-600 body-font">
                        <div class="bg-purple-600 bg-opacity-40 py-10 sm:py-0 mx-auto flex  md:flex-row  flex-col items-center">
                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img class="w-full object-fit object-center rounded" alt="hero" src={"https://via.placeholder.com/150"} />
                            </div>
                            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <Text
                                    text={'title'}
                                    className='title-font sm:text-2xl text-2xl mb-6 font-medium text-white'
                                />
                                <Text
                                    text="content"
                                    className='text-white leading-relaxed text-sm sm:pr-24'
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
