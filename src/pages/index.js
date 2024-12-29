import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NewProducts from "@/components/newProduct";
import HotProduct from "@/components/HotProduct";
import Msi from "@/components/Msi";
import Asus from "@/components/Asus";
import LogoBrand from "@/components/LogoBrand";
import FollowPage from "@/components/FolowPage";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <NewProducts />
      <HotProduct />
      <Msi />
      <Asus />
      <LogoBrand />
      <FollowPage />
      <Footer />
    </>
  );
}