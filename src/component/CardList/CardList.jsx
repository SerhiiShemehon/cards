import React, {useState, useEffect} from "react";
import { useParams } from 'react-router';
import { Redirect } from "react-router-dom";
import {Card} from './Card';

import './CardList.scss';

export const CardList = () => {
    const [classMixing, setClassMixing] = useState('')
    const [flipped, setFlipped] = useState(false)
    const [numbers, setNumbers] = useState([]);
    const cards = [...Array(10).keys()];

    const { url } = useParams();

    useEffect(()=>{
        if(url !== 'general' || url !== 'inner_child' || url !== 'looking_for_meaning' || url !== 'persons' || url !== 'resources' || url !== 'women_energy'){
            <Redirect to="/cards" />
        }
    }, [url])

    const handleClickMixing = () => {
        setFlipped(true);
        setTimeout(()=>{
            setFlipped(false);
        }, 300);

        if(classMixing !== 'mixing'){
            setClassMixing('mixing');
            setTimeout(()=>{
                setClassMixing('');
            }, 2000)
        }
    }

    return (
        <React.Fragment>
            <span className={`btn-mixing ${classMixing}`} onClick={handleClickMixing}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M12 8h27.711c6.739 0 12.157 5.548 11.997 12.286l-2.347 98.568C93.925 51.834 170.212 7.73 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.835 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l19.738-19.738c4.498-4.498 11.753-4.785 16.501-.552C160.213 433.246 205.895 452 256 452c108.322 0 196-87.662 196-196 0-108.322-87.662-196-196-196-79.545 0-147.941 47.282-178.675 115.302l126.389-3.009c6.737-.16 12.286 5.257 12.286 11.997V212c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V20C0 13.373 5.373 8 12 8z"></path></svg>
            </span>
            <div className={`card-list ${classMixing}`}>
                {cards.map(i => <Card
                    key={i}
                    flipped={flipped}
                    numbers={numbers}
                    setNumbers={setNumbers}
                    url={url}
                />)}
            </div>
        </React.Fragment>
    )
}