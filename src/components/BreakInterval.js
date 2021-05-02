import React from "react";

function BreakInterval(props) {
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
			<h4>Break Duration</h4>
			<section className="intervalContainer">
				<button
					disabled={props.isPlay === true ? "disabled" : ""}
					onClick={increaseCounter}
				>
					<i className="fas fa-chevron-up"></i>
				</button>
				<p className="intervalLength">{props.breakInterval} min</p>
				<button
					disabled={props.isPlay === true ? "disabled" : ""}
					onClick={decreaseCounter}
				>
					<i className="fas fa-chevron-down"></i>
				</button>
			</section>
		</section>
	);
}

export default BreakInterval;
