import Banner from "@/components/Banner/Banner";
import { notoSansThai } from "../utils/fonts";
import PromoteCard from "@/components/PromoteCard/PromoteCard";
export default function Home() {
  return (
    <main className={notoSansThai.className}>
      <Banner />
      <PromoteCard />
    </main>
  );
}
