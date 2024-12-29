import Image from 'next/image';

export default function LogoBrand() {
  const brands = [
    { id: 1, name: 'MSI', image: '/images/msi.png' },
    { id: 2, name: 'ASUS', image: '/images/frame 34.png' },
    { id: 3, name: 'DELL', image: '/images/rezer.png' },
    { id: 4, name: 'ACER', image: '/images/ph.png' },
    { id: 5, name: 'LENOVO', image: '/images/adata.png' },
    { id: 6, name: 'HP', image: '/images/rokec.png' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="w-32 h-20 relative">
              <Image
                src={brand.image}
                alt={`${brand.name} logo`}
                width={128}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}