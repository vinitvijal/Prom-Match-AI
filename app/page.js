import React from 'react';
import Image from 'next/image';
import img from '@/public/img.png';
import { Calendar, Heart, Clock } from "lucide-react";

const Page = () => {  
  return (
    <div className='bg-[#F6DED8] min-h-screen'>  
      <header className='flex justify-between items-center px-4 md:px-8 py-4 fixed w-full top-0 z-50 bg-[#F6DED8]/40 backdrop-blur-sm pb-6'>
        <h1 className="text-3xl text-[#B82132] font-bold">CupidConnect</h1>
        <nav className='text-rose-700'>  
          <a href="#register" className='px-4 hover:text-rose-900'>Register</a>
          <a href="#matches" className='px-4 hover:text-rose-900'>Matches</a>
          <a href="#profile" className='px-4 hover:text-rose-900'>Profile</a>
        </nav>
      </header>

      <main className='px-8 relative -mt-12'>
        <div className='h-24 w-24 rounded-full ml-12 bg-[#B82132]/90 pt-4'></div> 

        <div className='flex md:flex-row items-center justify-between'>
          <div className='absolute top-50 left-120 w-10 h-10 rounded-full bg-[#f3b1a8] opacity-80 z-10'></div>
          <div className='absolute top-120 left-90 w-14 h-14 rounded-full bg-[#D2665A] opacity-80 z-10'></div>
          
          <div className='md:w-1/2 lg:w-1/3 space-y-6 md:mb-0 z-10 relative backdrop-blur-md bg-[#f3b1a8]/50 rounded-lg shadow p-4 ml-20'> 
          <h1 className="text-4xl md:text-3xl font-bold text-[#B82132] leading-tight">
            Find Your Perfect <span className="text-[#D2665A]">Prom Date</span> Match
          </h1>
            <p className='text-lg text-rose-700'>
              Connect with other students looking for prom partners in your area
            </p>
            <div className=''>
            <button className='bg-rose-700 text-white px-8 py-3 rounded-full hover:bg-rose-800'>
              Register Now
            </button>
            {/* <div className='absolute -top-4 left-8 w-28 h-28 rounded-full bg-[#f3b1a8] opacity-80 -z-10'></div> */}

            </div>
          </div>

          <div className='md:w-1/2 lg:w-2/5 relative -mt-20 -mb-8'>  
            <div className='absolute -top-8 -left-9 w-12 h-12 rounded-full bg-[#f3b1a8] opacity-80 z-10'></div>
            <div className='absolute top-60 right-3 w-6 h-6 rounded-full bg-[#D2665A] opacity-80 z-10'></div>
            <Image 
              src={img} 
              alt=""
              className='w-full h-auto'
              priority  
            />
          </div>
        </div>

        <section className="mx-auto px-4 py-8 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B82132] mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/40 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#D2665A] rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#B82132] mb-2">Register</h3>
              <p className="text-[#D2665A]">
                Fill out our detailed questionnaire about your interests, style, and what you're looking for in a date.
              </p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#D2665A] rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#B82132] mb-2">Match</h3>
              <p className="text-[#D2665A]">
            Our matchmaking algorithm pairs you with someone who shares your interests and style for an unforgettable
            prom night.
              </p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#D2665A] rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#B82132] mb-2">Results</h3>
              <p className="text-[#D2665A]">
                Receive your match results on March 10th and start planning your perfect prom night together.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;