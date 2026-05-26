import { logo } from '../../../assets';

import Button from '../../common/Button/Button';

function Navbar() {

  return (
    <nav
      className="
        w-full
        px-8
        py-5
        flex
        items-center
        justify-between
        bg-[#111827]
        border-b
        border-gray-800
      "
    >

      {/* Logo */}

      <div className="flex items-center gap-3">

        <img
          src={logo}
          alt="DevSphere Logo"
          className="w-10 h-10"
        />

        <h1
          className="
            text-2xl
            font-bold
            text-[#b9ff66]
          "
        >
          DevSphere AI
        </h1>

      </div>

      {/* Nav Links */}

      <div className="hidden md:flex items-center gap-8 text-white">

        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>

      </div>

      {/* CTA */}

      <Button>
        Get Started
      </Button>

    </nav>
  );
}

export default Navbar;