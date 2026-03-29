"use client";

import { Database, BadgeInfo, Search } from "lucide-react";
import { useState, useCallback } from "react";
import type { SearchResult } from "./lib/definitions";
import { searchDomains } from "@/app/lib/data";

import Info from "../components/info";
import Loading from "./loading";

export default function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState<SearchResult[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [showInfo, setShowInfo] = useState(false);

	const formatDate = (date?: string) => {
		if (!date) return "-";
		return new Date(date).toLocaleString("en-GB", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	const handleSearch = useCallback(async () => {
		const query = searchTerm.trim();
		if (!query) return;

		setLoading(true);
		setError(null);
		setResults([]);

		try {
			const data = await searchDomains(query);
			setResults(data || []);
		} catch {
			setError("Failed to fetch results.");
		} finally {
			setLoading(false);
			setSearchTerm("");
		}
	}, [searchTerm]);

	return (
		<section className="relative flex flex-col items-center min-h-screen px-4 py-20">
			{/* Background glow */}
			<div className="absolute top-0 w-[500px] h-[500px] bg-[#7077A1]/20 blur-3xl rounded-full -z-10" />

			<div className="w-full max-w-3xl flex flex-col gap-8">
				{/* Header */}
				<div className="text-center space-y-3 relative">
					<div className="flex justify-center">
						<div className="p-3 rounded-xl bg-[#7077A1]/20">
							<Database className="text-[#AAB2FF]" size={32} />
						</div>
					</div>

					<h1 className="text-3xl md:text-4xl font-bold text-white">
						DomainsDB
					</h1>

					<p className="text-gray-400 max-w-md mx-auto text-sm md:text-base">
						Search across millions of registered domains using keywords,
						patterns, or phrases.
					</p>

					<button
						type="button"
						onClick={() => setShowInfo(true)}
						className="absolute top-0 right-0 text-gray-500 hover:text-white transition"
					>
						<BadgeInfo size={22} />
					</button>
				</div>

				<Info isOpen={showInfo} onClose={() => setShowInfo(false)} />

				{/* Search */}
				<div className="flex w-full max-w-lg mx-auto group">
					<input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleSearch()}
						placeholder="Search domains (e.g. google, shop, ai...)"
						disabled={loading}
						className="
							flex-1 px-4 py-3
							bg-[#2D3250]/80
							border border-[#424769]
							rounded-l-xl
							text-gray-200
							placeholder-gray-500
							focus:outline-none
							focus:ring-2 focus:ring-[#7077A1]/50
							transition
						"
					/>

					<button
						type="button"
						onClick={handleSearch}
						disabled={loading || !searchTerm.trim()}
						className="
							flex items-center gap-2 px-5
							bg-[#7077A1]
							text-white
							font-medium
							rounded-r-xl
							hover:bg-[#8a90c7]
							active:scale-95
							disabled:opacity-50
							transition
						"
					>
						<Search size={16} />
						Search
					</button>
				</div>

				{/* States */}
				<div className="flex justify-center min-h-[40px]">
					{loading && <Loading />}

					{error && <p className="text-red-400 text-sm">{error}</p>}

					{!loading && !error && results.length === 0 && (
						<p className="text-gray-500 text-sm">
							No results yet. Try searching something.
						</p>
					)}
				</div>

				{/* Results */}
				{results.length > 0 && (
					<div
						className="
						bg-[#2D3250]/80
						border border-[#424769]
						rounded-xl
						overflow-hidden
						shadow-lg
					"
					>
						<table className="w-full text-sm">
							<thead className="bg-[#252a45] text-gray-300">
								<tr>
									<th className="py-3 px-4 text-left">Domain</th>
									<th className="py-3 px-4 text-left">Created</th>
									<th className="py-3 px-4 text-left">Updated</th>
									<th className="py-3 px-4 text-left">Country</th>
								</tr>
							</thead>

							<tbody>
								{results.map((r) => (
									<tr
										key={r.domain}
										className="
											border-t border-[#424769]
											hover:bg-[#3a3f63]/60
											transition
										"
									>
										<td className="py-3 px-4 font-medium text-white">
											{r.domain}
										</td>
										<td className="py-3 px-4 text-gray-300">
											{formatDate(r.create_date)}
										</td>
										<td className="py-3 px-4 text-gray-300">
											{formatDate(r.update_date)}
										</td>
										<td className="py-3 px-4 text-gray-400">
											{r.country || "-"}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</section>
	);
}
