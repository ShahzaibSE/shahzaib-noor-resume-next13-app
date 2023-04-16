"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Disclosure,
  Menu,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  // { name: "About", href: "#", current: true },
  { name: "Resume", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();
  return (
    <Disclosure
      as="nav"
      className="border-gray-200 py-2.5 dark:bg-neutral-800 sm:px-0 md:px-4 lg:px-6"
    >
      {({ open }) => (
        <>
          <div className="container flex flex-shrink items-center p-6">
            <div className="container flex flex-1 flex-shrink items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 md:h-20 md:w-20 lg:h-20 lg:w-20">
                <h1 className="font-sans font-bold text-white sm:text-sm md:text-2xl lg:text-3xl">
                  S
                </h1>
              </div>
              <div className="flex flex-grow px-2">
                <Link href="/">
                  <h1 className="sm:text-sm; font-sans font-bold text-white md:text-2xl lg:text-3xl">
                    Shahzaib Noor
                  </h1>
                </Link>
              </div>
            </div>
            <div className="flex items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">
                  Open main menu
                </span>
                {open ? (
                  <XMarkIcon
                    className="block h-6 w-6"
                    aria-hidden="true"
                  />
                ) : (
                  <Bars3Icon
                    className="block h-6 w-6"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
            <div className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto">
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <Link
                    href="/resume"
                    className="bg-primary-700 lg:text-primary-700 block rounded py-2 pr-4 pl-3 text-white dark:text-white lg:bg-transparent lg:p-0"
                    aria-current="page"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-white hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-white hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={
                    item.current
                      ? "page"
                      : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// export default function Header() {
//   return (
//     <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
//       <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
//         <a
//           href="https://flowbite.com"
//           className="flex items-center"
//         >
//           <Image
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="mr-3 h-6 sm:h-9"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//             Shahzaib Noor
//           </span>
//         </a>
//         <div className="flex items-center lg:order-2">
//           <a
//             href="#"
//             className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
//           >
//             Log in
//           </a>
//           <a
//             href="#"
//             className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
//           >
//             Get started
//           </a>
//           <button
//             data-collapse-toggle="mobile-menu-2"
//             type="button"
//             className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
//             aria-controls="mobile-menu-2"
//             aria-expanded="false"
//           >
//             <span className="sr-only">
//               Open main menu
//             </span>
//             <svg
//               className="h-6 w-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//             <svg
//               className="hidden h-6 w-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div
//           className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
//           id="mobile-menu-2"
//         >
//           <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
//             <li>
//               <a
//                 href="#"
//                 className="bg-primary-700 lg:text-primary-700 block rounded py-2 pr-4 pl-3 text-white dark:text-white lg:bg-transparent lg:p-0"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
//               >
//                 Company
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
//               >
//                 Marketplace
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
//               >
//                 Features
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
//               >
//                 Team
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default function Header() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="block h-8 w-auto lg:hidden"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                   <img
//                     className="hidden h-8 w-auto lg:block"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'rounded-md px-3 py-2 text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }
