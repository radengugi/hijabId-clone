import React from 'react';

class Features extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div style={{ width:'100%',height:'45vh', backgroundImage: `url("https://jet.co.id/static/images/index_2list.jpg") `, backgroundSize: 'cover', display:'flex',justifyContent:'space-around',alignItems:'center' }}>
                    <img className="mx-3" src="https://jet.co.id/static/images/index2_item1.png" width='150px' />
                    <img className="mx-3" src="https://jet.co.id/static/images/index2_item2.png" width='100px' />
                    <img className="mx-3" src="https://jet.co.id/static/images/index2_item3.png" width='100px' />
                    <img className="mx-3" src="https://jet.co.id/static/images/index2_item4.png" width='130px' />
                    <img className="mx-3" src="https://jet.co.id/static/images/index2_item5.png" width='100px' />
                </div>
            </div>
        );
    }
}

export default Features;