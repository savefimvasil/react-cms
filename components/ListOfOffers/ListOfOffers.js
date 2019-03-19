import React, {Component} from 'react'
import './ListOfOffers.scss'
import CardItem from '../CardItem/CardItem'

class ListOfOffers extends Component {
    state = {
        list: [
            {
                _id: 1,
                titleUA: 'post1',
                date: '27',
                img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg',
                description: 'post1'
            },
            {
                _id: 2,
                titleUA: 'post2',
                date: '28',
                img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg',
                description: 'post2'
            },
            {
                _id: 3,
                titleUA: 'post3',
                date: '29',
                img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg',
                description: 'post3'
            },
            {
                _id: 4,
                titleUA: 'post4',
                date: '30',
                img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg',
                description: 'post4'
            }
        ]
    }

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