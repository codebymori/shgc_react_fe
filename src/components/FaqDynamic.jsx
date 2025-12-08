import React, { useState, useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import '../styles/accordion.css'

const FaqDynamic = ({ faqData = [] }) => {
	const [activeIndex, setActiveIndex] = useState(null)
	const [closingIndex, setClosingIndex] = useState(null)

	// Reset accordion state when faqData changes (category changes)
	useEffect(() => {
		setActiveIndex(null)
		setClosingIndex(null)
	}, [faqData])

	const toggleAccordion = (index) => {
		if (activeIndex === index) {
			setClosingIndex(index)
			setTimeout(() => {
				setActiveIndex(null)
				setClosingIndex(null)
			}, 400)
		} else {
			setClosingIndex(null)
			setActiveIndex(index)
		}
	}

	return (
		<div className="w-full max-w-4xl mx-auto p-10">
			<div className="space-y-4">
				{faqData.map((item, index) => (
					<div key={item.id} className="border-b-[1px] border-gray-700">
						<button
							onClick={() => toggleAccordion(index)}
							className="w-full py-8 flex items-center justify-between"
						>
							<h3 className="text-[20px] font-optima text-black text-left">{item.question}</h3>
							<FiArrowRight
								size={32}
								className={`text-black transition-transform duration-300 flex-shrink-0   ${
									activeIndex === index ? '-rotate-45' : 'rotate-45'
								}`}
							/>
						</button>

						{(activeIndex === index || closingIndex === index) && (
							<div className={`pb-6 flex justify-end ${closingIndex === index ? 'accordion-slide-up' : 'accordion-slide-down'}`}>
								<p className="font-inter text-[15px] text-gray-700 leading-loose w-[60%]">{item.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default FaqDynamic