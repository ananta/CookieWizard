import { FaTrash } from 'react-icons/fa'
import { useCookies } from "../hooks/useCookies";
import { useMetaInfo } from "../hooks/useMetaInfo";
import { faviconURL } from "../utils/faviconUrl";

export const Home = () => {
  const { loading: isMetaLoading, info } = useMetaInfo();
  const domain = info ? new URL(info.url || '').hostname: '--'
  const { loading: isCookiesLoading, cookies } =  useCookies({domain })
  console.log({info})

  return (
    <div>
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 m-auto mt-4">
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 mb-3 rounded-full shadow-lg"
            src={info?.favIconUrl || faviconURL(info?.url || '')}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {
              domain
            }
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {info?.title}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6 border border-gray-200 w-full " />
        </div>
      </div>
      <div>
        <div id="dropdownSearch" className="z-10 rounded-lg shadow  dark:bg-gray-700">
          <div className="p-3">
            <label className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="input-group-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user"/>
            </div>
          </div>
          <ul className="h-56 min-h-40 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
            {
              cookies?.map(cookie => (
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <div className="flex flex-col w-full line-clamp-3 truncate">
                      <label  className="w-full ml-2 text-sm font-bold text-gray-900 rounded dark:text-gray-300">{cookie.name}</label>
                      <label  className="line-clamp-3 w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{cookie.value}</label>
                    </div>
                    <button type="button" className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium  text-sm px-2 py-1.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                      <FaTrash />
                      block
                    </button>
                  </div>
                </li>

              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
