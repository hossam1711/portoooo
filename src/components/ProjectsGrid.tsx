export default function ProjectsGrid() {
  return (
    <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded shadow">Project 1</div>
        <div className="bg-white p-4 rounded shadow">Project 2</div>
        <div className="bg-white p-4 rounded shadow">Project 3</div>
      </div>
    </section>
  );
}