import React from 'react';

export default function EcommerceFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      
      {/* ১. হিরো ব্যানার সেকশন (Hero Banner) */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-800 to-slate-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-4 max-w-xl">
          <span className="bg-teal-500 text-xs px-3 py-1 rounded-full font-semibold uppercase">বিশেষ অফার</span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">আপনার পছন্দের সব পণ্য এখন এক জায়গায়!</h1>
          <p className="text-gray-200">সর্বোত্তম গুণমান, দ্রুত ডেলিভারি এবং সেরা দামে প্রযুক্তি ও ফ্যাশনের সর্বশেষ কালেকশন।</p>
          <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-lime-300 transition">অফারগুলি দেখুন &rarr;</button>
        </div>
        <div className="mt-6 md:mt-0">
          <div className="w-64 h-48 bg-teal-700/50 rounded-xl border border-teal-500 flex items-center justify-center text-teal-200">
            [ ব্যানার ইমেজ / স্লাইডার ]
          </div>
        </div>
      </section>

      {/* ২. ক্যাটাগরি ফিল্টারিং (Category Filter) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">ক্যাটাগরি সমূহ</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {['সব পণ্য', 'ইলেকট্রনিক্স', 'ফ্যাশন', 'এক্সেসরিজ', 'জুতো', 'ঘড়ি'].map((cat, idx) => (
            <button key={idx} className="px-5 py-2 rounded-full border border-gray-300 hover:bg-teal-600 hover:text-white transition whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ৩. সার্চ বার সেকশন (Search Bar) */}
      <section className="max-w-md mx-auto">
        <div className="relative">
          <input 
            type="text" 
            placeholder="পছন্দের পণ্য খুঁজুন..." 
            className="w-full pl-4 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <span className="absolute right-3 top-3 text-gray-400">🔍</span>
        </div>
      </section>

      {/* ৪. শপিং কার্ট ও চেকআউট সামারি (Cart & Checkout Preview) */}
      <section className="border rounded-xl p-6 bg-gray-50 max-w-lg mx-auto space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">অর্ডার সামারি (Cart)</h3>
        <div className="flex justify-between items-center text-sm">
          <span>হেডফোন (১টি)</span>
          <span className="font-semibold">৳১,৫০০</span>
        </div>
        <div className="flex justify-between items-center text-sm border-b pb-2">
          <span>ডেলিভারি চার্জ</span>
          <span className="font-semibold">৳৬০</span>
        </div>
        <div className="flex justify-between items-center font-bold text-lg">
          <span>মোট:</span>
          <span className="text-teal-600">৳১,৫৬০</span>
        </div>
        <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition">
          ক্যাশ অন ডেলিভারিতে অর্ডার করুন
        </button>
      </section>

      {/* ৫. ডার্ক মোড টগল উদাহরণ (Dark Mode Switcher UI) */}
      <section className="flex justify-between items-center p-4 border rounded-xl">
        <span className="font-medium">থিম পরিবর্তন (Light / Dark):</span>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          🌙 ডার্ক মোড
        </button>
      </section>

      {/* ৬. প্রোডাক্ট ডিটেইলস লেআউট (Product Details Preview) */}
      <section className="grid md:grid-cols-2 gap-8 border rounded-xl p-6">
        <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-500">
          [ প্রোডাক্টের গ্যালারি ছবি ]
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">স্মার্ট ওয়াচ ব্লুটুথ কলিং</h2>
          <p className="text-teal-600 font-bold text-xl">৳২,২০০</p>
          <p className="text-gray-600 text-sm">উচ্চমানের ডিসপ্লে, ৭ দিনের ব্যাটারি ব্যাকআপ এবং ওয়াটারপ্রুফ বডি।</p>
          <div className="space-x-2">
            <span className="font-semibold">সাইজ:</span>
            <button className="px-3 py-1 border rounded">M</button>
            <button className="px-3 py-1 border rounded bg-teal-600 text-white">L</button>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-bold">কার্টে যোগ করুন</button>
        </div>
      </section>

    </div>
  );
}
