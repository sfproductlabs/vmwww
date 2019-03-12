import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li> */}
                    <li><a href="mailto:andrew@validmeds.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2019</li><li>Produced by: <a href="http://sfproductlabs.com">SFPL</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
