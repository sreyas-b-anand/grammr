import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap text-center   w-screen bg-bg min-h-screen max-h-screen overflow-y-hidden">
      <div className=" w-screen  flex justify-center  flex-col items-center text-gray-300 text-2xl gap-5">
        <p className="text-[80px] font-bold text-[#ffffff]  bg-gradient-to-[#FFC107]">
          Grammr
        </p>{" "}
        Your AI-powered tool for perfecting your writing.
        
        
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
