import React, {Component} from 'react'
import './ListOfOffers.scss'
import CardItem from '../CardItem/CardItem'

class ListOfOffers extends Component {
    state = {
        list: [
            {
                id: 1,
                title: 'post1',
                date: '27',
                img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg',
                description: 'post1'
            },
            {
                id: 2,
                title: 'post2',
                date: '28',
                img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg',
                description: 'post2'
            },
            {
                id: 3,
                title: 'post3',
                date: '29',
                img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg',
                description: 'post3'
            },
            {
                id: 4,
                title: 'post4',
                date: '30',
                img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/801/80176477.jpg',
                description: 'post4'
            }
        ]
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={'List container'}>
                <div className={'list-of-offers'}>
                    {
                        this.state.list.map(a => {
                            return (
                                <CardItem
                                    title={a.title}
                                    img={a.img}
                                    date={a.date}
                                    description={a.description}
                                    link={a.id}
                                    key={a.id}
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