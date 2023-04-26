import ReactWordcloud from 'react-wordcloud'

export default function SimpleWordcloud() {
    const words = [
			{
				text: "told",
				value: 64,
			},
			{
				text: "mistake",
				value: 11,
			},
			{
				text: "thought",
				value: 16,
			},
			{
				text: "bad",
				value: 17,
			},
		];
	return <ReactWordcloud words={words} />;
}