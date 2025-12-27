import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex items-center space-x-4">
        <Image
          className="dark:invert"
          src="/q.svg"
          alt="Logo"
          width={500}
          height={100}
          priority
        />
        <Image
          src="/icon.svg"
          alt="Code Icon"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to Code Collaboration
        </h1>
      </div>
    </main>
  );
}