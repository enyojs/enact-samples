import kind from '@enact/core/kind';
import Button from '@enact/ui/Button';
import {css, styled} from '@pigment-css/react';
import React, {useState} from 'react';

const StyledDiv = styled.div`
    @font-face {
        font-family: "MuseoSans";
        src: url("../MuseoSans-Bold.ttf");
    }
	
	position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'MuseoSans';
`;

const pigmentDiv = css({
	fontSize: '39px',
	fontWeight: 600,
	borderRadius: '12px',
	backgroundColor: '#7d848c',
	color: 'rgb(230, 230, 230)',
	lineHeight: '66px',
	padding: '0 30px',
	height: '72px',
	margin: '3px 18px',
	minWidth: '270px',
	maxWidth: '450px',
	'&:hover': {
		backgroundColor: 'rgb(230, 230, 230)',
		color: 'rgb(76, 80, 89)'
	},
	'&[disabled]': {
		opacity: 0.28
	}
});

const MainPanel = kind({
	name: 'MainPanel',

	functional: true,

	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [disabledButton, setDisabledButton] = useState(false);

		return (
			<StyledDiv>
				<Button className={pigmentDiv} disabled={disabledButton}>click me</Button>
				<input id="disable" onClick={() => setDisabledButton((value) => !value)} type="checkbox"></input>
				<label htmlFor="disable">Disable button</label>
			</StyledDiv>
		)
	}
});

export default MainPanel;
