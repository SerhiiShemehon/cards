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
                         setNumbers,
                         url
}) => {
    const [cardClass, setCardClass] = useState(null);
    const [currentCard, setCurrentCard] = useState(null);
    const [isModal, setModal] = useState(false);
    const [number, setNumber] = useState(1);
    let imageUrl = url;

    useEffect(()=>{
        if(url === 'general'){
            setNumber(144);
        } else if(url === 'inner_child'){
            setNumber(65);
        } else if(url === 'looking_for_meaning'){
            setNumber(148);
        } else if(url === 'persons'){
            setNumber(73);
        } else if(url === 'resources'){
            setNumber(80);
        } else if(url === 'women_energy'){
            setNumber(85);
        } else if(url === 'personal_boundaries'){
            setNumber(95);
        } else if(url === 'man_resources'){
            setNumber(68);
        }
    }, [url])

    const handleClickCard = () => {
        if(!currentCard){
            if (numbers.length < number){
                const isNumber = (number) => {
                    if (numbers.indexOf( number ) != -1){
                        return isNumber(randomInteger(1, number));
                    } else {
                        return number;
                    }
                }
                const currentNumber = isNumber(randomInteger(1, number));
                setNumbers(()=>[
                    ...numbers,
                    currentNumber
                ]);
                setCurrentCard(require('images/cards/'+ imageUrl +'/'+ currentNumber +'.jpg').default);
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