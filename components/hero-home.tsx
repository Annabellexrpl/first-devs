export default function HeroHome() {
  return (
    <section>
      <div className="my-auto mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-16 md:py-20">
          {/* Section header */}
            <div className="nes-container is-centered is-rounded is-dark bg-opacity-65">
              <article className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                <p>Welcome to First Devs.</p> 
                    
                <p>We will empower devs on the XRP Ledger.</p>
        
                <p>We are just getting started.</p>
        
                <a href="https://x.com/firstdevs"><p>Stay Tuned...</p></a>
              </article>

          </div>
        </div>
      </div>
    </section>
  );
}
