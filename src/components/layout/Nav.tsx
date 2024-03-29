import { useState } from "react";
import {
  RxHamburgerMenu,
  RxCross1,
  RxMixerHorizontal,
  RxArrowLeft
} from "react-icons/rx";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation
} from "react-router-dom";
import { HOME_ROUTE } from "../../App";

const Nav = () => {
  const [isNavEnabled, setNavEnabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log({ location });

  const handleToggleNav = () => {
    setNavEnabled(!isNavEnabled);
  };

  return (
    <nav
      className="flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-gray-200
  "
    >
      <div>
        <a href="#">
          <svg
            width="45"
            height="45"
            viewBox="0 0 365 448"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="134" y="102" width="98" height="241" fill="#D9D9D9" />
            <path d="M134 102H232V343H134V102Z" fill="#A259FF" />
            <rect
              x="153"
              y="250"
              width="73"
              height="192"
              rx="36.5"
              transform="rotate(-90 153 250)"
              fill="#1ABCFE"
            />
            <path
              d="M365 110.552C365 171.608 211.163 150.888 290.322 53.2839C268.223 53.2839 256.093 90.1308 232.073 106.07C186.458 136.338 133 150.547 133 110.552C133 49.4956 184.935 0 249 0C313.065 0 365 49.4956 365 110.552Z"
              fill="#F24D1F"
            />
            <path
              d="M0 337.448C0 276.392 153.837 297.112 74.6781 394.716C96.7769 394.716 108.907 357.869 132.927 341.93C178.542 311.662 232 297.453 232 337.448C232 398.504 180.065 448 116 448C51.935 448 0 398.504 0 337.448Z"
              fill="#0ECF82"
            />
          </svg>
        </a>
      </div>
      <div className="flex flex-row">
        <div className="cursor-pointer" onClick={handleToggleNav}>
          {isNavEnabled ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </div>
      {isNavEnabled && (
        <div className="w-full md:flex md:items-center md:w-auto " id="menu">
          <ul
            className="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                About
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
