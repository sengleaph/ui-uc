import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';

export default function Asus(params) {
    return (
        <div>
          <section className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">MSI Serie</h2>
              <Link href="/" className="text-sm text-blue-600">
                See All Products
              </Link>
            </div>
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex-none w-64">
                    <Card className="p-4">
                      <div className="aspect-square relative mb-4">
                        <Image
                          src="https://i.pinimg.com/236x/2d/8f/46/2d8f4631f79d36f71472f09e54967312.jpg"
                          alt="Gaming PC MSI"
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <h3 className="text-sm font-medium mb-2">Gaming PC MSI</h3>
                      <p className="text-lg font-bold">$499.00</p>
                    </Card>
                  </div>
                ))}
              </div>
          </section>
        </div>
      );
};
