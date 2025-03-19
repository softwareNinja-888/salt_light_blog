/////////////////////////////////// BLOG CARDS



import React from 'react';

const Blog = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">Read our blog</h2>
                    <p className="mt-5 font-normal text-gray-600 font-pj">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                </div>

                <div className="grid max-w-3xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-2 gap-y-8 gap-x-8 lg:gap-x-20">
                    <div className="relative group">
                        <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                            <img className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png" alt="" />
                        </div>
                        <p className="mt-6 text-sm font-normal text-gray-600 font-pj">November 22, 2021</p>
                        <p className="mt-4 text-xl font-bold text-gray-900 font-pj">How To Optimize Progressive Web Apps: Going Beyond The Basics</p>
                        <a href="#" title="">
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className="relative group">
                        <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                            <img className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png" alt="" />
                        </div>
                        <p className="mt-6 text-sm font-normal text-gray-600 font-pj">November 16, 2021</p>
                        <p className="mt-4 text-xl font-bold text-gray-900 font-pj">How To Optimize Progressive Web Apps: Going Beyond The Basics</p>
                        <a href="#" title="">
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;



////////////////////////////////////btns:


import React from 'react';

const ButtonStatus = () => {
    return (
        <div className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold text-gray-900">Button Status</h2>

                <div className="flex flex-wrap gap-5 mt-8">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                    >
                        Primary
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                    >
                        Secondary
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700"
                    >
                        Danger
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-300 border border-transparent rounded-md cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-400"
                        disabled
                    >
                        Disabled
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                        Stroke
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ButtonStatus;