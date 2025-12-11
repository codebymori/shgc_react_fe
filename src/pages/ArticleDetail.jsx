import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import articleData from '../data/articleData.json'
import paternImg from '../assets/img/patern-1.png'
import sampleImg from '../assets/img/hole6.webp'


const ArticleDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	
	// Scroll to top when component mounts or id changes
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [id])

	// Find article by id
	const article = articleData.articles.find(item => item.id === parseInt(id))
	
	// If article not found
	if (!article) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-optima text-[#0F3563] mb-4">Article Not Found</h1>
					<Button 
						label="Back to Articles"
						bgClass="bg-[#24452D]"
						textClass="text-[#E4E9D4]"
						onClick={() => navigate('/news-event')}
					/>
				</div>
			</div>
		)
	}

	const { date, title, excerpt, content, type, category } = article

	return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white">

            <div className="relative h-[100px] sm:h-[120px]  md:h-[120px] lg:h-[170px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] text-white flex justify-end items-center bg-white overflow-hidden"
                style={{
                    backgroundImage: `url(${paternImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: '#24452D',
                    backgroundPosition: 'center',
                    }}
                >
            </div>

            {/* Article content goes here */}
            
            {/* Breadcrumb Navigation */}
            <div className="mb-6 md:mb-8 mt-20">
                <nav className="flex items-center font-inter text-[10px] sm:text-sm md:text-base text-gray-600 space-x-3 sm:space-x-4 md:space-x-5">
                    <button 
                        onClick={() => navigate('/')}
                        className="hover:text-[#A4781A] transition-colors text-[10px] sm:text-[12px] lg:text-base"
                    >
                        Home
                    </button>
                    <div className="w-px h-2 sm:h-3 bg-[#A4781A]"></div>
                    <button 
                        onClick={() => navigate('/news-event')}
                        className="hover:text-[#A4781A] transition-colors text-[10px] sm:text-[12px] lg:text-base"
                    >
                        News & Events
                    </button>
                    <div className="w-px h-2 sm:h-3 bg-[#A4781A]"></div>
                    <span className="text-gray-800 font-medium line-clamp-1 text-[10px] sm:text-[12px] lg:text-base">{title}</span>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 pb-20">
                {/* Left Column - Article Content */}
                <div className="md:col-span-2 lg:col-span-3 lg:mr-36">
                    {/* Article Title */}
                    <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-optima text-[#24452D] mb-6 md:mb-8 leading-relaxed">
                        {title}
                    </h1>
                    {/* Article Image */}
                    <div className="relative mb-6 md:mb-8">
                        <img 
                            src={sampleImg} 
                            alt={title}
                            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-[24px]"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        {content && content.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 mb-4 md:mb-6 font-inter leading-relaxed text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="w-[10%] h-[1px] bg-[#A4781A]"></div>

                    {/* Article Meta Info */}
                    <div className=" mt-6 md:mt-8 flex items-center justify-between">
                        <div className="flex flex-col flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span>Author</span>
                            <span className="font-medium text-gray-900">Admin</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="md:col-span-1 lg:col-span-2">
                    <div className=" p-0 pt-10 md:pt-0 lg:p-8 sticky top-24">
                        {/* More About Us Section */}
                        <div className="flex flex-col items-start gap-7">
                            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[40px] font-optima font-semibold text-[#24452D]">More About Us</h3>
                            
                            {/* Social Media Icons */}
                            <div className="flex justify-start items-center gap-3">
                                <button className="w-8 h-8 text-[#24452D] rounded flex items-center justify-center hover:opacity-80 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </button>

                                <div className="w-px h-3 bg-[#A4781A]"></div>
                                
                                <button className="w-8 h-8 text-[#24452D] rounded flex items-center justify-center hover:opacity-80 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M448 209.91a210.06 210.06 0 0 1 -122.8-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
                                    </svg>
                                </button>

                                <div className="w-px h-3 bg-[#A4781A]"></div>
                                
                                <button className="w-8 h-8 text-[#24452D] rounded flex items-center justify-center hover:opacity-80 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                                    </svg>
                                </button>
                            </div>
                            
                            <p className="text-sm text-gray-600 lg:w-[300px] leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry *
                            </p>

                            <div className="w-[10%] h-[1px] bg-[#A4781A]"></div>
                            
                            <Button 
                                label="More Insight"
                                bgClass="bg-[#E4E9D4]"
                                textClass="text-[#24452D]"
                                className=" text-sm"
                                iconClass='-rotate-45'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] flex items-center '>
                <div className="relative w-[50%] h-[70px] md:h-[120px] lg:h-[150px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] z-0"
                style={{
                    backgroundImage: `url(${paternImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: '#24452D',
                    backgroundPosition: 'center',
                    }}
                >
                </div>
                <h1 className='bg-white w-fit text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]  rounded-full px-10 py-1 ml-[-150px] font-optima text-black z-10 '>Related {article.type.charAt(0).toUpperCase() + article.type.slice(1)}</h1>
            </div>

            {/* related article */}
            <div className="mt-16 pb-20 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:w-[80%] justify-items-center">
                    {articleData.articles
                        .filter(item => item.id !== article.id && item.type === article.type)
                        .slice(0,3)
                        .map(relatedArticle => (
                            <div 
                                key={relatedArticle.id} 
                                className="bg-white rounded-[16px] md:rounded-[24px] shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                                onClick={() => {
                                    navigate(`/news-event/${relatedArticle.id}`);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <div className="h-[150px] md:h-[140px] lg:h-[230px] bg-cover bg-center" style={{ backgroundImage: `url(${sampleImg})` }}></div>
                                <div className="p-3 md:p-4 lg:p-5">
                                    <div className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-500 mb-2">{relatedArticle.date}</div>
                                    <h4 className="font-optima text-[#0F3563] text-sm md:text-sm lg:text-base mb-2 md:mb-3 line-clamp-2 leading-snug min-h-[2.5rem] md:min-h-[2.8rem] lg:min-h-[3rem] flex items-start">{relatedArticle.title}</h4>
                                    <p className="text-gray-600 text-xs md:text-xs lg:text-sm mb-3 md:mb-4 line-clamp-2">{relatedArticle.excerpt}</p>
                                    <Button 
                                        label="Read More"
                                        bgClass="bg-[#24452D]"
                                        textClass="text-[#E4E9D4]"
                                        className="text-xs"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/news-event/${relatedArticle.id}`);
                                            window.scrollTo(0, 0);
                                        }}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
		
	)
}

export default ArticleDetail