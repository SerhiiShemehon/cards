import ReactDOM from 'react-dom';

import  './Modal.scss';

export const Modal = ({closeModal, currentCard}) => {

    const closeModalCurrent = (e) => {
        console.log(1)
        if(e.target === e.currentTarget){
            closeModal();
        }
    }

    return ReactDOM.createPortal(
        <div className='modal-holder' onClick={closeModalCurrent}>
            <button className='modal-close' onClick={closeModal}>close</button>
            <div className="modal-content">
                <img src={currentCard} alt="image"/>
            </div>
        </div>,
        document.body
    );
}