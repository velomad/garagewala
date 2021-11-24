import React, { useState } from 'react'

function Posters() {

    const [dummyData, setDummyData] = useState([
        {
            'title': 'title.',
            'img': "https://via.placeholder.com/150"
        },
        {
            'title': 'title',
            'img': "https://via.placeholder.com/150"
        },
        {
            'title': 'title',
            'img': "https://via.placeholder.com/150"
        },
        {
            'title': 'title.',
            'img': "https://via.placeholder.com/150"
        },

    ])
    return (
        <div>
            <div class="text-center py-10">
              
                <h4
                    text={'We are presently pursuing help for the critical case of 6month old baby boy  SUFIYAN SHAH.'}
                    className='mb-2 text-sm text-gray-500'
                ></h4>
                <div class="flex justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <section class="text-gray-600 body-font">
                <div style={{
                    background: '#8A2387',
                    background: '-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)',
                    background: 'linear-gradient(to right, #F27121, #E94057, #8A2387)'
                }} class="bg-yellow-100 rounded-sm px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            dummyData.map((el) => {
                                return (
                                    <div class="p-4 md:w-1/4">
                                        <div class="h-full bg-gray-900 rounded-lg overflow-hidden">
                                            <div className="px-7 py-3 text-center text-sm font-bold text-white">
                                                {el.title}
                                            </div>
                                            <img class="w-full object-cover object-center" src={"https://via.placeholder.com/150"} alt="blog" />
                                            <div class="p-6">
                                                <h2 class="bg-green-500 p-2 rounded-sm mx-10 tracking-widest text-sm text-center title-font font-medium text-gray-200 mb-1">{el.donate} INR</h2>
                                                <p class="leading-relaxed h-96 mb-3 text-center py-2 text-gray-300">{el.content}</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Posters
