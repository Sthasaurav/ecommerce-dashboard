import Link from "next/link";
import ReactLogo from "../../../assets/react-logo.png";
import Like from "../../../assets/like1.png";
import VueJs from "../../../assets/vuejs.png";
import StatusDesigner from "../../../assets/status-designer.png";
export default function CourseStats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      {/* Heading */}
      <div className="mb-6">
        <p className="text-xl text-gray-500">
          Explore our classes and master trending skills!
        </p>
        <h2 className="text-3xl font-semibold">
          Dive Into{" "}
          <span className="text-[#1ea077]">What’s Hot Right Now!</span> 🔥
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Big Card */}
        <div className="relative flex h-[120%] flex-col items-center justify-between rounded-2xl bg-[#c33241] p-6 text-white shadow-lg">
          {/* Top row */}
          <div className="flex flex-2 flex-col justify-between">
            <Link
              href="/courses"
              className="absolute top-1 right-7 py-8 text-xl font-medium text-[#f9ebec]"
            >
              View all Courses →
            </Link>

            <div className="mt-24 flex gap-8 text-xl">
              <img
                src={ReactLogo.src}
                alt="react logo"
                className="h-24 w-24 -rotate-45 rounded-xl"
              />
              <img
                src={Like.src}
                alt="react logo"
                className="h-24 w-24 rotate-12 rounded-xl"
              />{" "}
              <img
                src={VueJs.src}
                alt="react logo"
                className="h-24 w-24 rounded-xl"
              />{" "}
              <img
                src={StatusDesigner.src}
                alt="react logo"
                className="h-24 w-24 rounded-xl"
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-1 items-end gap-4">
            <span className="text-9xl font-bold text-[#f9ebec]">
              23<sup>+</sup>
            </span>
            <span className="text-3xl leading-tight font-bold text-[#f9ebec] opacity-90">
              All Courses <br />
              <span className="text-lg leading-[1.2] font-medium">
                courses you’re powering <br /> through right now.
              </span>
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex h-[120%] flex-col items-center justify-center rounded-2xl bg-[#f9ebec] p-6 text-[#c33241] shadow-sm">
            <div className="flex flex-2 -rotate-90 flex-col justify-center">
              <span className="mb-2 text-3xl font-bold tracking-wide uppercase">
                Upcoming Courses
              </span>

              <p className="mt-2 text-sm font-medium text-[#c33241]">
                exciting new courses
                <br />
                waiting to boost your skills{" "}
              </p>
            </div>

            <div className="mt-24 flex flex-1 items-end gap-2">
              <span className="text-9xl font-bold">
                5<sup>+</sup>
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex h-[120%] flex-col items-center justify-center rounded-2xl bg-[#f9ebec] p-6 text-[#c33241] shadow-sm">
            <div className="flex flex-2 flex-col justify-center sm:-rotate-90">
              <span className="mb-2 text-3xl font-bold tracking-wide uppercase">
                Ongoing Courses
              </span>

              <p className="mt-2 text-sm font-medium text-[#c33241]">
                currently happening - don&apos;t
                <br />
                miss out on the action!
              </p>
            </div>

            <div className="mt-24 flex flex-1 items-end gap-2">
              <span className="text-9xl font-bold">
                10<sup>+</sup>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
