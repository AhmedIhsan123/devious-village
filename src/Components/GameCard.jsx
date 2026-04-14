import "../styles/GameCard.css";

export default function GameCard({
	title,
	subtitle,
	description,
	smallDescription,
	links,
	image,
}) {
	return (
		<section className="main-container">
			<div className="about-container">
				<h6>{subtitle}</h6>
				<h1>{title}</h1>
				<h3>{smallDescription}</h3>
			</div>

			<div className="links-container">
				{links.map((link, index) => (
					<a key={index} href={link.url}>
						{link.label}
					</a>
				))}
			</div>

			<div className="image-container">
				<img className="game-img" src={image} alt={title} />
				<p>{description}</p>
			</div>
		</section>
	);
}
