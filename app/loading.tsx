export default function Loading() {
	return (
		<div
			role="status"
			className="flex flex-col items-center justify-center gap-3"
		>
			<div
				className="
				relative flex items-center justify-center
				w-14 h-14
				rounded-xl
				bg-[#2D3250]/70
				border border-[#424769]
				shadow-md
			"
			>
				<div className="absolute inset-0 rounded-xl bg-[#7077A1]/20 blur-md animate-pulse" />

				<svg
					className="relative h-8 w-8 animate-spin"
					viewBox="0 0 24 24"
					fill="none"
				>
					<circle cx="12" cy="12" r="10" stroke="#424769" strokeWidth="3" />
					<path
						d="M22 12a10 10 0 0 1-10 10"
						stroke="#7077A1"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			<p className="text-sm text-gray-400 animate-pulse">
				Searching domains...
			</p>

			<span className="sr-only">Loading...</span>
		</div>
	);
}
