import React, { useState } from 'react'
import { Text } from '../../../../components';
import mission from '../../../../assets/images/poorfive.jpeg';
import vission from '../../../../assets/images/foodhelp.jpeg';
import goal from '../../../../assets/images/work.jpeg';

export default function Missionvissiongoal(props) {

    const [screenData, setScreenData] = useState([
        {
            'title': "title",
        },
        {
            'title': "title",
        },
        {
            'title': "title",
        },
    ])

    return (
        <React.Fragment>
            <section>
                <div className='grid grid-cols-1 sm:grid-cols-3 w-full'>
                    {
                        screenData.map((el, index) => {
                            return (
                                <div class="w-full  bg-cover bg-center  h-96 text-white  object-fill" style={{ backgroundImage: `url(${index == 0 ? "https://via.placeholder.com/150" : index == 1 ? "https://via.placeholder.com/150" : "https://via.placeholder.com/150"})` }}>
                                    <div className='bg-yellow-900 bg-opacity-60 w-full h-full py-10 px-10'>
                                        <div class="md:w-full h-full">
                                            {/* <p class="font-bold text-sm uppercase">Services</p> */}
                                            {
                                                index == 0 ? <svg class="w-14 h-14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg> :
                                                    index == 1 ? <svg class="w-14 h-14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg> :
                                                        <svg class="w-14 h-14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            }
                                            <Text
                                                text={el.title}
                                                className='text-2xl font-bold'
                                            />
                                            <Text
                                                text={el.content}
                                                className='mt-5 text-md text-sm font-medium'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}
