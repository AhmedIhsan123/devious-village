import re0 from "../Assets/resident_evil_0.png";
export default function () {
	return (
		<>
			<section className="main-container">
				<div className="about-container">
					<h6>Capcom</h6>
					<h1>Resident Evil 0</h1>
					<h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius
						facilis perspiciatis numquam tempore delectus itaque sunt.
					</h3>
				</div>
				<div className="image-container">
					<img className="game-img" src={re0}></img>
				</div>
				<div className="links-container">
					<a>Link 1</a>
					<a>Link 2</a>
					<a>Link 3</a>
					<a>Link 4</a>
				</div>
			</section>
		</>
	);
}
