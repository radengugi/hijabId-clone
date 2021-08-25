import React from 'react';
import { Card, CardImg } from 'reactstrap';

class CardTokoOnline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="col-md-3">
                    <Card className="link-thumbnail" style={{ border: 'none' }}>
                        <CardImg className="img" top width="100%" src="https://hijab.id/tm_images/produk/dfe374397696e354.jpg" alt="Card image cap" />
                        <div className="text-center" >
                            <h4>Hannah Hijab Instant Mammadis X Hijab.id Ocean</h4>
                        </div>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="link-thumbnail" style={{ border: 'none' }}>
                        <CardImg className="img" top width="100%" src="https://hijab.id/tm_images/produk/10e3af738e93f607.jpg" alt="Card image cap" />
                        <div className="text-center" >
                            <h4>Hannah Hijab Instant Mammadis X Hijab.id Black</h4>
                        </div>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="link-thumbnail" style={{ border: 'none' }}>
                        <CardImg className="img" top width="100%" src="https://hijab.id/tm_images/produk/c2a6e0c1b7f010f1.jpg" alt="Card image cap" />
                        <div className="text-center" >
                            <h4>Hannah Hijab Instant Mammadis X Hijab.id Olive</h4>
                        </div>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="link-thumbnail" style={{ border: 'none' }}>
                        <CardImg className="img" top width="100%" src="https://hijab.id/tm_images/produk/0f1553c11e1beff9.jpg" alt="Card image cap" />
                        <div className="text-center" >
                            <h4>Hannah Hijab Instant Mammadis X Hijab.id Pearl</h4>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CardTokoOnline;