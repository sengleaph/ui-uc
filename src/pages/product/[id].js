import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product data based on ID
  const product = { id, name: "Sample Product", price: "$100", description: "Product details here" };

  return (
    <>
      <Header />
      <main className="container">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </main>
      <Footer />
    </>
  );
}
