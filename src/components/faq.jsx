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

export default FAQ
