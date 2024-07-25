import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap text-center   w-screen bg-bg h-screen overflow-y-hidden">
      <div className=" w-screen h-auto flex  flex-col mt-5 items-center text-gray-300 text-2xl px-5 pt-8">
        <p className="text-5xl text-[#ffffff] mb-2 bg-gradient-to-[#FFC107]">
          Grammr
        </p>{" "}
        Your AI-powered tool for perfecting your writing.
        <p className="text-[18px] text-center">
          Welcome to Grammr! Submit your text, receive detailed grammar and
          style suggestions, and improve your writing skills.
        </p>
        <p className="text-[18px] text-center">
          Explore our features to enhance the clarity and impact
          of your writing.
        </p>
        <Link
          href={"/ask"}
          className=" bg-blue-700 text-[12px] px-2 w-24 rounded mt-4 text-md font-bold"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
