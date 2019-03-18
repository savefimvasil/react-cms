import React from 'react'
import './AdminMenu.scss'
import {Link} from '../../../routes'

export default () => {
    return (
        <div className={"AdminMenu"}>
            <Link route={'admin'} params={{slug: 'add'}}><a>Добавить</a></Link>
            <Link route={'admin'} params={{slug: 'edit'}}><a>Редактировать</a></Link>
        </div>
    )
}