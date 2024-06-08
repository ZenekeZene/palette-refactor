import './Home.scss';

const HomeView = () => {
	return (
		<article className="home">
			<h1 className="home__title">The<br /><span className="home__title-color">color</span><br />alchemist</h1>
			<img className="home__illustration" src="/pet.png" alt="Illustration" />
			<section className="home__buttons">
				<button type="button" className="home__button home__button--play">
					Jugar
				</button>
				<button type="button" className="home__button home__button--ranking">
					Ranking
				</button>
			</section>
		</article>
	);
};

export { HomeView };
