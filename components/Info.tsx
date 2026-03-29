"use client";

import { Database, GitCompare, FileUser, Mail, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export default function Info({ isOpen, onClose }: Props) {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={onClose}>
				{/* Overlay */}
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-200"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/60 backdrop-blur-md" />
				</Transition.Child>

				{/* Container */}
				<div className="fixed inset-0 flex items-center justify-center p-4">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-200"
						enterFrom="opacity-0 scale-95 translate-y-2"
						enterTo="opacity-100 scale-100 translate-y-0"
						leave="ease-in duration-150"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95 translate-y-2"
					>
						<Dialog.Panel
							className="
							w-full max-w-md rounded-xl
							bg-gradient-to-b from-[#2D3250] to-[#252a45]
							border border-[#424769]/70
							shadow-2xl
							p-6
						"
						>
							{/* Header */}
							<div className="flex items-start justify-between mb-5">
								<div className="flex items-center gap-3">
									<div className="p-2 rounded-lg bg-[#7077A1]/20">
										<Database size={20} className="text-[#AAB2FF]" />
									</div>

									<div>
										<Dialog.Title className="text-lg font-semibold text-gray-100">
											DomainsDB
										</Dialog.Title>
										<p className="text-xs text-gray-400">
											Domain intelligence search
										</p>
									</div>
								</div>

								<button
									type="button"
									onClick={onClose}
									className="
										p-2 rounded-md text-gray-400
										hover:bg-white/5 hover:text-white
										transition
									"
								>
									<X size={18} />
								</button>
							</div>

							{/* Content */}
							<div className="space-y-4 text-sm leading-relaxed text-gray-300">
								<p>
									Search across large-scale domain datasets to find names
									containing specific keywords, patterns, or symbols.
								</p>

								<p className="text-gray-400">
									The dataset includes{" "}
									<span className="text-gray-200 font-medium">
										260M+ domains
									</span>{" "}
									and{" "}
									<span className="text-gray-200 font-medium">1,000+ TLDs</span>
									, including modern gTLD extensions.
								</p>
							</div>

							{/* Divider */}
							<div className="my-5 h-px bg-gradient-to-r from-transparent via-[#424769] to-transparent" />

							{/* Social */}
							<div className="flex items-center justify-between">
								<p className="text-xs text-gray-500">Created by Fede</p>

								<div className="flex items-center gap-2">
									<a
										href="https://github.com/fedetomassini"
										target="_blank"
										rel="noopener noreferrer"
										className="
											p-2 rounded-md
											text-gray-400
											hover:text-white hover:bg-white/5
											transition
										"
									>
										<GitCompare size={18} />
									</a>

									<a
										href="https://www.linkedin.com/in/fedetomassini"
										target="_blank"
										rel="noopener noreferrer"
										className="
											p-2 rounded-md
											text-gray-400
											hover:text-white hover:bg-white/5
											transition
										"
									>
										<FileUser size={18} />
									</a>

									<a
										href="mailto:fedetomassini.dev@gmail.com"
										className="
											p-2 rounded-md
											text-gray-400
											hover:text-white hover:bg-white/5
											transition
										"
									>
										<Mail size={18} />
									</a>
								</div>
							</div>

							{/* Footer */}
							<div className="mt-6 flex justify-end">
								<button
									type="button"
									onClick={onClose}
									className="
										px-4 py-1.5 text-sm font-medium rounded-md
										bg-[#7077A1]
										text-white
										hover:bg-[#8a90c7]
										active:scale-95
										transition
									"
								>
									Close
								</button>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
