"use client";
import React from 'react';
import TrustedClients from './TrustedClients';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Townhome',
      title: 'Unveils the Best Canadian Cities for Biking and Walk',
      date: 'February 3, 2023',
      imageUrl: 'https://i.ibb.co.com/mrM5GSxV/b546efbfa1e64518c8c62a78d014d1069118a6c1.jpg',
    },
    {
      id: 2,
      category: 'Villa',
      title: 'Diamond Manor Apartment in the New York and Service',
      date: 'February 3, 2023',
      imageUrl: 'https://i.ibb.co.com/wF4zCs6P/c51230e1e516e7c106e8c4c5e6a1301cf0d68833.jpg',
    },
    {
      id: 3,
      category: 'Townhome',
      title: '7 Simple Ways to Keep Your Kids\' Toys From...',
      date: 'February 3, 2023',
      imageUrl: 'https://i.ibb.co.com/SXfxCLjg/490694e23d2d5c80fb3d76c802b091399cba603d.jpg3',
    },
    {
      id: 4,
      category: 'Houses',
      title: 'Housing Markets That Changed the Most This...',
      date: 'February 3, 2023',
      imageUrl: 'https://i.ibb.co.com/rG3FY6ZK/9dffdce18ec46e1b744cb1546ba4e59230fc05d6.jpg',
    },
  ];




  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-white">
      <style jsx>{`
        @keyframes pulse-loop {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        .animate-pulse-loop {
          animation: pulse-loop 4s infinite ease-in-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">From Our Blog</h2>
          <p className="text-gray-500">Aliquam lacinia lacinia diam quis lacus euismod</p>
        </div>
        <div className="grid gap-5  grid-cols-1 md:grid-rows-2 lg:grid-rows-1  md:grid-cols-2 xl:grid-cols-3">
          {/* Main blog posts */}
          
            <div className="bg-white   overflow-hidden transition-transform duration-300 hover:scale-[1.02] animate-pulse-loop">
              <div className="relative">
                <img
                  src={blogPosts[0].imageUrl}
                  alt={blogPosts[0].title}
                  className="w-full object-cover rounded-[12px]"
                />
                <div className="absolute -bottom-7 right-4 shadow bg-[#FFFFFF] text-gray-800 rounded-lg py-2 px-4 w-[68px] h-[69px] flex flex-col items-center">
                  <span className="text-xl font-bold">Feb</span>
                  <span className="text-sm">03</span>
                </div>
              </div>
              <div className="py-6">
                <span className="text-gray-500 text-sm mb-2 inline-block">{blogPosts[0].category}</span>
                <h3 className="text-xl font-bold text-gray-800">{blogPosts[0].title}</h3>
              </div>
            </div>
          
          
            <div className="bg-white   overflow-hidden transition-transform duration-300 hover:scale-[1.02] animate-pulse-loop">
              <div className="relative">
                <img
                  src={blogPosts[1].imageUrl}
                  alt={blogPosts[1].title}
                  className="w-full object-cover rounded-[12px]"
                />
                <div className="absolute w-[68px] h-[69px] -bottom-7 right-4 shadow bg-[#FFFFFF] text-gray-800 rounded-lg py-2 px-4 flex flex-col items-center">
                  <span className="text-xl font-bold">Feb</span>
                  <span className="text-sm">03</span>
                </div>
              </div>
              <div className="py-6">
                <span className="text-gray-500 text-sm mb-2 inline-block">{blogPosts[1].category}</span>
                <h3 className="text-xl font-bold text-gray-800">{blogPosts[1].title}</h3>
              </div>
            </div>
          
          {/* Smaller blog posts */}
          <div className="md:col-span-2  xl:col-span-1 grid gap-5 xl:grid-rows-5 lg:grid-cols-2 xl:grid-cols-1 ">
            <div className="flex row-span-2 bg-white   overflow-hidden transition-transform duration-300 hover:scale-[1.02] items-center  animate-pulse-loop">
              <div className="flex-shrink-0 max-w-[170px]  max-h-[140px  overflow-hidden mr-4">
                <img
                  src={blogPosts[2].imageUrl}
                  alt={blogPosts[2].title}
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </div>
              <div>
                <span className="text-gray-500 text-sm mb-1 inline-block">{blogPosts[2].category}</span>
                <h4 className="text-md font-bold text-gray-800 mb-1">{blogPosts[2].title}</h4>
                <p className="text-gray-500 text-xs">{blogPosts[2].date}</p>
              </div>
            </div>
            <div className="flex row-span-2 bg-white  overflow-hidden transition-transform duration-300 hover:scale-[1.02] items-center  animate-pulse-loop">
              <div className="flex-shrink-0 w-[170px] h-[140px] overflow-hidden mr-4">
                <img
                  src={blogPosts[3].imageUrl}
                  alt={blogPosts[3].title}
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </div>
              <div>
                <span className="text-gray-500 text-sm mb-1 inline-block">{blogPosts[3].category}</span>
                <h4 className="text-md font-bold text-gray-800 mb-1">{blogPosts[3].title}</h4>
                <p className="text-gray-500 text-xs">{blogPosts[3].date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrustedClients/>
    </section>
  );
};

export default Blog;
