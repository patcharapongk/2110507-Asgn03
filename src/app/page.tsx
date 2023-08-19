import Banner from "@/components/Banner";
import { notoSansThai } from "../utils/fonts";
import InfoCard from "@/components/InfoCard";
export default function Home() {
  return (
    <main className={notoSansThai.className}>
      <Banner />
      <InfoCard />
    </main>
  );
}
