import React from 'react'
import { Text } from '../../../../components';
import work from '../../../../assets/images/work.jpeg';

export default function Workwithsavelife(props) {

    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <Text
                            text={'Work with'}
                            className='text-3xl font-semibold text-gray-800 md:text-4xl'
                        />
                        <Text
                            text={'Save Life foundation'}
                            className='text-yellow-500 text-3xl font-semibold md:text-4xl'
                        />
                        <Text
                            text={'(Donate us)'}
                            className='text-xl font-semibold text-gray-500 md:text-xl'
                        />
                        <Text
                            text={'Through Save Life Foundation, the key to development Human Rights Awareness and Protection NGO – Save Foundation, we work to create a world where dignity is guaranteed for all people. We work to assure that everyone has the right to Legal Education Awareness and Human Rights Protection, especially children and women, the future of our humanity. Human rights are the basic rights of each individual in any part of the globe irrespective of cast, creed, sex, age, colour, status. It encompasses all social economic political, cultural anti-elements based on law of nature with the aim of ensuring justice, freedom and equality viz. individual and collective existence.'}
                            className='mt-2 text-sm text-gray-500'
                        />
                        <Text
                            text={'At Save Life Foundation, we are deeply concerned about the enormous waste of human potential around the world today. Many individuals and agencies which implement human rights include United Nations (Office of the High Commissioner for Human Rights), National Human Rights Commission in different countries are benefiting from endless advances in human rights yet many others continue to fall behind. We should all be concerned about the growing threats to international peace. We can not build a strong global future upon this kind of foundation.'}
                            className='mt-2 text-sm text-gray-500'
                        />
                        <Text
                            text={'Through this special International Fundraising Campaign, we are appealing to our many donors, sponsors, agencies, organisations, associations and various supporters around the world to help us build a better future for all human beings to bring better prospects for shared prosperity and to help us in Human Rights and various other Awareness Campaigns related to Human being.'}
                            className='mt-2 text-sm text-gray-500'
                        />
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={work} />
                    </div>
                </div>
            </section>
            <div class="w-full">
                <div class="min-w-screen bg-white py-5 flex items-center justify-center">
                    <div class="w-full bg-white  px-5 py-5 md:py-5 text-gray-800 font-light">
                        <div class="w-full px-5 mx-auto pb-5">
                            <div class="md:flex items-center">
                                <div class="md:w-2/3 mb-10 md:mb-0">
                                    <Text
                                        text={'Why to Donate to'}
                                        className='text-3xl font-semibold text-gray-800 md:text-4xl'
                                    />
                                    <Text
                                        text={'Save Life Foundation.'}
                                        className='text-3xl font-semibold text-yellow-500 md:text-4xl'
                                    />
                                    <h3 class="text-gray-600 mb-7 font-bold text-sm">Even the smallest contribution can make a big difference to children. To make a real impact on the lives of India's children, we need the generosity of individuals like you!</h3>
                                    <div>
                                        <span class="inline-block w-40 h-1 rounded-full bg-green-500"></span>
                                        <span class="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                                        <span class="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                                    </div>
                                </div>
                                <div class="px-3 md:w-1/3">
                                    <form>
                                        <div class="flex mb-3">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email@example.com" />
                                        </div>
                                        <div>
                                            <button class="block w-full bg-green-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold">Subscribe now.</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
