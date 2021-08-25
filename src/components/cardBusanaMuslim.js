import React from 'react';
import { Card, CardImg } from 'reactstrap';

class CardBusanaMuslim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="col-md-3">
                    <Card className="link-thumbnail" style={{ border: 'none' }}>
                        <CardImg className="img" top width="100%" src="https://hijab.id/tm_images/produk/4547844658cdd37f.jpg" alt="Card image cap" />
                        <div className="text-center" >
                            <h4>Zea Kemeja</h4>
                        </div>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="link-thumbnail" style={{ border: 'none' }}>
                        <CardImg className="img" top width="100%" src="https://hijab.id/tm_images/produk/5bb2486920476ebf.jpg" alt="Card image cap" />
                        <div className="text-center" >
                            <h4>Zea Blazer Set</h4>
                        </div>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="link-thumbnail" style={{ border: 'none' }}>
                        <CardImg className="img" top width="100%" src="https://hijab.id/tm_images/produk/ab02165bac5e21eb.jpg" alt="Card image cap" />
                        <div className="text-center" >
                            <h4>Zea Long Outer</h4>
                        </div>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="link-thumbnail" style={{ border: 'none' }}>
                        <CardImg className="img" top width="100%" src="https://hijab.id/tm_images/produk/fef3094052a3d7a9.jpg" alt="Card image cap" />
                        <div className="text-center">
                            <h4>Maroon Set</h4>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CardBusanaMuslim;