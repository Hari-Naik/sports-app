import Collections from "@/components/collections/Collections";
import SportsSection from "@/components/sports/SportsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF] dark:bg-[#292B32] py-10">
      {/* sports */}
      <SportsSection />

      {/* collections */}
      <Collections />
    </main>
  );
}
