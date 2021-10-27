import React from 'react';
import { NavLink  } from "react-router-dom";

import './DeckSelection.scss';

const menu = [
    {
        id: 1,
        link: '/cards/general',
        title: 'Универсальная'
    },
    {
        id: 2,
        link: '/cards/inner_child',
        title: 'Внутренний ребенок'
    },
    {
        id: 3,
        link: '/cards/looking_for_meaning',
        title: 'В поисках смысла'
    },
    {
        id: 4,
        link: '/cards/persons',
        title: 'Персоны'
    },
    {
        id: 5,
        link: '/cards/resources',
        title: 'Ресурсы'
    },
    {
        id: 6,
        link: '/cards/women_energy',
        title: 'Женская энергия'
    },
    {
        id: 7,
        link: '/cards/personal_boundaries',
        title: 'Личные границы'
    },
    {
        id: 8,
        link: '/cards/man_resources',
        title: 'Мужские ресурсы'
    }
]


export const DeckSelection = () => {
    return (
        <div className='menu-holder'>
            <div className='menu'>
                {menu.map((item, i) => (
                        <li key={item.id}>
                            <NavLink exact to={item.link} activeClassName="active">{item.title}</NavLink>
                        </li>
                    )
                )}
            </div>
        </div>
    )
}