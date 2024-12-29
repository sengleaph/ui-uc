import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    imageUrl: "https://i.pinimg.com/736x/d6/46/14/d646147952636b44ac290ff5b14a5524.jpg",
    date: "01.09.2020",
    href: "/product/1",
    discription: "Game with confidence thanks to Windows 11 Pro and the raw horsepower of the 2024 Strix G16. Powered by an Intel® Core™ i9 Processor 14900HX and up to an NVIDIA GeForce RTX 4080 Laptop GPU boasting a max TGP of 175W with Dynamic Boost, be ready to dominate the competition in all of the latest games. Backed up with a dedicated MUX Switch and NVIDIA Advanced Optimus, the Strix G16 unlocks the true potential of its hardware. With PCIe Gen4x4 SSD storage and up to 32GB of 5600MHz DDR5 RAM, large game libraries and intense m"
  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/736x/d6/46/14/d646147952636b44ac290ff5b14a5524.jpg",
    date: "01.09.2020",
    href: "/product/2",
    discription: "Game with confidence thanks to Windows 11 Pro and the raw horsepower of the 2024 Strix G16. Powered by an Intel® Core™ i9 Processor 14900HX and up to an NVIDIA GeForce RTX 4080 Laptop GPU boasting a max TGP of 175W with Dynamic Boost, be ready to dominate the competition in all of the latest games. Backed up with a dedicated MUX Switch and NVIDIA Advanced Optimus, the Strix G16 unlocks the true potential of its hardware. With PCIe Gen4x4 SSD storage and up to 32GB of 5600MHz DDR5 RAM, large game libraries and intense m"
  },
  {
    id: 3,
    imageUrl: "https://i.pinimg.com/736x/d6/46/14/d646147952636b44ac290ff5b14a5524.jpg",
    date: "01.09.2020",
    href: "/product/3",
    discription: "Game with confidence thanks to Windows 11 Pro and the raw horsepower of the 2024 Strix G16. Powered by an Intel® Core™ i9 Processor 14900HX and up to an NVIDIA GeForce RTX 4080 Laptop GPU boasting a max TGP of 175W with Dynamic Boost, be ready to dominate the competition in all of the latest games. Backed up with a dedicated MUX Switch and NVIDIA Advanced Optimus, the Strix G16 unlocks the true potential of its hardware. With PCIe Gen4x4 SSD storage and up to 32GB of 5600MHz DDR5 RAM, large game libraries and intense m"
  }
];

function ProductCard({ imageUrl, date, href, discription }) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={discription}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg mb-2">{discription}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
    </Link>
  );
}

export default function FollowPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            date={product.date}
            href={product.href}
            discription={product.discription}
          />
        ))}
      </div>
    </section>
  );
}