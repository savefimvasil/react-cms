import React from 'react'
import './CardItem.scss'
import {Link} from '../../routes'

export default props => {
    return (
        <div className={'CardItem'}>
            <h3>{props.title}</h3>
            <img src={props.img} alt=""/>
            <p className={'date'}>{props.date || 'date'}</p>
            <p>{props.description}</p>
            <Link route={'list'} params={{slug: props.link}}><a>Читать подробнее</a></Link>
        </div>
    )
}