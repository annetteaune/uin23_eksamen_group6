

export default function WordCloud({ selectedGame }) {
	const words = selectedGame?.map(({ name, games_count }) => ({
		text: name,
		value: games_count,
	}));
	
	
		return (
			<section className="wordcloud">
			<p>her skal det være en wordcloud</p>
			</section>
		);
	
}
