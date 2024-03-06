import { Database, CopyrightIcon } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'



export default function Info({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

    const toggleInfoVisibility = () => {
        onClose();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={toggleInfoVisibility}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-[#2D3250] p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="-mt-2 text-[#e2e2e2]"
                                    >
                                        <Database size={22} />
                                    </Dialog.Title>
                                    <div className="mt-4">
                                        <p className='italic'>
                                            This website meticulously scans lists of registered domains, identifying names that include specific words, phrases, numbers, or symbols. Discover the perfect domain for your needs with our user-friendly and precise search feature.
                                        </p>
                                        <div className='inline-flex text-[13px] align-middle space-x-1 mt-4 items-center'>
                                            <CopyrightIcon size={14} color='rgb(156 163 175)' />
                                            <p className="text-gray-400 mt-1">
                                                Made by
                                                <a href='https://github.com/fedetomassini' target='_blank' className='ml-1 underline underline-offset-[5px] decoration-dashed hover:underline-offset-[8px] hover:text-red-400 transition-all delay-75 ease-in-out'>@fedetomassini</a>
                                            </p>
                                        </div>

                                    </div>

                                    <div className="float-right -mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-[#7077A1] px-6 py-1.5 text-sm font-medium text-[#e2e2e2] hover:bg-red-400 hover:text-white focus:outline-none"
                                            onClick={toggleInfoVisibility}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
