import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { paths } from '../routes/paths';
import "../css/nav.css"

const hiddenLinks = ['admin'];

const Nav = () => {

  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="px-4 md:p-4">
            <div className="relative flex flex-row-reverse h-20">
              <div className="flex items-center md:hidden">
                <Disclosure.Button>
                  <span className="-inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-12 w-12" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-12 w-12" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-center items-center md:justify-between md:px-8">
                <div className="flex items-center w-full lg:w-auto">
                  <div className=" block p-4 h-20 w-full w-60">
                    <Link to="/">
                      <h2 className='navName'>Arq. Alicia Martin</h2>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex gap-20 md:gap-12 lg:gap-20">
                    <Link to="https://www.instagram.com/arqabmartin" target="_blank">
                      <h2 className='instagram'>Instagram</h2>
                    </Link>
                    {Object.keys(paths).map((key) => (
                      !hiddenLinks.includes(key) ? (
                        <Link
                          key={key}
                          to={paths[key]}
                          className={
                            location.pathname === paths[key]
                              ? key === 'contacto'
                                ? 'navContactActive'
                                : 'navActive'
                              : key === 'contacto'
                                ? 'navContact'
                                : 'navInactive'
                          }
                        >
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Link>
                      ) : null
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="https://www.instagram.com/arqabmartin" target="_blank">
                <h2 className='instagram'>Instagram</h2>
              </Link>
              {Object.keys(paths).map((key) => (
                !hiddenLinks.includes(key) ? (
                  <Link
                    key={key}
                    to={paths[key]}
                    className={
                      location.pathname === paths[key]
                        ? key === 'contacto'
                          ? 'navContactActive'
                          : 'navActive'
                        : key === 'contacto'
                          ? 'navContact'
                          : 'navInactive'
                    }
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                ) : null
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;