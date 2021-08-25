import React from 'react';
import { Card, CardImg} from 'reactstrap';

class CardCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container col-12" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="image col-4 mx-3">
                    <Card style={{border:'none'}}>
                        <CardImg className="select-image" top width="100%" src="https://hijab.id/tm_images/category/bb85a5a1ab68f008.jpg" alt="Card image cap" />
                        <div className="text-center" style={{ width: '20vw', height: '10vh', position: 'relative', left: '3.5vw', bottom: '5vh', backgroundColor: '#ffff' }}>
                            <h4 style={{ position: 'relative', top: '2.5vh', fontFamily: 'serif', fontWeight: 'bold' }}>APPARELS</h4>
                        </div>
                    </Card>
                </div>
                <div className="image col-4 mx-4">
                    <Card style={{border:'none'}}>
                        <CardImg top width="100%" src="https://hijab.id/tm_images/category/e7e597ca32c81e67.jpg" alt="Card image cap" />
                        <div className="text-center" style={{ width: '20vw', height: '10vh', position: 'relative', left: '3.5vw', bottom: '5vh', backgroundColor: '#ffff' }}>
                            <h4 style={{ position: 'relative', top: '2.5vh', fontFamily: 'serif', fontWeight: 'bold' }}>HIJAB</h4>
                        </div>
                    </Card>
                </div>
                <div className="image col-4 mx-3">
                    <Card style={{border:'none'}}>
                        <CardImg top width="100%" src="https://hijab.id/tm_images/category/a337c4f27ec6c9c7.jpg" alt="Card image cap" />
                        <div className="text-center" style={{ width: '20vw', height: '10vh', position: 'relative', left: '3.5vw', bottom: '5vh', backgroundColor: '#ffff' }}>
                            <h4 style={{ position: 'relative', top: '2.5vh', fontFamily: 'serif', fontWeight: 'bold' }}>ACCESSORIES</h4>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CardCollection;