import React from "react";

export default function breakInterval(props) {
	function decreaseCounter() {
		if (props.breakInterval === 1) {
			return;
		}
		props.decreaseBreak();
	}

	function increaseCounter() {
		if (props.breakInterval === 60) {
			return;
		}

		props.increaseBreak();
	}
	return (
		<section>
			<h4>Break Length</h4>
			<section className="intervalContainer">
				<button onClick={increaseCounter}>
					<i className="fas fa-chevron-up"></i>
				</button>
				<p className="intervalLength">{props.breakInterval}</p>
				<button onClick={decreaseCounter}>
					<i className="fas fa-chevron-down"></i>
				</button>
			</section>
		</section>
	);
}
