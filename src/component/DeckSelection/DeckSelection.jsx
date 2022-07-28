import React from 'react';
import { NavLink  } from "react-router-dom";

import './DeckSelection.scss';

const menu = [
    {
        id: 1,
        link: '/cards/general',
        title: 'Universal'
    },
    {
        id: 2,
        link: '/cards/inner_child',
        title: 'Inner child'
    },
    {
        id: 3,
        link: '/cards/looking_for_meaning',
        title: 'Looking for sense'
    },
    {
        id: 4,
        link: '/cards/persons',
        title: 'Persons'
    },
    {
        id: 5,
        link: '/cards/resources',
        title: 'Resources'
    },
    {
        id: 6,
        link: '/cards/women_energy',
        title: 'Women energy'
    },
    {
        id: 7,
        link: '/cards/personal_boundaries',
        title: 'Personal boundaries'
    },
    {
        id: 8,
        link: '/cards/man_resources',
        title: 'Man resources'
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