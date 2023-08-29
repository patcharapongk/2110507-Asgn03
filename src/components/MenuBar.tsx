import Link from "next/link";
const MenuBar = () => {
  return (
    <nav>
      <div className="flex justify-end items-center gap-4 py-2 px-4">
        <Link
          href="/booking"
          className="text-lg hover:underline hover:border-blue-500"
        >
          การจอง
        </Link>
        <Link href="/" className="text-2xl font-bold">
          วัคชนะ
        </Link>
      </div>
    </nav>
  );
};

export default MenuBar;
