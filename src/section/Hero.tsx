export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center px-6 md:px-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/heropic2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Build Digital Products <br />
          <span className="text-indigo-400">That Scale</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          We transform ideas into high-performance web and mobile applications
          using modern technologies and scalable architectures.
        </p>
      </div>
    </section>
  );
}
