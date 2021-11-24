import React, { useEffect, useState, useRef } from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import india from '../../../../assets/images/india.png';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../../../assets/images/logo.png';
import { withRouter } from "react-router";

const navigation = [
  { name: 'Home', href: '#', current: true, secLink: 'section0' },
  { name: 'Mission and Vission', href: '#', current: false, secLink: 'section1' },
  { name: 'About Us', href: '#', current: false, secLink: 'section2' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (props) => {

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [changeNavColor, setChangeNavColor] = useState(false);

  // const handleRouteChange = () => {
  //   console.log('Cases', props);
  //   props.history.push('/cases');
  //   // window.location = '/cases';
  // }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
      if (currentScrollY > 640) {
        setChangeNavColor(true);
      } else {
        setChangeNavColor(false);
      }
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <Disclosure as="nav" className={changeNavColor ? 'py-5 bg-gray-900 fixed w-full' : 'bg-transparent fixed w-full'} style={{ zIndex: '9999' }}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden w-20 h-24 pt-7"
                    src={"https://via.placeholder.com/150"}
                    alt="SaveLifeFoundation"
                  />
                  <img
                    className="hidden lg:block object-fit w-20 pt-5"
                    src={"https://via.placeholder.com/150"}
                    alt="SaveLifeFoundation"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 sm:pl-10 mt-8">
                  <div className="flex space-x-3">
                    {navigation.map((item) => (
                      <Link
                        to={item.secLink}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={900}
                      >
                        <p
                          key={item.name}
                          style={{ fontFamily: 'Raleway' }}
                          className={classNames(
                            item.current ? 'cursor-pointer bg-gray-700 text-white' : 'cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white',
                            'cursor-pointer px-3 py-2 rounded-md text-xs font-medium uppercase'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </p>
                      </Link>
                    ))}
                    {/* <p onClick={() => handleRouteChange()} className={classNames('cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white',
                      'cursor-pointer px-3 py-2 rounded-md text-xs font-medium uppercase'
                    )}>Cases</p> */}
                  </div>
                </div>
              </div>
              <div className="absolute space-x-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                {/* Profile dropdown */}
                {/* <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8"
                        src={india}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="bg-white px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  to={item.secLink}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={900}
                >
                  <p
                    key={item.name}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </p>
                </Link>
              ))}
              {/* <p onClick={() => handleRouteChange()} className={classNames('cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white',
                'cursor-pointer px-3 py-2 rounded-md text-xs font-medium'
              )}>Cases</p> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default withRouter(Navbar);

