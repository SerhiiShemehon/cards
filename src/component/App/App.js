import {Footer} from 'component/Footer';
import {CardList} from 'component/CardList';

import './App.scss';

export const App = () => {
    return (
        <div className="page-holder">
            <div className="wrapper">
                <div className="container">
                    <CardList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

