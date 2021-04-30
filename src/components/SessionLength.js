import React from "react";

export default function SessionLength(props) {
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
			<h4>Session Length</h4>
			<section className="intervalContainer">
				<button onClick={increaseSession}>
					<i class="fas fa-chevron-up"></i>
				</button>
				<p className="intervalLength">{props.sessionLength}</p>
				<button onClick={decreaseSession}>
					<i class="fas fa-chevron-down"></i>
				</button>
			</section>
		</section>
	);
}
