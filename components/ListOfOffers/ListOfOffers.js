import React, {Component} from 'react'
import './ListOfOffers.scss'
import CardItem from '../CardItem/CardItem'

class ListOfOffers extends Component {
    render() {
        return (
            <div className={'List container'}>
                <div className={'list-of-offers'}>
                    {
                        this.props.data.map(a => {
                            return (
                                <CardItem
                                    title={a.titleUA}
                                    img={'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg'}
                                    date={'123'}
                                    description={a.postBodyMiniUA}
                                    link={a._id}
                                    key={a._id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListOfOffers