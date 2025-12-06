import React from 'react'
import Button from './Button'
import sampleImg from '../assets/img/hole6.webp'

// Single card component
const NewsCard = ({ item, buttonProps = {} }) => {
	const { date, title, excerpt, image } = item
	return (
		<article className="bg-white rounded-[24px] shadow-lg overflow-hidden max-w-[360px]">
			<div className="h-[200px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
			<div className="p-6">
				<div className="text-[10px] text-gray-500 mb-4">{date}</div>
				<h3 className="text-[20px] font-optima text-[#0F3563] mb-4 line-clamp-2 leading-snug min-h-[50px]">{title}</h3>
				<p className="text-[12px] text-gray-600 mb-6 line-clamp-2">{excerpt}</p>
				<div>
					<Button
						label={buttonProps.label ?? 'Read More'}
						bgClass={buttonProps.bgClass ?? 'bg-[#24452D]'}
						textClass={buttonProps.textClass ?? 'text-[#E4E9D4]'}
						iconClass={buttonProps.iconClass ?? 'text-[#E4E9D4]'}
						secondWordClass={buttonProps.secondWordClass ?? 'font-optima'}
						className={buttonProps.className ?? ''}
						onClick={buttonProps.onClick}
					/>
				</div>
			</div>
		</article>
	)
}

// Wrapper component: shows latest N cards (default 3) from dummy data
const NewsCards = ({ count = 3 }) => {
	// dummy data (6 items)
	const data = [
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

	// sort by createdAt desc and take `count` items
	const sorted = data
		.slice()
		.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
		.slice(0, Math.max(0, count))

	return (
		<section className="py-10">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-20">
					{sorted.map(item => (
						<NewsCard key={item.id} item={item} buttonProps={{ label: 'Read More' }} />
					))}
				</div>
			</div>
		</section>
	)
}

export default NewsCards

