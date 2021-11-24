import React, { useEffect, useState } from 'react';
import { Text } from '../../../../components';
import case1 from '../../../../assets/images/case1.jpeg';
import axios from 'axios';

export default function Cases(props) {

    const [casesData, setCasesData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://savelifefoundation.org.in/api/v1/case/allcases')
            .then(response => setCasesData(response.data.cases));
    }

    return (
        <React.Fragment>
            <div className=''>
                <section>
                    <section class="text-gray-600 body-font">
                        {
                            casesData.map((el) => {
                                return (
                                    <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                            <Text
                                                text={el.title}
                                                className='title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900'
                                            />
                                            <div className='flex flex-row justify-start items-center space-x-5'>
                                                <div>Donation Required - </div>
                                                <div className='text-green-500 font-bold'>&#8377; {el.donationRequirement}</div>
                                            </div>
                                            <div className='flex flex-row justify-start items-center space-x-5'>
                                                <div>Needers Name</div>
                                                <div className='text-gray-600 font-bold'>{el.needersName}</div>
                                            </div>
                                            {/* <Text
                                    text={'We are presently pursuing help for the critical case of 6month old baby boy  SUFIYAN SHAH.'}
                                    className='mb-2 text-sm text-gray-500'
                                /> */}
                                            <Text
                                                text={el.content}
                                                className='mb-2 py-6 text-sm text-gray-500'
                                            />
                                        </div>
                                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                            <img class="w-96 rounded" alt="hero" src={el.imageUrl} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                </section>
            </div>
        </React.Fragment>
    )
}
