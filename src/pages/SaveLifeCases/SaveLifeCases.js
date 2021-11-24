import React from "react";
import { Text } from '../../components';
import { Link, animateScroll as scroll } from "react-scroll";
import case1 from '../../assets/images/case1.jpeg';

const SaveLifeCases = () => {
    return (
        <React.Fragment>
            <div className=''>
                <section>
                    <section class="text-gray-600 body-font">
                        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <Text
                                    text={'BONE MARROW TRANSPLANT'}
                                    className='title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900'
                                />
                                <Text
                                    text={'We are presently pursuing help for the critical case of 6month old baby boy  SUFIYAN SHAH.'}
                                    className='mb-2 text-sm text-gray-500'
                                />
                                <Text
                                    text={`He is diagnosed  with Acute Megakaryoblstic leukemia 
                                    This is a type of malignancy in children has a prognosis with cure rate of 40 to 50%. 
                                    `}
                                    className='mb-2 text-sm text-gray-500'
                                />
                                <Text
                                    text={`He is currently undergo in chemotherapy 

                                    And needs to undergo for .
                                    BONE MARROW TRANSPLANT 
                                    
                                    THE approximate cost of therapy is rupees 10lakh .to 15.lakh
                                    `}
                                    className='mb-8 text-sm text-gray-500'
                                />
                                <Text
                                    text={`This situation may further increase with complications 
                                    Any financial help & support will enable us to schedule the operation at the earliest .
                                    `}
                                    className='mb-2 text-sm text-gray-500'
                                />
                                <Text
                                    text={`The cost of bone marrow transplant is to expensive 

                                    And recently his  father..
                                    ABDUL HAMID  he is driver 
                                    His family is not in the state to financially provide for their son treatment 
                                    `}
                                    className='mb-2 text-sm text-gray-500'
                                />
                                <Text
                                    text={`Hence , we appeal to generous donar like your self to come forward & support this innocent boy and give him a chance to live a long healthy life
                                    `}
                                    className='mb-8 text-sm text-gray-500'
                                />

                            </div>
                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img class="w-96 rounded" alt="hero" src={case1} />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </React.Fragment>
    );
};

export default SaveLifeCases;
