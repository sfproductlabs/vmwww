import React from 'react'
import logo from '../assets/images/vm.white.small.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">                    
                    <img width="75" src={logo}/>
                    <h1>At <strong>ValidMeds</strong>, We are saving <br />
                    the sick by tracking medicine.</h1>
                    <p>Over $250B USD of counterfeit pharmaceuticals<br />
                    are sold to the sick and unaware every year.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
