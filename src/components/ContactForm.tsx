export default function ContactForm() {
  return (
    <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 border" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border" />
        <textarea placeholder="Message" className="w-full p-2 mb-4 border"></textarea>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white">Send</button>
      </form>
    </section>
  );
}