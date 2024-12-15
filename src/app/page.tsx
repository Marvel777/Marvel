import Image from "next/image";
import { TbProgressHelp } from "react-icons/tb";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left"> Welcome to My Portfolio!</h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Hello, and thank you for visiting!</h2>
        <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left"
        >
          My name is "Marvel Maher", and I’m a passionate <span className="text-[#ff00ff]">Frontend Developer</span> . My portfolio website is currently under development as I work to craft a visually stunning and functional showcase of my skills and projects.
        </h3>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h4 className="text-base mb-1 sm:text-base font-bold text-center sm:text-left">
            In the meantime, please feel free to contact me directly:
          </h4>
          <li className="mb-2">
            Email: { " " }
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              mahermarvel@gmail.com
            </code>

          </li>
          <li className="mb-2">
            Phone: { " " }
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              +02 01200409971
            </code>

          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.linkedin.com/in/marvel-maher-9b2213245/"
            target="_blank"
            rel="noopener noreferrer"
          >

            Linked In
          </a>
          <a
            className="rounded-lg gap-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://drive.google.com/uc?export=download&id=1Lp4QXv_2dIUgqOPK-uqBcDOIedg89R48"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={ 16 }
              height={ 16 }
            />
            Resume
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbProgressHelp className="text-3xl" />

          Thank you for your interest, and I look forward to connecting with you soon! →
        </a>
      </footer>
    </div>
  );
}
