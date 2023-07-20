import {Hero} from "@/components/Hero";
import dynamic from 'next/dynamic';
const DetailSection = dynamic(() => import('@/components/DetailSection/DetailSection'),{ssr:false})
export default function Home() {
  return (
    <>
      <Hero />
      <DetailSection />
    </>
  );
}
