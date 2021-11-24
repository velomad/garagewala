import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Homecss.css"
import HomeSlide1 from "../../../../assets/images/slide1.jpeg";
import HomeSlide2 from "../../../../assets/images/slide2.jpeg";
import HomeSlide3 from "../../../../assets/images/slide3.jpeg";
import HomeSlide4 from "../../../../assets/images/slide4.jpeg";
import HomeSlide5 from "../../../../assets/images/slide5.jpeg";

const HomeSlider = () => {
    const [sliderRef] = useKeenSlider({
        slidesPerView: 2,
        mode: "free-snap",
        spacing: 15,
        centered: true,
        loop: false,
    })
    return (
        <React.Fragment >
            <section style={{
                background: '#0f0c29',
                background: '-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)',
                background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
            }}>
                <div class="container px-5 py-4 mx-auto" >
                    <div class="flex flex-col text-center w-full py-4 bg-yellow-600 rounded-sm">
                        <h1 class="text-3xl text-white font-bold title-font mb-1">Help Save Childrens Lives</h1>
                        <h1 class="text-3xl text-white font-bold title-font mb-4">Save Life Foundation</h1>
                    </div></div>
                <div ref={sliderRef} className="keen-slider">
                    <div class="p-4 w-96 mx-auto">
                        <div class="h-full flex flex-col bg-white  shadow-xl rounded-lg items-center  text-center">
                            <img alt="team" class="flex-shrink-0  rounded-lg w-full h-56 object-cover object-center mb-4" src={HomeSlide5} />
                            <div class="w-full">
                                <div className="flex flex-row justify-between pb-3 border-b-2 border-gray-300">
                                    <div className="flex flex-col px-4 border-r-2 border-gray-300">
                                        <p className="text-sm font-bold text-gray-600">Current</p>
                                        <p className="text-green-500 font-bold">&#8377;30 lakh</p>
                                    </div>
                                    <div className="flex flex-col px-4 border-r-2 border-gray-300">
                                        <p className="text-sm font-bold text-gray-600">Target</p>
                                        <p className="text-green-500 font-bold">&#8377;30 lakh</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-bold text-gray-600">Rate</p>
                                        <p className="text-green-500 font-bold">40% to 50%</p>
                                    </div>
                                </div>
                                <h2 class="title-font font-medium text-lg text-gray-900 mt-3">Madeeha Naik</h2>
                                <h3 class="text-gray-500 mb-1 text-sm">HEMOGLOBIN SD DISEASE</h3>
                                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex mb-4"></div>

                                <p class="mb-4 text-sm font-medium">She is diagnosed with Acute    HEMOGLOBIN SD DISEASE This is a type of blood transfusion  in children has a prognosis with cure rate of 40 to 50%.
                                    SHe is currently undergo in   PEDIATRICS HEMATOLOGY THALASSEMIA BONE MARROW TRANSPLANT THE approximate cost of therapy is rupees 25,00,000lakh .to 30,00,000lakh
                                    This situation may further increase with complications Any financial help & support will enable us to schedule the operation at the earliest
                                    The cost of bone marrow transplant is to expensive And recently his father.. SALMAN NAIKH is expired  due to covid  His family is not in the state to financially provide for their daughter treatment
                                    Hence , we appeal to generous donar like your self to come forward & support this innocent girl and give her  a chance to live a long healthy life</p>
                                <div className='bg-green-500 w-full p-2'>
                                    <a href="https://pmny.in/LIplFS6Lo0ki" class="inline-flex text-white py-1 px-4 focus:outline-none  rounded text-sm">
                                        DONATE NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomeSlider;
