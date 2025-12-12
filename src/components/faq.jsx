import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import '../styles/accordion.css'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null)
	const [closingIndex, setClosingIndex] = useState(null)

	const faqData = [
		{
			id: 1,
			question: 'Question 1',
			answer: 'This is the answer to question 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			id: 2,
			question: 'Question 2',
			answer: 'This is the answer to question 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			id: 3,
			question: 'Question 3',
			answer: 'This is the answer to question 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
		},
		{
			id: 4,
			question: 'Question 4',
			answer: 'This is the answer to question 4. Duis aute irure dolor in reprehenderit in voluptate velit esse.'
		},
		{
			id: 5,
			question: 'Question 5',
			answer: 'This is the answer to question 5. Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
		},
		{
			id: 6,
			question: 'Question 6',
			answer: 'This is the answer to question 6. Qui officia deserunt mollit anim id est laborum sed ut perspiciatis.'
		}
	]

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
		<div className="w-full max-w-4xl mx-auto bg-white/40 backdrop-blur-xl border border-white/20 p-4 sm:p-6 md:p-8 lg:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[24px]">
			<div className="space-y-2 sm:space-y-3 md:space-y-4">
				{faqData.map((item, index) => (
					<div key={item.id} className="border-b-[1px] border-gray-700">
						<button
							onClick={() => toggleAccordion(index)}
							className="w-full py-4 sm:py-6 md:py-8 flex items-center justify-between"
						>
							<h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-optima text-black text-left">{item.question}</h3>
							<FiArrowRight
								size={window.innerWidth < 768 ? 20 : 32}
								className={`text-black transition-transform duration-300 flex-shrink-0   ${
									activeIndex === index ? '-rotate-45' : 'rotate-45'
								}`}
							/>
						</button>

						{(activeIndex === index || closingIndex === index) && (
							<div className={`pb-4 sm:pb-5 md:pb-6 flex justify-end ${closingIndex === index ? 'accordion-slide-up' : 'accordion-slide-down'}`}>
								<p className="font-inter text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-gray-700 leading-relaxed sm:leading-loose w-full sm:w-[80%] md:w-[60%]">{item.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default FAQ
