'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-white-100">
        {/* Login Form */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <Card className="w-full max-w-md bg-white shadow-md rounded-lg">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-normal text-center">
                Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Email or Phone Number"
                    className="bg-gray-50 focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="bg-gray-50 focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md"
                >
                  Login
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    // Add Google login logic here
                  }}
                >
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Login with Google
                </Button>
                <div className="text-center text-sm">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/images/NeoTech.png" class="h-8" alt="Flowbite Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>
    </>
  );
}
