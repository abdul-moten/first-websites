'use client';

import React, { useState } from 'react';

export default function ProductPage() {
  const [weight, setWeight] = useState('500 GM');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-amber-600">HONEY</span>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full pl-4 pr-10 py-2 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 text-sm">🔍</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <span className="hidden md:inline hover:text-amber-600 cursor-pointer">সকল প্রোডাক্ট</span>
            <span className="hidden md:inline hover:text-amber-600 cursor-pointer">ঝুড়ি</span>
            <span className="hidden md:inline hover:text-amber-600 cursor-pointer">অ্যাকাউন্ট</span>
            <span className="text-red-600 font-bold flex items-center gap-1">
              📞 +880 1766 631964
            </span>
          </div>
        </div>

        <nav className="bg-black text-white px-4 py-2 text-sm overflow-x-auto">
          <div className="max-w-7xl mx-auto flex space-x-6 whitespace-nowrap justify-center">
            {['Dry Fruits', 'Honey', 'Nuts', 'Oil', 'Pickle-Chutney', 'Seeds', 'Spice'].map((item, idx) => (
              <a key={idx} href="#" className="hover:text-amber-400 transition">{item}</a>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border p-6 grid md:grid-cols-2 gap-8 items-start">
          
          <div className="flex justify-center bg-gray-50 p-6 rounded-xl border">
            <img 
              src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80" 
              alt="Black Seed Flower Raw Honey" 
              className="max-h-96 object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-amber-700 leading-snug">
                কালোজিরা ফুলের মধু (Black Seed Flower Raw Honey)
              </h1>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                ৳৭০০ – ৳১,৩৯০
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">ওজন নির্বাচন করুন:</label>
              <div className="flex gap-3">
                {['500 GM', '1000 GM'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setWeight(option)}
                    className={`px-4 py-2 text-sm font-semibold rounded-md border transition ${
                      weight === option 
                        ? 'bg-black text-white border-black' 
                        : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="px-4 py-2 font-semibold text-gray-800">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md shadow transition text-lg text-center">
                অর্ডার করুন
              </button>
            </div>

            <div className="border-t pt-4 text-xs text-gray-500 space-y-1">
              <p><span className="font-semibold text-gray-700">SKU:</span> N/A</p>
              <p><span className="font-semibold text-gray-700">Category:</span> Honey</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3 mt-6">
              <h3 className="font-bold text-amber-900 text-sm">সহজে অর্ডার করতে আপনার তথ্য দিন:</h3>
              <input type="text" placeholder="আপনার নাম" className="w-full px-3 py-2 text-sm border rounded focus:outline-none" />
              <input type="text" placeholder="আপনার মোবাইল নম্বর" className="w-full px-3 py-2 text-sm border rounded focus:outline-none" />
              <input type="text" placeholder="সম্পূর্ণ ঠিকানা" className="w-full px-3 py-2 text-sm border rounded focus:outline-none" />
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded text-sm transition">
                অর্ডার নিশ্চিত করুন (৳{(weight === '500 GM' ? 700 : 1390) * quantity + 60})
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
