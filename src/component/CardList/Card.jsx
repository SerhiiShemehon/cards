import {useState, useEffect} from 'react';
import CardBg from 'images/card-bg.jpg';
import { Modal } from 'component/Modal';

import './CardList.scss';

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export const Card = ({
                         flipped,
                         numbers,
                         setNumbers
}) => {
    const [cardClass, setCardClass] = useState(null);
    const [currentCard, setCurrentCard] = useState(null);
    const [isModal, setModal] = useState(false);

    const handleClickCard = () => {
        if(!currentCard){
            if (numbers.length < 106){
                const isNumber = (number) => {
                    if (numbers.indexOf( number ) != -1){
                        return isNumber(randomInteger(1, 106));
                    } else {
                        return number;
                    }
                }
                const number = isNumber(randomInteger(1, 106));
                setNumbers(()=>[
                    ...numbers,
                    number
                ]);
                setCurrentCard(require('images/cards/'+ number +'.jpg').default);
                setCardClass('is-flipped');
            } else {
                window.location.reload();
            }
        } else {
            setModal(true);
        }
    }

    const closeModal = () => {
        setModal(false);
    };

    useEffect(()=>{
        setCardClass(null);
        setCurrentCard(null)
    }, [flipped])

    return (
        <div className="card-item">
            <div className={`card-holder ${cardClass}`} onClick={handleClickCard}>
                <div className="card card-front" style={{
                    backgroundImage: `url(${CardBg})`
                }} />
                <div className="card card-back" style={{
                    backgroundImage: `url(${currentCard})`
                }} />
            </div>

            {isModal && <Modal closeModal={closeModal} currentCard={currentCard} />}
        </div>
    )
}