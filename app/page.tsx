"use client"
import { Database, BadgeInfo } from 'lucide-react';
import { useState } from 'react';
import type { SearchResult } from './lib/definitions';
import { searchDomains } from '@/app/lib/data';
// Components \\
import Info from '@/components/Info';
import Loading from './loading';



export default function Home() {

	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isInfoVisible, setIsInfoVisible] = useState(false);

	const toggleInfoVisibility = () => {
		setIsInfoVisible((prev) => !prev);
	};

	const handleCloseInfo = () => {
		setIsInfoVisible(false);
	};


	
	const handleKeyPress = async (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			setSearchTerm('');
			setIsLoading(true);
			try {
				const results = await searchDomains(searchTerm);
				if (results) {
					setSearchResults(results);
				}
			} finally {
				setIsLoading(false);
			}
		}
	};

	const handleButtonPress = async (e: any) => {
		e.preventDefault();
		setSearchTerm('');
		setIsLoading(true);
		try {
			const results = await searchDomains(searchTerm);
			if (results) {
				setSearchResults(results);
			}
		} finally {
			setIsLoading(false);
		}
	};



	return (
		<section className="flex flex-col items-center mx-auto justify-center mt-16">
			<div>

			</div>
			<div className="flex flex-col justify-center place-items-center space-y-5">
				<h1 className="inline-flex gap-2 text-4xl font-bold items-center">
					<Database size={36} /> DomainsDB <Database size={36} />
				</h1>
				<div className="text-center w-[750px] px-20 max-md:max-w-[300px] max-md:px-4">
					Registered domains search checks the lists of registered domains for names containing particular words/phrases/numbers or symbols
				</div>
				<div className='absolute top-0 right-5 flex flex-col space-y-10 z-20'>
					<button
						className='hover:text-[#7077A1] absolute top-0 right-0'
						onClick={toggleInfoVisibility}
					>
						<BadgeInfo size={26} />
					</button>
					<Info isOpen={isInfoVisible} onClose={handleCloseInfo} />
				</div>

				<div id="input">
					<input
						min={1}
						max={253}
						minLength={1}
						maxLength={253}
						autoCapitalize="off"
						autoComplete="off"
						autoFocus={true}
						autoCorrect="off"
						className="w-[315px] max-sm:w-[225px] py-1.5 px-2 text-[#7077A1] bg-[#2D3250] font-bold placeholder:font-bold border-l-2 border-y-2 border-[#424769] rounded-tl-md rounded-bl-md focus:outline-none focus:text-[#7077A1]"
						onKeyDown={handleKeyPress}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button
						className="py-1.5 px-4 bg-[#2D3250] border-2 border-[#424769] rounded-tr-md rounded-br-md focus:outline-none font-bold hover:text-red-400 active:text-[#7077A1]"
						onClick={handleButtonPress}
					>
						Find
					</button>
				</div>
				{isLoading ? (
					<Loading />
				) : (
					searchResults.length > 0 && (
						<div id="results" className='grid pb-5 px-5 overflow-x-auto'>
							<table className="w-fit h-fit bg-[#2D3250] rounded-md">
								<thead className="text-center">
									<tr>
										<th className="py-1 px-4 border-2 border-[#424769]">Domain</th>
										<th className="py-1 px-4 border-2 border-[#424769]">Created</th>
										<th className="py-1 px-4 border-2 border-[#424769]">Updated</th>
										<th className="py-1 px-4 border-2 border-[#424769]">Country</th>
									</tr>
								</thead>
								<tbody className="text-center not-italic border-2 border-[#424769]">
									{searchResults.map((result: any) => (
										<tr key={result.domain}>
											<td className="py-1 px-4 border-2 border-[#424769]">{result.domain}</td>
											<td className="py-1 px-4 border-2 border-[#424769]">{new Date(result.create_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</td>
											<td className="py-1 px-4 border-2 border-[#424769]">{new Date(result.update_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</td>
											<td className="py-1 px-4 border-2 border-[#424769]">{result.country || '?'}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)
				)}
			</div>
		</section>
	);
}
