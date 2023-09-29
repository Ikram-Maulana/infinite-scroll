import blenderLogo from "@/assets/blender-logo.svg";
import excelLogo from "@/assets/excel-logo.svg";
import figmaLogo from "@/assets/figma-logo.svg";
import flutterLogo from "@/assets/flutter-logo.svg";
import golangLogo from "@/assets/golang-logo.svg";
import kotlinLogo from "@/assets/kotlin-logo.svg";
import laravelLogo from "@/assets/laravel-logo.svg";
import pythonLogo from "@/assets/python-logo.svg";
import reactLogo from "@/assets/react-logo.svg";
import vueLogo from "@/assets/vue-logo.svg";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@mantine/hooks";
import { FC } from "react";

const tools1 = [
  {
    name: "Figma",
    link: "https://figma.com",
    logo: figmaLogo,
    description: "UI/UX Design",
  },
  {
    name: "Flutter",
    link: "https://flutter.dev",
    logo: flutterLogo,
    description: "Multiplatform Development",
  },
  {
    name: "Laravel",
    link: "https://laravel.com",
    logo: laravelLogo,
    description: "Backend Development",
  },
  {
    name: "Vue",
    link: "https://vuejs.org",
    logo: vueLogo,
    description: "Frontend Development",
  },
  {
    name: "Python",
    link: "https://python.org",
    logo: pythonLogo,
    description: "Data Science",
  },
];

const tools2 = [
  {
    name: "Blender",
    link: "https://blender.org",
    logo: blenderLogo,
    description: "3D Modeling",
  },
  {
    name: "Excel",
    link: "https://microsoft.com/excel",
    logo: excelLogo,
    description: "Data Analysis",
  },
  {
    name: "Golang",
    link: "https://golang.org",
    logo: golangLogo,
    description: "Backend Development",
  },
  {
    name: "Kotlin",
    link: "https://kotlinlang.org",
    logo: kotlinLogo,
    description: "Android Development",
  },
  {
    name: "React",
    link: "https://reactjs.org",
    logo: reactLogo,
    description: "Frontend Development",
  },
];

const Homepage: FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="container">
      <section className="flex flex-col justify-center items-center min-h-screen">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-lg font-semibold text-[#00d87f] text-center">
            Mastering Freelancer Tools
          </p>
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors text-center text-zinc-900">
            Artikel Menarik dengan Berbagai Topik
          </h2>
        </div>

        {/* Section Content */}
        <div
          className={cn(
            "container flex flex-col gap-8",
            !reduceMotion &&
              "overflow-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] scroller"
          )}
        >
          <div
            id="tools-1"
            className={cn(
              "flex gap-4 flex-wrap justify-center",
              !reduceMotion && "flex-nowrap animate-scroll-right"
            )}
          >
            {tools1.map((tool, index) => (
              <a
                href={tool.link}
                key={`tools1-${index}`}
                className={cn(
                  "rounded-xl border bg-card text-card-foreground shadow p-6 w-fit",
                  !reduceMotion && "w-max min-w-[288px]"
                )}
              >
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} Logo`}
                    className="flex-grow max-h-[70px] max-w-[70px]"
                  />

                  <div className="flex flex-col">
                    <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-zinc-900">
                      {tool.name}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
            {!reduceMotion &&
              tools1.map((tool, index) => (
                <a
                  href={tool.link}
                  key={`tools1-hidden-${index}`}
                  className={cn(
                    "rounded-xl border bg-card text-card-foreground shadow p-6 w-fit",
                    !reduceMotion && "w-max min-w-[288px]"
                  )}
                  aria-hidden={true}
                >
                  <div className="flex items-center gap-4 w-full">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} Logo`}
                      className="flex-grow max-h-[70px] max-w-[70px]"
                    />

                    <div className="flex flex-col">
                      <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-zinc-900">
                        {tool.name}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
          </div>

          <div
            id="tools2"
            className={cn(
              "flex gap-4 flex-wrap justify-center",
              !reduceMotion && "flex-nowrap animate-scroll-left"
            )}
          >
            {tools2.map((tool, index) => (
              <a
                href={tool.link}
                key={`tools2-${index}`}
                className={cn(
                  "rounded-xl border bg-card text-card-foreground shadow p-6 w-fit",
                  !reduceMotion && "w-max min-w-[288px]"
                )}
              >
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} Logo`}
                    className="flex-grow max-h-[70px] max-w-[70px]"
                  />

                  <div className="flex flex-col">
                    <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-zinc-900">
                      {tool.name}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
            {!reduceMotion &&
              tools2.map((tool, index) => (
                <a
                  href={tool.link}
                  key={`tools2-hidden-${index}`}
                  className={cn(
                    "rounded-xl border bg-card text-card-foreground shadow p-6 w-fit",
                    !reduceMotion && "w-max min-w-[288px]"
                  )}
                  aria-hidden={true}
                >
                  <div className="flex items-center gap-4 w-full">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} Logo`}
                      className="flex-grow max-h-[70px] max-w-[70px]"
                    />

                    <div className="flex flex-col">
                      <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-zinc-900">
                        {tool.name}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
