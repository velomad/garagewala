import React from "react";
import { Text } from '../../../../components';
const LandingBanner = () => {
    return (
        <React.Fragment>
            <div className="mx-auto">
                <div className="bg-green-400 text-white p-8 py-4 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
                    <div className="flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10">
                        <h4 className="text-xl sm:text-2xl text-center md:text-left font-bold text-white md:pb-2">
                            Title.
                        </h4>
                        <Text
                            text="content"
                            className='text-center md:text-left text-white text-sm font-semibold md:text-sm'
                        />
                    </div>
                    <div className="pt-8 md:pt-0 justify-center lg:ml-auto z-10">

                    </div>
                    <div className="absolute bg-green-500 opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
                </div>
            </div>
         


        </React.Fragment>
    )
}

export default LandingBanner;