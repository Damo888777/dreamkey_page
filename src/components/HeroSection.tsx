export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-lightText mb-6 leading-tight">
          What is the most valuable asset in life?{" "}
          <span className="text-moonlight">Time.</span>
          <br />
          What is more valuable than time?{" "}
          <span className="text-moonlight">Time with endless opportunities.</span>
        </h1>
        <p className="text-2xl md:text-3xl font-greatVibes text-lightText/90 mb-12 italic">
          Start your dream life today
        </p>
        <button className="bg-gradient-to-r from-lavender to-moonlight text-darkText text-lg px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          Start Your Dream Life
        </button>
      </div>
    </section>
  );
};