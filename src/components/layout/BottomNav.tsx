import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

import { HOME_ROUTE } from "../../App";

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = !location.pathname.includes("settings");
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
        <button
          type="button"
          onClick={() => navigate(HOME_ROUTE)}
          className={clsx(
            "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
            isHome && "bg-gray-50"
          )}
        >
          <svg
            className={clsx(
              "w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500",
              isHome ? "text-blue-600" : "text-gray-500 dark:text-gray-400"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span
            className={clsx(
              "text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500",
              isHome ? "text-blue-600" : "text-gray-500 dark:text-gray-400"
            )}
          >
            Home
          </span>
        </button>
        <button
          onClick={() => navigate("settings")}
          type="button"
          className={clsx(
            "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
            !isHome && "bg-gray-50"
          )}
        >
          <svg
            className={clsx(
              "w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500",
              !isHome ? "text-blue-600" : "text-gray-500 dark:text-gray-400 "
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
          <span
            className={clsx(
              "text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500",
              !isHome ? "text-blue-600" : "text-gray-500 dark:text-gray-400 "
            )}
          >
            Settings
          </span>
        </button>
      </div>
    </div>
  );
};
