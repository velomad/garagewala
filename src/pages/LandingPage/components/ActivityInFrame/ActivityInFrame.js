import React from "react";
import { Text } from '../../../../components';
import poor1 from '../../../../assets/images/poorone.jpg';
import poor2 from '../../../../assets/images/poortwo.jpg';
import poor3 from '../../../../assets/images/poorthree.jpg';

const ActivityInFrame = () => {
    return (
        <React.Fragment>
            <main class="container mx-auto mb-5 px-6 md:px-0">
                <section>
                    <Text
                        text={'Activity In Frames'}
                        className='text-3xl font-bold text-gray-600 mb-1'
                    />
                    <Text
                        text={'Your ultimate travel companion Carries all the information you need while travellin.'}
                        className='text-xs font-bold text-gray-600 mb-10'
                    />
                    <div class="grid sm:grid-cols-3 gap-4 grid-cols-2">
                        <div>
                            <div class="bg-gray-300 h-44">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={poor1} />
                            </div>
                            <h3 class="text-lg font-semibold text-gray-500 mt-2">Saunas in <span class="text-gray-700">Helsinki</span></h3>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-44">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={poor2} />
                            </div>
                            <h3 class="text-lg font-semibold text-gray-500 mt-2">Saunas in <span class="text-gray-700">Rovaniemi</span></h3>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-44">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={poor3} />
                            </div>
                            <h3 class="text-lg font-semibold text-gray-500 mt-2">Saunas in <span class="text-gray-700">Ruka</span></h3>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default ActivityInFrame;