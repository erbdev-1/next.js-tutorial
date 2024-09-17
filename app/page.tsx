import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h2 className="text-7xl">Home Page</h2>
      <Link
        href="/about"
        className="text-xl text-blue-500 inline-block mt-8 capitalize"
      >
        about page
      </Link>
    </div>
  );
}

export default HomePage;
