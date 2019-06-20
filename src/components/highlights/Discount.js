import React from 'react';

class Discount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percent: 0
        }
    }

    incrementUntil = (val) => {
        this.setState({
            percent: val + 1
        })
    };

    componentDidMount() {
        while (this.state.percent <= 30) {
            setInterval(() => this.incrementUntil(this.state.percent), 500)
        }
    }

    render() {
        return (
            <div>
                {this.state.percent}
            </div>
        );
    }
}

export default Discount;