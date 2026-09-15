'use client';

import Navbar from '@/components/Navbar';
import { useCartStore } from '@/store/useCartStore';
import { useState } from 'react';
import { CheckCircle2, ShoppingBag, CreditCard, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bkash' | 'rocket' | 'nagad'>('bkash');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    trxId: ''
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharge = cart.length > 0 ? 60 : 0;
  const total = subtotal + deliveryCharge;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50/50">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">অর্ডার সফলভাবে সম্পন্ন হয়েছে!</h1>
            <p className="text-gray-500 mb-8">
              আপনার পেমেন্ট ও অর্ডার তথ্য গ্রহণ করা হয়েছে।
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-semibold transition-all shadow-sm"
            >
              <ShoppingBag className="w-5 h-5" />
              আরও কেনাকাটা করুন
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">চেকআউট ও পেমেন্ট</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Billing Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">শিপিং ডিটেইলস</h2>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">আপনার নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: রহিম আহমেদ"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">মোবাইল নম্বর *</label>
                <input
                  type="tel"
                  required
                  placeholder="017XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">সম্পূর্ণ ঠিকানা *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="বাসা/রোড নম্বর, এরিয়া, জেলা..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              {/* Multi Payment Options */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-gray-700 mb-3">পেমেন্ট মেথড নির্বাচন করুন</label>
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* bKash */}
                  <div 
                    onClick={() => setPaymentMethod('bkash')}
                    className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                      paymentMethod === 'bkash' ? 'border-pink-600 bg-pink-50 font-bold text-pink-700 ring-2 ring-pink-200' : 'border-gray-200'
                    }`}
                  >
                    <span className="text-xs">bKash (বিকাশ)</span>
                  </div>

                  {/* Nagad */}
                  <div 
                    onClick={() => setPaymentMethod('nagad')}
                    className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                      paymentMethod === 'nagad' ? 'border-orange-600 bg-orange-50 font-bold text-orange-700 ring-2 ring-orange-200' : 'border-gray-200'
                    }`}
                  >
                    <span className="text-xs">Nagad (নগদ)</span>
                  </div>

                  {/* Rocket */}
                  <div 
                    onClick={() => setPaymentMethod('rocket')}
                    className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                      paymentMethod === 'rocket' ? 'border-purple-600 bg-purple-50 font-bold text-purple-700 ring-2 ring-purple-200' : 'border-gray-200'
                    }`}
                  >
                    <span className="text-xs">Rocket (রকেট)</span>
                  </div>

                  {/* COD */}
                  <div 
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                      paymentMethod === 'cod' ? 'border-blue-600 bg-blue-50 font-bold text-blue-700 ring-2 ring-blue-200' : 'border-gray-200'
                    }`}
                  >
                    <span className="text-xs">ক্যাশ অন ডেলিভারি</span>
                  </div>

                </div>
              </div>

              {/* Payment Instructions & TrxID */}
              {paymentMethod !== 'cod' && (
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-xs space-y-3">
                  <p className="font-bold text-gray-800">
                    {paymentMethod === 'bkash' && 'বিকাশ (bKash) পেমেন্ট:'}
                    {paymentMethod === 'nagad' && 'নগদ (Nagad) পেমেন্ট:'}
                    {paymentMethod === 'rocket' && 'রকেট (Rocket) পেমেন্ট:'}
                  </p>
                  <p className="text-gray-600">
                    আমাদের নম্বর: <span className="font-bold text-gray-900">01700000000</span> এ মোট ৳{total.toLocaleString('bn-BD')} টাকা পাঠান।
                  </p>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">ট্রানজেকশন আইডি (TrxID) *</label>
                    <input
                      type="text"
                      required
                      placeholder="যেমন: 8N7A6D5C"
                      value={formData.trxId}
                      onChange={(e) => setFormData({ ...formData, trxId: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={cart.length === 0}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm"
              >
                অর্ডার কনফার্ম করুন (৳{total.toLocaleString('bn-BD')})
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">অর্ডার সামারি ({cart.length} টি আইটেম)</h2>

              <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="py-3 flex justify-between items-center text-xs">
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-gray-500">{item.quantity}x ৳{item.price.toLocaleString('bn-BD')}</p>
                    </div>
                    <span className="font-bold text-gray-900">৳{(item.price * item.quantity).toLocaleString('bn-BD')}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-3 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>সাবটোটাল</span>
                  <span>৳{subtotal.toLocaleString('bn-BD')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>ডেলিভারি চার্জ</span>
                  <span>৳{deliveryCharge.toLocaleString('bn-BD')}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 border-t pt-2">
                  <span>সর্বমোট</span>
                  <span className="text-blue-600">৳{total.toLocaleString('bn-BD')}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
