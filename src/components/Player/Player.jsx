import React, { Component } from 'react';
import PropTypes from 'prop-types';

let timer;
class Player extends Component {
  state = {
    audioElement: Object,
    timelineElement: Object,
    playTime: 0,
    playButton: false,
    timeline: Number
  };

  playMusic = () => {
    if (this.state.playTime === 0) {
      this.setState({ playTime: this.state.audioElement.duration });
    }
    this.state.audioElement.play();
    this.setState({ playButton: true });
    this.musicTimer();
  };

  musicTimer = () => {
    timer = setInterval(() => {
      this.setState({ playTime: (this.state.playTime -= 0.1) });
      this.timelineUpdate();
      this.stopTimer();
    }, 100);
  };

  stopTimer = () => {
    if (this.state.playButton === false) {
      clearInterval(timer);
    }
    if (this.state.playTime <= 0) {
      clearInterval(timer);
      this.setState({ playTime: 0 });
    }
  };
  pauseMusic = () => {
    this.state.audioElement.pause();
    this.setState({ playButton: false });
  };
  timelineUpdate = () => {
    this.setState({
      timeline: (this.state.playTime * 100) / this.state.audioElement.duration
    });
  };

  clickOnTimeLine = event => {
    this.state.audioElement.currentTime =
      this.state.audioElement.duration * this.clickPercent(event);

    this.setState({
      playTime:
        this.state.audioElement.duration - this.state.audioElement.currentTime
    });
  };
  clickPercent = event => {
    return (
      (event.clientX - this.getPosition()) /
      this.state.timelineElement.offsetWidth
    );
  };

  getPosition = () => {
    return this.state.timelineElement.getBoundingClientRect().left;
  };

  componentDidMount() {
    this.setState({ audioElement: document.getElementById("player") });
    this.setState({ timelineElement: document.getElementById("timeline") });
  }

  render() {
    const { trackLink } = this.props;
    let button;
    let duration;
    if (this.state.playButton === false) {
      button = (
        <i class="far fa-lg fa-play-circle" style={{color:'#02A0FC'}} onClick={() => this.playMusic()}></i>
      );
    }
    if (this.state.playButton === true) {
      button = (
        <i class="far fa-lg fa-pause-circle" style={{color:'#02A0FC'}}  onClick={() => this.pauseMusic()}></i>
      );
    }
    if (this.state.audioElement.duration) {
      duration = this.state.playTime.toFixed(2);
    } else {
      duration = "0:00";
    }
    const style = {
      player: {
        display: "grid",
        gridGap: "10px",
        alignContent: "center",
        textAlign: "center",
        gridTemplateColumns: "25px 100px 45px",
        justifyContent: "start",
        alignItems: "center",
        maxWidth: "185px",
        width:'100%'
      },

      timeline: {
        height: "100%",
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "1fr",
        gridAutoRows: "0.3fr",
        justifyContent: "start",
        cursor: 'pointer'
      },

      timelineVision: {
        backgroundColor: "#02A0FC",
        marginRight: `${this.state.timeline}%`
      },
      timer: {
        color: "#02A0FC"
      },
      controller: {
        display: "grid",
        justifyContent: "center",
        cursor:'pointer',
      }
    };
    return (
      <div style={style.player}>
        <audio id="player" src={trackLink} />
        <div style={style.controller}>{button}</div>
        <div
          id="timeline"
          style={style.timeline}
          onClick={event => this.clickOnTimeLine(event)}
        >
          <div style={style.timelineVision} />
        </div>
        <div style={style.timer}>{duration}</div>
      </div>
    );
  }
}

export default Player;
