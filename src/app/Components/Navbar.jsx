import Link from "next/link";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Home() {
  const NavLinks = () => {
    return (
      <>
        <Link href="/Home">
          <li>Home</li>
        </Link>
        <Link href="/Shop">
          <li>Shop</li>
        </Link>
        <Link href="/Blog">
          <li>Blog</li>
        </Link>
        <Link href="/About">
          <li>About</li>
        </Link>
        <Link href="/Contact">
          <li>Contact</li>
        </Link>
        <span>|</span>
        <button>
          <ShoppingCartOutlinedIcon />
        </button>
        <span className="bg-[#]">
          <Link href="/Login">
            <li>Login</li>
          </Link>
        </span>
      </>
    );
  };

  return (
    <div>
      <div className="dd bg-slate-100 py-9">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div>BRUNO</div>
          {/* <div className="">
            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-2 w-96 rounded-full"
            />
          </div> */}
          <ul className="flex space-x-12">
            <NavLinks />
          </ul>
        </div>
      </div>
    </div>
  );
}
