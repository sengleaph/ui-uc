'use client';

import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const handleAddToCart = () => {
    window.location.href = "/shopping-cart";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="py-6 px-8 flex justify-between items-center bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-900">NeoTech</div>
        <nav className="flex gap-6 text-gray-700">
          <Link href="/about" className="hover:text-gray-900">
            About Product
          </Link>
          <Link href="/details" className="hover:text-gray-900">
            Details
          </Link>
          <Link href="/specs" className="hover:text-gray-900">
            Specs
          </Link>
        </nav>
        <div className="flex gap-6 items-center">
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
          <Link href="/signup" className="hover:text-gray-900">
            Sign Up
          </Link>
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
            <Link href="/cart" className="text-xl">🛒</Link>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto py-12 px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section - Product Information */}
        <div>
          <nav className="text-sm text-gray-500 mb-4">
            Home &gt; Laptops &gt; MSI WS Series &gt; MSI MPG Trident 3
          </nav>
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">MSI MPG Trident 3</h1>
          <p className="text-sm text-blue-600 mb-4">Be the first to review this product</p>
          <p className="text-gray-600 mb-6">
            MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
            512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse, 3
            Years Warranty, Gaming Desktop
          </p>

          <div className="flex gap-4 items-center mb-6">
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
              <button className="w-8 h-8 bg-gray-300 rounded-full"></button>
              <button className="w-8 h-8 bg-gray-300 rounded-full"></button>
            </div>
            <p className="text-sm text-gray-500">Have a Question? <Link href="/contact" className="text-blue-600">Contact Us</Link></p>
          </div>

          <div className="text-sm text-gray-500 mb-8">SKU D5515AI</div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-lg font-semibold text-red-500">On Sale from $3,299.00</span>
            <select className="border border-gray-300 rounded px-4 py-2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">PayPal</button>
          </div>

          <button className="text-sm text-gray-800 font-bold">+ MORE INFORMATION</button>
        </div>

        {/* Right Section - Product Image */}
        <div className="relative">
          <Image
            src="https://i.pinimg.com/736x/c9/fb/64/c9fb64adf27eba9f2caea391b317abf0.jpg"
            alt="MSI MPG Trident 3"
            width={600}
            height={800}
            className="object-contain"
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button className="w-4 h-4 bg-blue-600 rounded-full"></button>
            <button className="w-4 h-4 bg-gray-300 rounded-full"></button>
            <button className="w-4 h-4 bg-gray-300 rounded-full"></button>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="py-6 bg-white border-t">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>© 2024 NeoTech All Rights Reserved</p>
          <p>Powered by NeoTech Technologies</p>
        </div>
      </footer>
    </div>
  );
}
