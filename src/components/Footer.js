import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Computer Shop</h3>
            <p className="text-sm text-muted-foreground">New Generation Tech</p>
            <div className="mt-4 space-y-2">
              <p className="text-sm">📞 123456789</p>
              <p className="text-sm">✉️ info@neotech.com</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/gaming" className="block text-sm">Gaming</Link>
              <Link href="/pc-hardware" className="block text-sm">PC Hardware</Link>
              <Link href="/peripherals" className="block text-sm">Peripherals</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Address</h3>
            <p className="text-sm text-muted-foreground">
              123 Tech Street, Digital City, 12345
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 UC Shop All Right Reserved
        </div>
      </div>
    </footer>
    );
  }