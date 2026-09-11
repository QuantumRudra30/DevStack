import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between">

        {/* Logo */}
        <div>
          <img src={Logo} alt="Dev Stack" className="w-32" />
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-8 text-sm text-gray-600">
          <li className="cursor-pointer text-pink-500">Home</li>

          <li className="cursor-pointer hover:text-pink-500">
            Technologies
          </li>

          <li className="cursor-pointer hover:text-pink-500">
            Projects
          </li>

          <li className="cursor-pointer hover:text-pink-500">
            About
          </li>

          <li className="cursor-pointer hover:text-pink-500">
            Contact
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-5">
          <button className="text-sm text-gray-700 hover:text-pink-500">
            Sign In
          </button>

          <button className="btn rounded-full border-0 bg-pink-600 px-6 text-white hover:bg-pink-700">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;