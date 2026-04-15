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
		<section
			className="main-container"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="overlay" />

			<div className="content">
				<div className="about-container">
					<h6>{subtitle}</h6>
					<h1>{title}</h1>
					<h3>{smallDescription}</h3>
				</div>

				<div className="links-container">
					{links.map((link, index) => (
						<a target="blank" key={index} href={link.url}>
							{link.label}
						</a>
					))}
				</div>

				<div className="description">
					<p>{description}</p>
				</div>
			</div>
		</section>
	);
}
