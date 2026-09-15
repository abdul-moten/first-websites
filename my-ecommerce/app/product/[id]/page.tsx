'use client';

import Navbar from '@/components/Navbar';
import { products } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { ArrowLeft, ShoppingBag, Star, Truck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-md mx-auto py-20 text-center">
          <h2 className="text-xl font-bold text-gray-800">প্রোডাক্টটি পাওয়া যায়নি!</h2>
          <Link href="/" className="mt-4 inline-block text-blue-600 font-medium hover:underline">
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-6">
          <ArrowLeft className="w-4 h-4" /> হোম পেজে ফিরে যান
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
            <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">{product.title}</h1>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold text-gray-800 ml-1">{product.rating}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">ইন স্টকে আছে</span>
              </div>

              <div className="text-3xl font-extrabold text-blue-600 mt-4">
                ৳{product.price.toLocaleString('bn-BD')}
              </div>

              <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="w-5 h-5 text-blue-600" />
                <span>সারা দেশে হোম ডেলিভারি সুযোগ</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>১০০% প্রিমিয়াম ও আসল প্রোডাক্টের নিশ্চয়তা</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2">
              <button
                onClick={handleAddToCart}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.99]'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {added ? 'কার্টে যুক্ত করা হয়েছে!' : 'কার্টে যোগ করুন'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
