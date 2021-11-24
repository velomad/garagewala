import React, { useState } from 'react'
import { Text } from '../../../../components';
import joiining from '../../../../assets/images/joining.jpeg';

export default function Benefitsofjoining(props) {
    const [benefitData, setBenefitData] = useState([
        {
            'title': "Networking opportunities",
            'icon': 'network.png',
            'content': "Since NGOs usually participate in a variety of networking activities, volunteers and employees alike have the opportunity to interact with different types of people and hear different perspectives. In addition, they can learn from the successes of others and the mistakes they have made in the past. Employees of NGOs may also develop personal relationships with people they meet. The ability to meet philanthropists, CEOs and other influencers can positively affect a person's career."
        },
        {
            'title': "Contribution to social impact",
            'icon': 'social-media.png',
            'content': "Various methods can be used to volunteer. As an example, you can assist the less fortunate with their education, participate in relief and rehabilitation activities, participate in medical missions, or plant trees. Participation in such activities will enhance society by improving people's lives. Individuals get a great deal of self-fulfillment and personal growth from this activity regardless of how much money they receive."
        },
        {
            'title': 'Knowledge growth',
            'icon': 'open-book.png',
            'content': "Participation by NGOs at conferences at both the local and international level is common. People can learn a lot at these conferences, which are often very informative. Participating in these conferences will cost money without being invited. Attending such events educates NGOs in various fields and helps them build their knowledge bubbles."
        },
        {
            'title': 'Enhancement of academic performance',
            'icon': 'network.png',
            'content': "Managing an NGO is no easy feat. Hence, in recent years, many NGO project management and courses on development studies have been established by many academic institutions. Employees of NGOs have had the privilege of taking these courses to further develop their knowledge in the field. Additionally, they are able to earn degrees which can bring them to great heights in the future. In today’s day and age where almost nothing is free, gaining access to education is something employees can not only benefit from greatly, it also helps them balance their time and money"
        },
        {
            'title': 'Training seminars',
            'icon': 'analysis.png',
            'content': "Since NGOs have employees handling a variety of functions, they should invest in training seminars to prepare their employees to handle those responsibilities. Over many years, these programs have proven to be effective with reputable training agencies. They are capable of preparing employees for various tasks in various fields following these training sessions. A training program is not the only training employees receive. Training is usually continuous. The benefits of this can be taken with an employee wherever they go. In addition to professional development, they will become more self-aware, which is hard to attain in a private firm."
        }
    ])
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-10 mx-auto">
                        <div class="flex -m-4 space-x-4">
                            {
                                benefitData.map((el, index) => {
                                    return (
                                        <div class="p-4 border-2 shadow-xl border-gray-100 rounded-md lg:w-1/5 md:w-1/2">
                                            <div class="h-full flex flex-col items-start text-center">
                                                <img alt="team" class="flex-shrink-0  rounded-lg w-20 object-cover object-center mb-4" src={`/static/images/${el.icon}`} />
                                                <div class="w-full">
                                                    <Text
                                                        text={el.title}
                                                        className='title-font text-left font-medium mb-2 text-lg text-gray-900'
                                                    />
                                                    <Text
                                                        text={el.content}
                                                        className='mb-8 text-left text-xs text-gray-500'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}
