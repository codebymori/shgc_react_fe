import React from 'react'
import Button from './Button'
import sampleImg from '../assets/img/hole6.webp'

// Single card component
const NewsCard = ({ item, buttonProps = {} }) => {
	const { date, title, excerpt, image } = item
	return (
		<article className="bg-white  rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] flex md:flex-col shadow-lg overflow-hidden w-full max-w-none h-auto md:h-auto">
			<div className="h-full md:h-[150px] lg:h-[220px] xl:h-[240px] w-[160px] sm:w-[180px] md:w-full bg-cover bg-center flex-shrink-0 min-h-[120px]" style={{ backgroundImage: `url(${image})` }} />
			<div className="p-3 sm:p-4 md:p-5 lg:p-6">
				<div className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-500 mb-2 sm:mb-3 md:mb-4">{date}</div>
				<h3 className="text-[14px] sm:text-[15px] md:text-[13px] lg:text-[15px] xl:text-[16px] font-optima text-[#0F3563] mb-3 sm:mb-4 line-clamp-2 leading-snug min-h-[35px] sm:min-h-[40px] md:min-h-[38px]">{title}</h3>
				<p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-600 mb-4 sm:mb-5 md:mb-6 line-clamp-2 leading-relaxed">{excerpt}</p>
				<div>
					<Button
						label={buttonProps.label ?? 'Read More'}
						bgClass={buttonProps.bgClass ?? 'bg-[#24452D]'}
						textClass={buttonProps.textClass ?? 'text-[#E4E9D4]'}
						iconClass={buttonProps.iconClass ?? 'text-[#E4E9D4]'}
						secondWordClass={buttonProps.secondWordClass ?? 'font-optima'}
						className={`text-[10px] sm:text-[11px] md:text-[10px] lg:text-[11px] xl:text-[12px] px-3 sm:px-4 md:px-4 lg:px-5 py-1.5 sm:py-2 ${buttonProps.className ?? ''}`}
						iconSize={14}
						onClick={buttonProps.onClick}
					/>
				</div>
			</div>
		</article>
	)
}

// Wrapper component: shows latest N cards (default 3) from dummy data or custom data
const NewsCards = ({ count = 3, customData = null }) => {
	// dummy data (6 items) - used when customData is not provided
	const defaultData = [
		{
			id: 1,
			date: '02 June 2025',
			title: 'SIGNATURE HOLE OF SENTUL HIGHLANDS GOLF CLUB',
			excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
			image: sampleImg,
			createdAt: '2025-06-02',
		},
		{
			id: 2,
			date: '28 May 2025',
			title: 'FRASER DRIVING & LOUNGE',
			excerpt: 'Fraser Driving & Lounge is the perfect place to unwind after a round of golf.',
			image: sampleImg,
			createdAt: '2025-05-28',
		},
		{
			id: 3,
			date: '15 May 2025',
			title: 'PRO SHOP SPECIAL OFFERS',
			excerpt: 'Check out our Pro Shop offers and exclusive discounts for members.',
			image: sampleImg,
			createdAt: '2025-05-15',
		},
		{
			id: 4,
			date: '01 May 2025',
			title: 'MEMBERS TOURNAMENT HIGHLIGHTS',
			excerpt: 'Highlights and results from the recent club members tournament.',
			image: sampleImg,
			createdAt: '2025-05-01',
		},
		{
			id: 5,
			date: '20 April 2025',
			title: 'COURSE MAINTENANCE UPDATE',
			excerpt: 'We carried out maintenance works to improve drainage on hole 12.',
			image: sampleImg,
			createdAt: '2025-04-20',
		},
		{
			id: 6,
			date: '10 April 2025',
			title: 'NEW TRAINING PROGRAMS',
			excerpt: 'Introducing training programs for juniors and adults starting next month.',
			image: sampleImg,
			createdAt: '2025-04-10',
		},
	]

	// Use custom data if provided, otherwise use default data
	const data = customData || defaultData;

	// sort by createdAt desc and take `count` items
	const sorted = data
		.slice()
		.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
		.slice(0, Math.max(0, count))

	return (
		<section className="py-6 sm:py-8 md:py-10">
			<div className="container mx-auto px-2 sm:px-3 md:px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-20">
					{sorted.map(item => (
						<NewsCard key={item.id} item={item} buttonProps={{ label: 'Read More' }} />
					))}
				</div>
			</div>
		</section>
	)
}

export default NewsCards

