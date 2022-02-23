import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class RatingStars extends Component {
    state = {}

    handleRate = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })

    render() {
        return (
            <div style={{paddingTop: 15}}>
                <Rating icon='star' defaultRating={3} maxRating={5} onRate={this.handleRate} />
            </div>
        )
    }
}
//<pre>{JSON.stringify(this.state, null, 2)}</pre>