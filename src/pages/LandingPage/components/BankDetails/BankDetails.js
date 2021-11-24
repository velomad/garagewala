import React from 'react'
import bank from '../../../../assets/images/bank.svg';
import QR1 from '../../../../assets/images/orcode1.jpeg';
import QR2 from '../../../../assets/images/orcode2.jpeg';

export default function Bankdetails(props) {


    return (
        <React.Fragment>

            <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-1">
                <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-5 md:py-10 text-gray-800 font-light">
                    <div class="w-full max-w-6xl mx-auto pb-5">
                        <div class="-mx-3 md:flex items-center">
                            <div class="px-3 md:w-1/3 mb-10 md:mb-0">
                                <h1 class="text-3xl md:text-4xl font-bold mb-5 leading-tight">Bank Details.</h1>
                                <h3 class="text-gray-600 mb-7 text-sm font-bold">
                                    Account name -: Save life foundation <br />
                                    Bank:- HDFC bank <br />
                                    Account no -:  50100473092357 <br />
                                    IFSC Code - :  HDFC0000665 <br /><br />
                                    PAN No - :  ABCTS46760 <br />
                                    Reg No - :  MAH/590/2021 <br />
                                </h3>
                                <div>
                                    <span class="inline-block w-40 h-1 rounded-full bg-green-500"></span>
                                    <span class="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                                    <span class="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                                </div>
                            </div>
                            <div class="px-3 md:w-1/3">
                                <img class="w-full h-96 object-fit object-center rounded" alt="hero" src={QR2} />
                            </div>
                            <div class="px-3 md:w-1/3">
                                <img class="w-full h-96 object-fit object-center rounded" alt="hero" src={QR1} />
                            </div>
                            <div class="px-3 md:w-1/3">
                                <img class="w-full object-cover object-center rounded" alt="hero" src={bank} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}
