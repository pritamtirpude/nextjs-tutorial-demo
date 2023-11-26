import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Next JS Tutorials</h1>
      <Link href="/client">
        <button className="btn btn-neutral btn-outline mt-5 p-4">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
