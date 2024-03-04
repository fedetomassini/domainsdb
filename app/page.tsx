import { Database } from 'lucide-react'

export default function Home() {
	return (
		<section className="flex min-h-screen flex-col items-center mx-auto justify-center -mt-20">
			<div className="flex flex-col justify-center place-items-center space-y-5">
				<h1 className="inline-flex gap-2 text-4xl font-bold items-center"><Database size={36}/> DomainsDB <Database size={36}/></h1>
				<article className="text-center w-[750px] px-20 max-md:max-w-[300px] max-md:px-4">
					Registered domains search checks the lists of registered domains for names containing particular words/phrases/numbers or symbols
				</article>
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
						className="w-[315px] py-1.5 px-2 text-[#7077A1] bg-[#2D3250] font-bold placeholder:font-bold border-l-2 border-y-2 border-[#424769] rounded-tl-md rounded-bl-md focus:outline-none focus:text-[#7077A1]"
					/>
					<button
						className="py-1.5 px-4 bg-[#2D3250] border-2 border-[#424769] rounded-tr-md rounded-br-md focus:outline-none font-bold active:text-[#7077A1]"
					>Find
					</button>
				</div>
				<div id="results" className='hidden'>
					<table className="w-[850px] h-fit bg-[#2D3250] rounded-sm">
						<thead className="text-center border-2 border-[#424769]">
							<tr>
								<th className="py-1">Domain</th>
								<th className="py-1">Created</th>
								<th className="py-1">Updated</th>
								<th className="py-1">Country</th>
							</tr>
						</thead>
						<tbody className="text-center not-italic"> 
							<tr>
								{/* */}
								<td className="py-1">-</td>
								<td className="py-1">--/--/--</td>
								<td className="py-1">--/--/--</td>
								<td className="py-1">-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}