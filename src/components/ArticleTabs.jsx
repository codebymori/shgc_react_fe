import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import sampleImg from '../assets/img/hole6.webp'
import articleData from '../data/articleData.json'

// Single article card component - responsive styling
const ArticleCard = ({ item, buttonProps = {} }) => {
	const navigate = useNavigate()
	const { date, title, excerpt, image } = item
	
	const handleReadMore = () => {
		navigate(`/news-event/${item.id}`)
	}
	
	return (
		<article className="bg-white rounded-[16px] md:rounded-[24px] shadow-lg overflow-hidden w-full max-w-[320px] sm:max-w-[360px] xl:max-w-[400px]">
			<div className="h-[160px] sm:h-[180px] md:h-[200px] xl:h-[220px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${sampleImg})` }} />
			<div className="p-4 sm:p-5 md:p-6">
				<div className="text-[9px] sm:text-[10px] text-gray-500 mb-3 md:mb-4">{date}</div>
				<h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-optima text-[#0F3563] mb-3 md:mb-4 line-clamp-2 leading-snug min-h-[40px] sm:min-h-[45px] md:min-h-[50px]">{title}</h3>
				<p className="text-[11px] sm:text-[12px] text-gray-600 mb-4 sm:mb-5 md:mb-6 line-clamp-2">{excerpt}</p>
				<div>
					<Button
						label={buttonProps.label ?? 'Read More'}
						bgClass={buttonProps.bgClass ?? 'bg-[#24452D]'}
						textClass={buttonProps.textClass ?? 'text-[#E4E9D4]'}
						iconClass={buttonProps.iconClass ?? 'text-[#E4E9D4]'}
						secondWordClass={buttonProps.secondWordClass ?? 'font-optima'}
						className={buttonProps.className ?? 'text-xs sm:text-sm'}
						onClick={buttonProps.onClick || handleReadMore}
					/>
				</div>
			</div>
		</article>
	)
}

// Tab component for filtering articles
const ArticleTabs = ({ 
	showAllTab = true, 
	showNewsTab = true, 
	showEventsTab = true, 
	count = 6,
	customData = null 
}) => {
	const [activeTab, setActiveTab] = useState('all')
	
	// Use custom data if provided, otherwise use default data
	const data = customData || articleData.articles
	
	// Filter data based on active tab
	const getFilteredData = () => {
		let filtered = data
		
		if (activeTab === 'news') {
			filtered = data.filter(item => item.type === 'news')
		} else if (activeTab === 'events') {
			filtered = data.filter(item => item.type === 'event')
		}
		
		// Sort by createdAt desc and take `count` items
		return filtered
			.slice()
			.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
			.slice(0, Math.max(0, count))
	}
	
	const filteredData = getFilteredData()
	
	// Tab button component
	const TabButton = ({ id, label, isActive, onClick }) => (
		<button
			onClick={() => onClick(id)}
			className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
				isActive
					? 'bg-[#24452D] font-optima text-white shadow-md'
					: 'bg-[#E4E9D4] font-inter text-[#24452D] hover:bg-gray-200'
			}`}
		>
			{label}
		</button>
	)
	
	return (
		<section className="py-20 md:py-20">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center">
				{/* Tab Navigation */}
				<div className="flex flex-wrap justify-center w-fit bg-[#F4F4F4] p-1 md:p-2 rounded-full gap-2 md:gap-4 mb-6 md:mb-10">
					{showAllTab && (
						<TabButton
							id="all"
							label="All"
							isActive={activeTab === 'all'}
							onClick={setActiveTab}
						/>
					)}
					{showNewsTab && (
						<TabButton
							id="news"
							label="News"
							isActive={activeTab === 'news'}
							onClick={setActiveTab}
						/>
					)}
					{showEventsTab && (
						<TabButton
							id="events"
							label="Events"
							isActive={activeTab === 'events'}
							onClick={setActiveTab}
						/>
					)}
				</div>
				
				{/* Articles Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 lg:gap-20 justify-items-center">
					{filteredData.map(item => (
						<ArticleCard 
							key={item.id} 
							item={item} 
							buttonProps={{ label: 'Read More' }} 
						/>
					))}
				</div>
				
				{/* No articles message */}
				{filteredData.length === 0 && (
					<div className="text-center py-6 md:py-10 px-4">
						<p className="text-gray-500 text-sm md:text-lg">No articles found for this category.</p>
					</div>
				)}
			</div>
		</section>
	)
}

export default ArticleTabs