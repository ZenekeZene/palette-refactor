import './Final.scss'

const FinalView = () => {
	return (
		<article className="final view">
			<header className="final__header">
			</header>
			<section className="final__body">
				<h1 className="final__title">Well done!</h1>
				<h2 className="final__subtitle">You have finished with <span className="final__score">1000 points at level</span></h2>
				<div className="final__level">
					<p className="final__level-score">3</p>
					<img className="final__laurel" src="/laurel.svg" alt="" />
					<a className="final__share">SHARE YOUR RECORD</a>
				</div>
			</section>
			<img className="final__illustration" src="/pet.png" alt="" />
		</article>
	);
};

export { FinalView };
