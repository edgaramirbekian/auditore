import React from 'react';

import Slide from 'react-reveal/Slide';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "Aug, 1, 2019",
            days: "0",
            hours: "0",
            minutes: "0",
            seconds: "0"
        }
    }

    getTimeUntil = (deadline) => {
        const time_left = Date.parse(deadline) - Date.parse(new Date());

        if (time_left<0) {
            console.log("Date have passed")
        } else {
            const seconds = Math.floor((time_left/1000)%60);
            const minutes = Math.floor((time_left/1000/60)%60);
            const hours = Math.floor((time_left/(1000*60*60))%24);
            const days = Math.floor(time_left/(1000*60*60*24));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    };

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.date), 1000)
    }

    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>

                <Slide left delay={1000}>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                            </div>
                            <div className="countdown_tag">
                                "Days"
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                "Hours"
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                "Minutes"
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                "Seconds"
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        );
    }
}

export default Timer;