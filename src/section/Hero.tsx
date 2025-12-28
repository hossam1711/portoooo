import TextType from '../components/TextType';

export default function Hero() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-start justify-center py-64 px-16">
      <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)' }}></div>
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-start gap-6 text-left text-5xl font-bold text-white font-sans">
        <TextType
          text={["Welcome to Dev Flow — where ideas become scalable digital solutions."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </main>
  );
}
