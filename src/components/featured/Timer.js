import React from 'react';

import Slide from 'react-reveal/Slide';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                                39
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                            </div>
                            <div className="countdown_tag">
                                Hours
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                55
                            </div>
                            <div className="countdown_tag">
                                Minutes
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                40
                            </div>
                            <div className="countdown_tag">
                                Seconds
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        );
    }
}

export default Timer;