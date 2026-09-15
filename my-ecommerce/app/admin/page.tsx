'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { Package, CheckCircle2, Clock, XCircle, ShoppingBag, DollarSign, Plus, Image as ImageIcon } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  paymentMethod: string;
  trxId?: string;
  total: number;
  status: 'Pending' | 'Completed' | 'Cancelled';
  date: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

const initialOrders: Order[] = [
  {
    id: 'ORD-1001',
    customerName: 'রহিম আহমেদ',
    phone: '01711223344',
    address: 'মিরপুর ১০, ঢাকা',
    paymentMethod: 'bKash',
    trxId: '8N7A6D5C',
    total: 3560,
    status: 'Pending',
    date: '15 Sep 2026'
  },
  {
    id: 'ORD-1002',
    customerName: 'করিম হাসান',
    phone: '01899887766',
    address: 'জিইসি মোড়, চট্টগ্রাম',
    paymentMethod: 'COD',
    total: 1200,
    status: 'Completed',
    date: '14 Sep 2026'
  }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'orders' | 'products'>('orders');
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  
  // New Product Form State
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    category: 'ইলেকট্রনিক্স',
    image: ''
  });

  const [productsList, setProductsList] = useState<Product[]>([
    { id: '1', name: 'ওয়্যারলেস নয়েজ ক্যানসেলিং হেডফোন', price: 4500, category: 'ইলেকট্রনিক্স', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
    { id: '2', name: 'স্মার্ট মেটাল ওয়াচ ৭ম জেনারেশন', price: 3200, category: 'গ্যাজেট', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' }
  ]);

  const updateStatus = (id: string, status: Order['status']) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status } : order));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name || !productForm.price || !productForm.image) return;

    const newProd: Product = {
      id: Date.now().toString(),
      name: productForm.name,
      price: Number(productForm.price),
      category: productForm.category,
      image: productForm.image
    };

    setProductsList([newProd, ...productsList]);
    setProductForm({ name: '', price: '', category: 'ইলেকট্রনিক্স', image: '' });
    alert('প্রোডাক্ট সফলভাবে যোগ করা হয়েছে!');
  };

  const totalRevenue = orders
    .filter(o => o.status === 'Completed')
    .reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">অ্যাডমিন ড্যাশবোর্ড</h1>
            <p className="text-xs text-gray-500">আপনার শপের সকল অর্ডার ও প্রোডাক্ট ম্যানেজমেন্ট</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-gray-200 p-1 rounded-xl gap-1">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'orders' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              অর্ডারসমূহ ({orders.length})
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'products' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              নতুন প্রোডাক্ট যোগ করুন
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold">মোট অর্ডার</p>
              <h3 className="text-xl font-bold text-gray-900">{orders.length} টি</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold">মোট আয় (Completed)</p>
              <h3 className="text-xl font-bold text-gray-900">৳{totalRevenue.toLocaleString('bn-BD')}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold">পেন্ডিং অর্ডার</p>
              <h3 className="text-xl font-bold text-gray-900">
                {orders.filter(o => o.status === 'Pending').length} টি
              </h3>
            </div>
          </div>
        </div>

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-900">অর্ডার তালিকা</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-600">
                <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-800 font-bold uppercase">
                  <tr>
                    <th className="p-4">অর্ডার আইডি</th>
                    <th className="p-4">কাস্টমার</th>
                    <th className="p-4">পেমেন্ট মেথড</th>
                    <th className="p-4">মোট টাকা</th>
                    <th className="p-4">স্ট্যাটাস</th>
                    <th className="p-4">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-bold text-gray-900">{order.id}</td>
                      <td className="p-4">
                        <p className="font-bold text-gray-800">{order.customerName}</p>
                        <p className="text-gray-500">{order.phone}</p>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                          {order.paymentMethod}
                        </span>
                        {order.trxId && (
                          <p className="text-[10px] text-gray-400 mt-1">TrxID: {order.trxId}</p>
                        )}
                      </td>
                      <td className="p-4 font-bold text-gray-900">৳{order.total.toLocaleString('bn-BD')}</td>
                      <td className="p-4">
                        {order.status === 'Pending' && (
                          <span className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-semibold border border-amber-200">
                            Pending
                          </span>
                        )}
                        {order.status === 'Completed' && (
                          <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-semibold border border-green-200">
                            Completed
                          </span>
                        )}
                        {order.status === 'Cancelled' && (
                          <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-semibold border border-red-200">
                            Cancelled
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => updateStatus(order.id, 'Completed')}
                            className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 border border-green-200"
                            title="সম্পন্ন করুন"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateStatus(order.id, 'Cancelled')}
                            className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 border border-red-200"
                            title="বাতিল করুন"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Product Tab */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-4 border-b pb-3">নতুন প্রোডাক্ট যোগ করুন</h2>
              
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">প্রোডাক্টের নাম *</label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: স্মার্ট ওয়াচ"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">মূল্য (৳) *</label>
                    <input
                      type="number"
                      required
                      placeholder="3500"
                      value={productForm.price}
                      onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">ক্যাটাগরি</label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option>ইলেকট্রনিক্স</option>
                      <option>গ্যাজেট</option>
                      <option>ফ্যাশন</option>
                      <option>লাইফস্টাইল</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">ছবির ইউআরএল (Image URL) *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/..."
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  প্রোডাক্ট সেভ করুন
                </button>
              </form>
            </div>

            {/* Product Preview List */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-4 border-b pb-3">বিদ্যমান প্রোডাক্ট তালিকা ({productsList.length})</h2>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {productsList.map((p) => (
                  <div key={p.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-800 line-clamp-1">{p.name}</h4>
                      <p className="text-[10px] text-gray-500">{p.category} • ৳{p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
