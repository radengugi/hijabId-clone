import React from 'react';
import { Link } from 'react-router-dom';

const LeftCategory = () => {
    return (
        <div>
            <div style={{ fontWeight: 'bold' }}>
                <div className="my-3" style={{ borderBottom: '1px solid black', width: '15vw' }}>
                    <Link to="/new-arrival" style={{ color: 'black', textDecoration: 'none' }}>NEW ARRIVAL</Link>
                </div>
                <div className="my-3" style={{ borderBottom: '1px solid black', width: '15vw' }}>
                    <Link to="/best-seller" style={{ color: 'black', textDecoration: 'none' }}>BEST SELLER</Link>
                </div>
                <div className="my-3" style={{ borderBottom: '1px solid black', width: '15vw' }}>
                    <Link to="/product-sale" style={{ color: 'black', textDecoration: 'none' }}>PRODUCT SALE</Link>
                </div>
                <div className="my-3" style={{ borderBottom: '1px solid black', width: '15vw' }}>HIJAB
                    <ul className="text-muted">
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/hijab-instan" style={{ color: 'black', textDecoration: 'none' }}>Hijab Instan</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/plain-hijab-pashmina" style={{ color: 'black', textDecoration: 'none' }}>Plain Hijab Pashmina</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/plain-hijab-square" style={{ color: 'black', textDecoration: 'none' }}>Plain Hijab Square</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/printed-hijab-square" style={{ color: 'black', textDecoration: 'none' }}>Printed Hijab Square</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/printed-pashmina" style={{ color: 'black', textDecoration: 'none' }}>Printed Pashmina</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/syari-hijab" style={{ color: 'black', textDecoration: 'none' }}>Syar'i Hijab</Link>
                        </li>
                    </ul>
                </div>
                <div className="my-3" style={{ borderBottom: '1px solid black', width: '15vw' }}>APPARELS
                    <ul className="text-muted">
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/apparels-bottoms" style={{ color: 'black', textDecoration: 'none' }}>Bottoms</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/apparels-dress" style={{ color: 'black', textDecoration: 'none' }}>Dress</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/apparels-homewear" style={{ color: 'black', textDecoration: 'none' }}>Homewear</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/apparels-sets-topbottoms" style={{ color: 'black', textDecoration: 'none' }}>Sets (Top & Bottom)</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/apparels-tops" style={{ color: 'black', textDecoration: 'none' }}>Tops</Link>
                        </li>
                    </ul>
                </div>
                <div className="my-3" style={{ borderBottom: '1px solid black', width: '15vw' }}>ACCESSORIES
                    <ul className="text-muted">
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/accessories-bandana-rajut" style={{ color: 'black', textDecoration: 'none' }}>Bandana Rajut</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/accessories-headloop-mask" style={{ color: 'black', textDecoration: 'none' }}>Headloop Mask</Link>
                        </li>
                        <li className="my-2" style={{ fontWeight: 'normal' }}>
                            <Link to="/accessories-legging-wudhu" style={{ color: 'black', textDecoration: 'none' }}>Legging Wudhu</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LeftCategory