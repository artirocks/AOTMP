import React, { Component } from 'react'

class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-primary">
                        <div><a href="https://javaguides.net" className="navbar-brand">Software Products Recommendation System</a></div>
                    </nav>
                </header>
            </div>

            
        )
    }
}

export default HeaderComponent