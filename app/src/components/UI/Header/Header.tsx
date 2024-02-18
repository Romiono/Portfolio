import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    CodeBracketIcon,
    HomeModernIcon,
    CircleStackIcon,
    CommandLineIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import react from '../../../assets/logo.png'

const products = [
    { name: 'Дизайнер', description: 'Быстрый и красиывый дизайн>', href: '#', icon: HomeModernIcon },
    { name: 'Программист', description: 'Качественный и понятный код', href: '#', icon: CommandLineIcon },
    { name: 'Базы данных', description: 'Надежное хранение информации в БД', href: '#', icon: CircleStackIcon },
    { name: 'Фронтенд', description: 'Граматная реализация frontend прилажений', href: '#', icon: CodeBracketIcon },
]

interface IRef {
    func1: () => void;
    func2: () => void;
}

export default function Header({func1, func2}:IRef) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-header lg: mb-32">
            <nav className="mx-auto flex container items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-8" src={react} alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-200">
                            Hallo, I'am
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-main shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-header"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-200">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <p onClick={func1} className="text-sm font-semibold leading-6 text-gray-200 cursor-pointer">
                        Skill-Set
                    </p>
                    <p onClick={func2}  className="text-sm font-semibold leading-6 text-gray-200 cursor-pointer">
                        Connection
                    </p>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-header px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img
                                className="h-8 w-auto"
                                src={react}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3 hover:bg-main rounded-lg">
                                        <>
                                            <Disclosure.Button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-200 hover:bg-main">
                                                Hello, I'am
                                                <ChevronDownIcon
                                                    className={ `${open ? 'rotate-180' : ''} h-5 w-5 flex-none`}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-200"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                </Disclosure>
                                <p
                                    onClick={func1}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-main"
                                >
                                    Skill-Set
                                </p>
                                <p
                                    onClick={func2}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-main"
                                >
                                    Portfolio
                                </p>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
