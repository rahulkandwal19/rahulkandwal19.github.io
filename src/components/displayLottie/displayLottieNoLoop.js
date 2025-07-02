import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottieNoLoop extends Component {
    render() {
        const animationData = this.props.animationData;
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: animationData
        };

        return (
            <Suspense fallback={<Loading />}>
                <Lottie
                    animationData={defaultOptions.animationData}
                    loop={defaultOptions.loop}
                />
            </Suspense>
        );
    }
}
