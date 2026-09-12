import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import LogoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        {/* Brand */}
        <div>
          <img src={LogoText} alt="Dev Stack" className="h-7 w-auto" />

          <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-xs">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex items-center gap-4 mt-5 text-sm text-gray-600">
            <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <FaGithub size={14} /> GitHub
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <FaTwitter size={14} /> Twitter
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <FaLinkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 tracking-wide">PRODUCT</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 tracking-wide">COMPANY</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 tracking-wide">LEGAL</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;