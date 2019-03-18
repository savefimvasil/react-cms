import React, {Component} from 'react'
import './Header.scss'
import {Link} from '../../../routes'

class Header extends Component {
    state = {
        menuLinks: [
            {
                title: 'Недвижимость',
                to: 'list'
            },
            {
                title: 'Админпанель',
                to: 'admin'
            }
        ]
    }


    render() {
        return (
            <div className={'header'}>
                <div className={'container'}>
                    <div className="logo">
                        <Link
                            route={'/'}
                        >
                            <a>logo</a>
                        </Link>
                    </div>
                    <div className="nawbar">
                        {
                            this.state.menuLinks.map((a) => {
                                return (
                                    <Link
                                        route={'/' + a.to}
                                        key={Math.random()}
                                    >
                                        <a>{a.title}</a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Header