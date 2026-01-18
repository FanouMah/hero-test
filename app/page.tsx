import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex-1 bg-[color:var(--color-background-strong)]" style={{paddingTop: "calc(5rem + env(safe-area-inset-top))"}}>
      <Hero />
    </main>
  );
}
