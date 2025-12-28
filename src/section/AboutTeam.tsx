export default function AboutTeam() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600">Dev Flow</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A passionate team building scalable digital experiences from idea to launch.
          </p>
          <div className="mt-6 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-white">
              Dev Flow
            </span>{" "}
            is a startup founded by a team of Computer Engineering graduates from ITI,
            specialized in delivering end-to-end digital solutions.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            We provide <span className="font-semibold text-blue-600">Full-Stack Development</span> services
            starting from ideation and planning, through design and implementation,
            all the way to deployment and ongoing support.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            At Dev Flow, we see software development as a complete journey —
            not just writing code, but building reliable, scalable, and impactful products.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            We work as one team, continuously improve our skills, and leverage
            modern technologies to turn ambitious ideas into real-world solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
