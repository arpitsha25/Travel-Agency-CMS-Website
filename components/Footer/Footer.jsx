import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => (
  <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-[#231535]">
    <div className="mx-auto max-w-screen-xl text-center">
      <a
        href="#"
        className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        {/* <svg
          className="mr-2 h-8"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z"
            fill="url(#paint0_linear_11430_22515)"
          />
        </svg> */}
        TWA
      </a>
      <div className='flex gap-6 text-white justify-center text-[24px] m-5'>
        <FaFacebookSquare/>
        <FaLinkedin/>
        <FaSquareInstagram/>
        <FaSquareXTwitter/>
        <FaSquareWhatsapp/>

      </div>
      <p className="my-6 text-gray-500 dark:text-gray-400">
      Explore the world effortlessly with our personalized travel experiences and hassle-free bookings.
      </p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white list-disc gap-2 lg:gap-5">
        {[
          'Privacy Policy',
          'Terms and Conditions',
          'Campaigns',
          'Blogs',
          'Affiliate Program',
          'FAQs',
          'Contact Us',
        ].map((item) => (
          <li key={item}>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{' '}
        <a href="#" className="hover:underline">
          TWA™
        </a>
        . All Rights Reserved.
      </span>
      <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-2">
        Designed and Developed by Arpit Sharma
      </p>
    </div>
  </footer>
);

export default Footer;
