import React from 'react';
import styled from 'styled-components';

function Testing() {
	return (
		<Wrapper>
			<h3>Hello world</h3>
			<p>People here</p>
			<div className='article'>
				<p>This is article</p>
				<h2>Fucky article</h2>
			</div>
			<button>click me</button>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	h3 {
		color: purple;
		font-size: 4rem;
	}
	.article {
		p {
			color: green;
		}
	}
`;

export default Testing;
