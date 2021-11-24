import React, { useEffect, useState } from "react";
import HomeBanner from '../../assets/images/homebanner.jpeg';
import MobileHomeBanner from '../../assets/images/mobile_home_banner.jpeg';
import { Text } from '../../components';
import { LandingBanner, HomeSlides, Posters, WorkWithSaveLife, Cases, BankDetails, BenefitsOfJoining, OurActivity, WhoWeAre, AboutUs, MissionVissionGoal, StoryAboutWeDo, GetToKnowUs, ActivityInFrame, SomeFacts, Volunteers, LatestNews } from '../LandingPage/components';
import { Link, animateScroll as scroll } from "react-scroll";
import axios from "axios";
import { withRouter } from "react-router";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import HomeBanner2 from '../../assets/images/education.webp';
import HomeBanner3 from '../../assets/images/food.jpg';
import HomeBanner4 from '../../assets/images/food2.jpg';
import HomeBanner5 from '../../assets/images/cancer.jpg';
import HomeBanner6 from '../../assets/images/cancer.jfif';
import HomeBanner7 from '../../assets/images/education.jfif';
import HomeBanner8 from '../../assets/images/education1.jpeg';
import HomeBanner9 from '../../assets/images/sports1.jpg';
import HomeBanner10 from '../../assets/images/sports.jpg';
import brandlogo from '../../assets/images/brand-logo.jpeg';


import { Footer } from "../../layouts/LandingPageLayout/components";
const LandingPage = (props) => {
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    if (window.innerWidth > 468) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  const paymentHandler = async () => {
    const API_URL = 'http://localhost:5000/'
    const orderUrl = `${API_URL}api/v1/payments/orders`;
    const response = await axios.get(orderUrl);
    const { data } = response;
    const options = {
      key: "rzp_test_Bycscy22AR3XtX",
      name: "Save Life Foundation",
      description: "Donation",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}api/v1/payments/capture/${paymentId}`;
          const captureResponse = await axios.post(url, {})
          let parsedData = JSON.parse(captureResponse.data)
          if (parsedData.status === 'captured' && parsedData.captured === true) {
            props.history.push({
              pathname: '/check-out-pay-ment/' + props.match.params.id,
              state: parsedData
            });
          }
        } catch (err) {
          console.log(err);
        }
      },
      prefill: {
        name: "Clerk",
        email: "bendrea007@gmail.com",
        contact: "8169029078"
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  return (
    <React.Fragment>
      <div className='space-y-5 sm:space-y-0'>
        <div ref={sliderRef} className="keen-slider relative">
          <div className="keen-slider__slide number-slide1">
            <img class="w-full object-cover object-center h-screen" src={"https://via.placeholder.com/150"} alt="blog" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img class=" w-full object-cover object-center h-screen" src={"https://via.placeholder.com/150"} alt="blog" />
          </div>
          {/* <div className="keen-slider__slide number-slide3 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner3} alt="blog" /></div>
          <div className="keen-slider__slide number-slide4 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner4} alt="blog" /></div>
          <div className="keen-slider__slide number-slide4 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner5} alt="blog" /></div>
          <div className="keen-slider__slide number-slide3 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner6} alt="blog" /></div>
          <div className="keen-slider__slide number-slide3 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner7} alt="blog" /></div>
          <div className="keen-slider__slide number-slide3 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner8} alt="blog" /></div>
          <div className="keen-slider__slide number-slide3 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner9} alt="blog" /></div>
          <div className="keen-slider__slide number-slide3 "><img class=" w-full h-screen object-cover object-center" src={HomeBanner10} alt="blog" /></div> */}
        </div>
        <section className='absolute top-0'>
          <div className="w-full bg-cover bg-center h-screen">
            <div className="flex items-start justify-start h-full w-full py-24 sm:px-24">
             content
            </div>
          </div>
          <section>
            <LandingBanner />
          </section>
          <section id='section1'>
            <MissionVissionGoal />
          </section>
          <section id='section2' className='py-10'>
            <AboutUs />
          </section>
          {/* <section>
          <OurActivity />
        </section> */}
          <section>
            <Cases />
          </section>
          <section id='section3'>
            <WhoWeAre />
            <Posters />
          </section>
          {/* <section id='section7'>
          <Posters />
        </section> */}

      
        
          <section id='section6'>
            <BenefitsOfJoining />
          </section>
          <section id='section7'>
            <Footer />
          </section>
          {/* <section>
          <GetToKnowUs />
        </section>
        <section>
          <ActivityInFrame />
        </section>
        <section>
          <SomeFacts />
        </section>
        <section>
          <Volunteers />
        </section>
        <section>
          <LatestNews />
        </section> */}
        </section>

      </div>
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
