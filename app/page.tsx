import CourseStats from "./components/CourseStats";
import HeroShowcase from "./components/hero-section";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <h1>Ecommerce Page</h1>
    <div className="py-8">
      <HeroShowcase />
      <CourseStats />
    </div>
    // </div>
  );
}
