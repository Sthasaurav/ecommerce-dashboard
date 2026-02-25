import Link from "next/link";
import ReactLogo from "../../../assets/react-logo.png";
import Like from "../../../assets/like1.png";
import VueJs from "../../../assets/vuejs.png";
import StatusDesigner from "../../../assets/status-designer.png";
export default function CourseStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
      {/* Heading */}
      <div className="mb-6">
        <p className="text-base text-gray-500 sm:text-xl">
          Explore our classes and master trending skills!
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Dive Into{" "}
          <span className="text-[#1ea077]">What’s Hot Right Now!</span> 🔥
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Big Card */}
        <div className="relative flex min-h-[260px] flex-col items-center justify-between rounded-2xl bg-[#c33241] p-6 text-white shadow-lg sm:min-h-[120%]">
          {/* Top row */}
          <div className="flex flex-2 flex-col justify-between">
            <Link
              href="/courses"
              className="absolute top-4 right-4 text-sm font-medium text-[#f9ebec] sm:text-xl"
            >
              View all Courses →
            </Link>

            <div className="mt-24 flex gap-8 text-xl">
              <img
                src={ReactLogo.src}
                alt="react logo"
                className="h-12 w-12 -rotate-45 rounded-xl sm:h-24 sm:w-24"
              />
              <img
                src={Like.src}
                alt="react logo"
                className="h-12 w-12 rotate-12 rounded-xl sm:h-24 sm:w-24"
              />{" "}
              <img
                src={VueJs.src}
                alt="react logo"
                className="h-12 w-12 rounded-xl sm:h-24 sm:w-24"
              />{" "}
              <img
                src={StatusDesigner.src}
                alt="react logo"
                className="h-12 w-12 rounded-xl sm:h-24 sm:w-24"
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-1 items-end gap-4">
            <span className="text-7xl font-bold text-[#f9ebec] sm:text-7xl lg:text-9xl">
              23<sup>+</sup>
            </span>
            <span className="text-lg leading-tight font-bold text-[#f9ebec] opacity-90 sm:text-2xl">
              All Courses <br />
              <span className="text-sm font-medium sm:text-base">
                courses you’re powering <br /> through right now.
              </span>
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex min-h-[220px] flex-row-reverse items-center justify-between gap-4 rounded-2xl bg-[#f9ebec] p-4 px-8 text-[#c33241] shadow-sm sm:min-h-[120%] sm:flex-col sm:p-6">
            <div className="flex flex-2 flex-col justify-center sm:-rotate-90">
              <span className="mb-2 block text-xl font-bold uppercase sm:text-3xl">
                Upcoming Courses
              </span>
              <p className="text-xs font-medium sm:text-sm">
                exciting new courses <br /> waiting to boost your skills
              </p>
            </div>

            <span className="text-7xl font-bold sm:text-7xl lg:text-9xl">
              5<sup>+</sup>
            </span>
          </div>

          {/* Card 3 */}
          <div className="flex min-h-[220px] flex-row-reverse items-center justify-between gap-4 rounded-2xl bg-[#f9ebec] p-4 px-8 text-[#c33241] shadow-sm sm:min-h-[120%] sm:flex-col sm:p-6">
            <div className="flex flex-2 flex-col justify-center sm:-rotate-90">
              <span className="mb-2 block text-xl font-bold uppercase sm:text-3xl">
                Ongoing Courses
              </span>
              <p className="text-xs font-medium sm:text-sm">
                currently happening – don&apos;t <br /> miss out on the action!
              </p>
            </div>

            <span className="text-7xl font-bold sm:text-7xl lg:text-9xl">
              10<sup>+</sup>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
