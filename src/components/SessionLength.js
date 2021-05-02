import React from "react";

function SessionLength(props) {
	function increaseSession() {
		if (props.sessionLength === 60) {
			return;
		}
		props.increaseSession();
	}

	function decreaseSession() {
		if (props.sessionLength === 1) {
			return;
		}
		props.decreaseSession();
	}

	return (
		<section>
			<h4>Timer Duration</h4>
			<section className="intervalContainer">
				<button
					disabled={props.isPlay === true ? "disabled" : ""}
					onClick={increaseSession}
				>
					<i className="fas fa-chevron-up"></i>
				</button>
				<p className="intervalLength">{props.sessionLength} min</p>
				<button
					disabled={props.isPlay === true ? "disabled" : ""}
					onClick={decreaseSession}
				>
					<i className="fas fa-chevron-down"></i>
				</button>
			</section>
		</section>
	);
}

export default SessionLength;
