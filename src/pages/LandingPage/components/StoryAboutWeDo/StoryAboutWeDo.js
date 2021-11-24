import React, { useState } from "react";
import { Text } from '../../../../components';

const StoryAboutWeDo = () => {

    const [ourValuesData, setOurValuesData] = useState([
        {
            'title': "Accountability",
            'content': "In every action we take, we commit to maintaining the highest ethical standards and taking full responsibility for our actions, while advocating for public institutions to adhere to the same standards as we do."
        },
        {
            'title': "Collaborative action and solidarity",
            'content': "When appropriate by our mission, we seek joint action and cooperation with other NGOs and CSOs, and stand with them when faced with challenges."
        },
        {
            'title': "Unity in diversity",
            'content': "Although we celebrate diversity and are committed to achieving unity among NGOs, we will also work with other like-minded organizations."
        }, {
            'title': "Work with Government hand in hand",
            'content': "Save Life Foundation main purpose is to facilitate peace between Governments and nongovernmental organizations. The SAVE LIFE FOUNDATION continually opens the doors of Government for partnership and constructive criticism in order to live up to its genesis."
        }, {
            'title': "Gender and diversity",
            'content': "We understand the importance of reflecting on and promoting respect for gender and diversity issues in our work"
        }, {
            'title': "Autonomy",
            'content': "To ensure the independence and existence of NGOs, we must always strive for and safeguard those rights."
        }, {
            'title': "Social Justice and Equity",
            'content': "Through collaborative work, we will pursue justice, equality, and dignity, particularly for the poor and marginalized in medical, educational and child care sector."
        }
    ]);
    const [showMore, setShowMore] = useState(3);

    const handleShowMore = () => {
        if (showMore == 3) {
            setShowMore(7);
        }
        if (showMore == 7) {
            setShowMore(3);
        }
    }
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font py-20">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                        <Text
                            text={'Our Values'}
                            className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'
                        />
                        <Text
                            text={'The following are the core values that will guide the operations of Save Life Foundation:'}
                            className='lg:w-1/2 w-full leading-relaxed text-gray-500'
                        />
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            ourValuesData.map((el, index) => {
                                if (index < showMore) {
                                    return (
                                        <div class="xl:w-1/3 md:w-1/2 p-4">
                                            <div class="border border-gray-200 p-6 rounded-lg shadow-xl">
                                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                                                </div>
                                                <Text
                                                    text={el.title}
                                                    className='text-lg text-yellow-400 font-medium title-font mb-2'
                                                />
                                                <Text
                                                    text={el.content}
                                                    className='leading-relaxed  text-sm'
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className='flex flex-row justify-end py-5'>
                        <button onClick={() => { handleShowMore() }} className="py-1 px-2 bg-yellow-400 text-white rounded-md text-xs">
                            {
                                showMore == 3 ? 'Show More' : 'Show Less'
                            }
                        </button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default StoryAboutWeDo;