import React, { Component } from "react";

export default class Timer extends React.Component {
	constructor() {
		super();

		this.state = {
			isSession: true,
			timerSecond: 0,
			intervalId: 0,
		};

		this.play = this.play.bind(this);
		this.decreaseTimer = this.decreaseTimer.bind(this);
		this.stop = this.stop.bind(this);
	}

	play() {
		let intervalId = setInterval(this.decreaseTimer, 1000);

		this.setState({
			intervalId: intervalId,
		});
	}

	decreaseTimer() {
		switch (this.state.timerSecond) {
			case 0:
				this.props.updateTimerMinute();
				this.setState({
					timerSecond: 59,
				});
				break;
			default:
				this.setState((prevState) => {
					return {
						timerSecond: prevState.timerSecond - 1,
					};
				});
				break;
		}
	}

	stop() {
		clearInterval(this.state.intervalId);
	}

	render() {
		return (
			<section>
				<section className="timerContainer">
					<h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
					<span className="timer">{this.props.timerMinute}</span>
					<span className="timer">:</span>
					<span className="timer">
						{this.state.timerSecond === 0
							? "00"
							: this.state.timerSecond < 10
							? "0" + this.state.timerSecond
							: this.state.timerSecond}
					</span>
				</section>
				<section className="timerActions">
					<button onClick={this.play}>
						<i class="fas fa-play"></i>
					</button>
					<button onClick={this.stop}>
						<i class="fas fa-pause"></i>
					</button>
					<button onClick={this.reset}>
						<i class="fas fa-power-off"></i>
					</button>
				</section>
			</section>
		);
	}
}
