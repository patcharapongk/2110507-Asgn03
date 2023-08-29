import Banner from "@/components/Banner";
import { notoSansThai } from "../utils/fonts";
import HospitalInfo from "@/components/HospitalInfo";
export default function Home() {
  return (
    <main className={notoSansThai.className}>
      <Banner />
      <HospitalInfo />
    </main>
  );
}
