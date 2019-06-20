import React from 'react';

import MyButton from '../utils/MyButton';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


class Discount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            discountStart: 0,
            discountEnd: 30
        }
    }

    incrementUntil = () => {
        let {discountStart, discountEnd} = this.state;
        if (discountStart < discountEnd) {
            this.setState({
                discountStart: discountStart + 1
            })
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(() => this.incrementUntil(), 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => {this.incrementUntil()}}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3> Purchase tickets before 20 July </h3>
                            <p> Sed eget tristique ipsum. Donec eget tortor metus. Nulla nisi velit, pulvinar sit amet arcu non, interdum tincidunt enim. Pellentesque malesuada nunc libero, id elementum tortor porttitor elementum. Vestibulum porttitor interdum eros, posuere rutrum massa rutrum in. Cras id purus et est placerat blandit. Integer hendrerit mauris vitae massa efficitur, sit amet volutpat metus scelerisque. Pellentesque aliquet dolor sem. Maecenas sit amet nunc ipsum. Nam viverra libero sit amet neque mattis, ut interdum nisi dictum. Proin vel ex quis orci dictum ultricies. Sed quis nulla finibus, euismod odio hendrerit, elementum tortor.  </p>
                            <MyButton
                                text="Purchase Tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="https://google.com"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;