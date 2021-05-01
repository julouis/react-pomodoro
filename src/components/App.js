import React from "react";
import "../style.css";
import BreakInterval from "./BreakInterval";
import SessionLength from "./SessionLength";
import Timer from "./Timer";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			breakLength: 5,
			sessionLength: 25,
			timerMinute: 25,
			isPlay: false,
		};

		this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
		this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);

		this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
		this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);

		this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
		this.onToggleInterval = this.onToggleInterval.bind(this);

		this.onResetTimer = this.onResetTimer.bind(this);
	}

	onIncreaseBreakLength() {
		this.setState((prevState) => {
			return {
				breakLength: prevState.breakLength + 1,
			};
		});
	}

	onDecreaseBreakLength() {
		this.setState((prevState) => {
			return {
				breakLength: prevState.breakLength - 1,
			};
		});
	}

	onIncreaseSessionLength() {
		this.setState((prevState) => {
			return {
				sessionLength: prevState.sessionLength + 1,
				timerMinute: prevState.sessionLength + 1,
			};
		});
	}

	onDecreaseSessionLength() {
		this.setState((prevState) => {
			return {
				sessionLength: prevState.sessionLength - 1,
				timerMinute: prevState.sessionLength - 1,
			};
		});
	}

	onUpdateTimerMinute() {
		this.setState((prevState) => {
			return {
				timerMinute: prevState.timerMinute - 1,
			};
		});
	}

	onToggleInterval(isSession) {
		if (isSession) {
			this.setState({
				timerMinute: this.state.sessionLength,
			});
		} else {
			this.setState({
				timerMinute: this.state.breakLength,
			});
		}
	}

	onResetTimer() {
		this.setState({
			timerMinute: this.state.sessionLength,
		});
	}

	render() {
		return (
			<main>
				<h2>Pomodoro Clock</h2>
				<section className="intervalLengthContainer">
					<BreakInterval
						isPlay={this.state.isPlay}
						breakInterval={this.state.breakLength}
						increaseBreak={this.onIncreaseBreakLength}
						decreaseBreak={this.onDecreaseBreakLength}
					></BreakInterval>
					<SessionLength
						isPlay={this.state.isPlay}
						sessionLength={this.state.sessionLength}
						increaseSession={this.onIncreaseSessionLength}
						decreaseSession={this.onDecreaseSessionLength}
					></SessionLength>
				</section>
				<Timer
					timerMinute={this.state.timerMinute}
					breakLength={this.state.breakLength}
					updateTimerMinute={this.onUpdateTimerMinute}
					toggleInverval={this.onToggleInterval}
					resetTimer={this.onResetTimer}
				></Timer>
			</main>
		);
	}
}

export default App;
