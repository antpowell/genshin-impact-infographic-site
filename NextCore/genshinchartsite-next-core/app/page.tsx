import { HomeNavBar } from './components/HomeNavBar';

export default function Home() {
  return (
    <main className="bg-slate-900 flex-col h-screen flex p-24 justify-between items-center">
      <section className="hero">
        <h1 className="">Genshin Quick Reference | Next Core</h1>
        <p className="description">
          A quick infographic reference for Genshin Impact that can be updated on the fly.😁
        </p>
      </section>
      <HomeNavBar />
    </main>
  );
}
