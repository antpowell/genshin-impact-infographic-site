import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-slate-900 flex-col h-screen'>
      <section className="hero">
        <h1 className="">Genshin Quick Reference | Next Core</h1>
        <p className="description">A quick infographic reference for Genshin Impact that can be updated on the fly.😁</p>
      </section>
      <nav className="nav">
        <ul>
          <li><a href="#weekly">Weekly</a></li>
          <li><a href="#normal">Normal</a></li>
          <li><a href="#common">Common</a></li>
          <li><a href="#talent">Talent</a></li>
          <li><a href="#local">Local</a></li>
        </ul>
      </nav>
    </main>
  )
}
