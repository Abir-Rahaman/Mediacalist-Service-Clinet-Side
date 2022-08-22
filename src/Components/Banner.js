import React from 'react';
import banner from '../../src/assets/images/banner.png'

const Banner = () => {
    return (
        <div class="hero mt-12  w-full">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm " />
                <div>
                <h1 class="text-5xl font-bold">Your New Life Starts Here</h1>
                <p class="py-6">With more than 40 years of experience in healthcare consulting, we deliver results to help grow your practice. Our comprehensive medical billing services allow you to do what you do best—treat your patients.  </p>
                <button class="btn btn-primary">More Information</button>
                </div>
            </div>
            </div>
    );
};

export default Banner;