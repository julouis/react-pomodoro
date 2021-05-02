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
		this.resetTimer = this.resetTimer.bind(this);
	}

	play() {
		let intervalId = setInterval(this.decreaseTimer, 1000);
		this.props.onPlayStopTimer(true);
		this.setState({
			intervalId: intervalId,
		});
	}

	decreaseTimer() {
		switch (this.state.timerSecond) {
			case 0:
				if (this.props.timerMinute === 0) {
					if (this.state.isSession) {
						this.setState({
							isSession: false,
						});

						this.props.toggleInterval(this.state.isSession);
					} else {
						this.setState({
							isSession: true,
						});

						this.props.toggleInterval(this.state.isSession);
					}
				} else {
					this.props.updateTimerMinute();
					this.setState({
						timerSecond: 59,
					});
				}

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
		this.props.onPlayStopTimer(false);
	}

	resetTimer() {
		this.stop();
		this.props.resetTimer();
		this.props.onPlayStopTimer(false);
		this.setState({
			timerSecond: 0,
			isSession: true,
		});
	}

	/* 	onPlayStopTimer() {
		this.props.onPlayStopTimer();
	} */

	render() {
		return (
			<section>
				<section className="timerContainer">
					<h4>{this.state.isSession === true ? "Timer" : "Break"}</h4>
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
						<i className="fas fa-play"></i>
					</button>
					<button onClick={this.stop}>
						<i className="fas fa-pause"></i>
					</button>
					<button onClick={this.resetTimer}>
						<i className="fas fa-power-off"></i>
					</button>
				</section>
			</section>
		);
	}
}
