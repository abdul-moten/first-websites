'use client';

import Navbar from '@/components/Navbar';
import { useCartStore } from '@/store/useCartStore';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCartStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = cart.length > 0 ? 60 : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="p-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">আপনার শপিং কার্ট</h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 max-w-md mx-auto">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">আপনার কার্ট খালি</h3>
            <p className="text-gray-500 text-sm mb-6">আপনার কার্টে এখনো কোনো প্রোডাক্ট যুক্ত করেননি।</p>
            <Link href="/" className="inline-block bg-blue-600 text-white font-medium px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
              প্রোডাক্ট দেখুন
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg bg-gray-50" />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.title}</h3>
                    <p className="text-blue-600 font-bold text-base mt-1">৳{item.price.toLocaleString('bn-BD')}</p>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1 border border-gray-200">
                    <button onClick={() => removeFromCart(item.id)} className="p-1 hover:bg-gray-200 rounded text-gray-600">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-semibold px-2">{item.quantity}</span>
                    <button onClick={() => addToCart(item)} className="p-1 hover:bg-gray-200 rounded text-gray-600">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit space-y-4">
              <h2 className="text-lg font-bold text-gray-900 border-b pb-3">অর্ডার সামারি</h2>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>সাবটোটাল</span>
                  <span className="font-semibold text-gray-900">৳{subtotal.toLocaleString('bn-BD')}</span>
                </div>
                <div className="flex justify-between">
                  <span>ডেলিভারি চার্জ</span>
                  <span className="font-semibold text-gray-900">৳{deliveryFee}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-base font-bold text-gray-900">
                  <span>মোট</span>
                  <span className="text-blue-600">৳{grandTotal.toLocaleString('bn-BD')}</span>
                </div>
              </div>

              <Link href="/checkout" className="block text-center w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow hover:bg-blue-700 transition-colors">
                অর্ডার নিশ্চিত করুন
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
