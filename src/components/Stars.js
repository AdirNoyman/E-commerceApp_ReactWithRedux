import React from 'react';
import styled from 'styled-components';
import {
	BsStarFill,
	BsStarHalf,
	BsStar,
	BsReverseLayoutSidebarInsetReverse,
} from 'react-icons/bs';
const Stars = ({ stars, reviews }) => {
	console.log(stars, reviews);

	const displayStars = numStars => {
		let num = numStars;
		const arr = [];
		while (num >= 1) {
			arr.push(1);
			num -= 1;
		}
		if (num > 0) {
			arr.push(num % 1);
		}
		while (arr.length < 5) {
			let run = 5 - arr.length;
			while (run > 0) {
				arr.push(0);
				run--;
			}
		}
		return arr;
	};

	const starsArray = displayStars(stars);

	return (
		<Wrapper>
			<div className='stars'>
				{/* star */}
				<span>
					{starsArray.map((star, index) => {
						if (star === 1) {
							return <BsStarFill key={index} />;
						} else {
							return star >= 0.5 ? (
								<BsStarHalf key={index} />
							) : (
								<BsStar key={index} />
							);
						}
					})}
				</span>
				{/* end of star */}
			</div>
			<p className='reviews'>({reviews} customer reviews)</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	span {
		color: #ffb900;
		font-size: 1rem;
		margin-right: 0.25rem;
	}
	p {
		margin-left: 0.5rem;
		margin-bottom: 0;
	}
	margin-bottom: 0.5rem;
`;
export default Stars;
