import React from "react";
import { Text } from '../../../../components';
import poor1 from '../../../../assets/images/poorone.jpg';
import poor2 from '../../../../assets/images/poortwo.jpg';
import poor3 from '../../../../assets/images/poorthree.jpg';
import poor4 from '../../../../assets/images/poorfour.jpg';
import poor5 from '../../../../assets/images/poorfive.jpg';

const GetToKnowUs = () => {
    return (
        <React.Fragment>
            <div class="mb-5">
                <div class="container px-5 mx-auto flex flex-col text-center w-full mb-8">
                    <Text
                        text={'Our Activities'}
                        className='text-xs text-green-500 tracking-widest font-medium title-font mb-1'
                    />
                    <Text
                        text={'Get To Know Us'}
                        className='sm:text-3xl text-2xl font-medium title-font text-gray-900'
                    />
                </div>
                <div className='grid sm:grid-cols-3 gap-4 grid-cols-1 sm:px-20 py-10'>
                    {
                        [...new Array(3)].map((el, index) => {
                            return (
                                <div className={index == 2 ? 'p-2 w-full' : 'sm:border-r-2 sm:border-gray-200 p-2 w-full'}>
                                    <div class="h-full flex items-center p-4 rounded-lg">
                                        <img alt="team" class="w-16 h-16 ring-4 ring-green-500 p-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                        <div class="flex-grow">
                                            <Text
                                                text={'Henry Letham'}
                                                className='text-gray-900 mb-2 title-font font-medium text-sm'
                                            />
                                            <Text
                                                text={'Your ultimate travel companion. Carries all the information you need while travelling'}
                                                className='text-gray-500 text-xs'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='grid sm:grid-cols-5 gap-1 grid-cols-1 w-full'>
                    <a class="block relative h-48 rounded overflow-hidden w-full">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={poor1} />
                    </a>
                    <a class="block relative h-48 rounded overflow-hidden w-full">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={poor2} />
                    </a>
                    <a class="block relative h-48 rounded overflow-hidden w-full">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={poor3} />
                    </a>
                    <a class="block relative h-48 rounded overflow-hidden w-full">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={poor4} />
                    </a>
                    <a class="block relative h-48 rounded overflow-hidden w-full">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={poor5} />
                    </a>
                </div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-10 mx-auto">
                        <div class="grid sm:grid-cols-4 gap-1 grid-cols-1 -m-4">
                            {
                                [...new Array(4)].map((el, index) => {
                                    return (
                                        <div className={index == 3 ? "lg:mb-0 mb-6 p-4" : "sm:border-r-2 sm:border-gray-200 lg:mb-0 mb-6 p-4"}>
                                            <div class="h-full text-center">
                                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                                <Text
                                                    text={'Henry Letham'}
                                                    className='text-gray-900 mb-1 title-font font-medium text-sm'
                                                />
                                                <Text
                                                    text={'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy.'}
                                                    className='leading-relaxed text-xs'
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default GetToKnowUs;