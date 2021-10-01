import React, { Component } from 'react';

class MenuComponent extends Component {

    recommend() {
        this.props.history.push('/recommend-products');
    }
    efficiency() {
        this.props.history.push('/efficiency-products');
    }
    similar() {
        this.props.history.push('/similar-products');
    }

    logOut() {
        this.props.history.push('/');
    }

    render() {
        return (

            <div class="bg-image" style={{backgroundImage:"url('https://www.pixelstalk.net/wp-content/uploads/2016/06/Light-Blue-HD-Backgrounds-Free-Download.jpg')"}}>

                <div >
                    
                <form align="right" name="form1" method="post" action="log_out.php" >
                <label class="logoutLblPos">
                <button className="btn btn-info" style={{marginTop:"5px"}} onClick={() => this.logOut()}> Log Out </button>
                </label>
                </form>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                </div>
                

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{backgroundImage:"url('https://wallpaperaccess.com/full/1385324.jpg')"}}>
                            <h3 className="text-center" style={{ color: 'white' }}>Welcome! Please select your choice</h3>
                            
                            <div className="card-body">

                                <form>
                                    
                                    <button className="btn btn-success" style={{margin: "10px", paddingLeft:"130px", paddingRight:"120px"}} onClick={() => this.recommend()}> Recommend Products Based On Features </button>
                                    <button className="btn btn-secondary" style={{margin: "10px", paddingLeft:"130px", paddingRight:"155px"}} onClick={() => this.efficiency()}> Check Efficiency Scoring Of Product </button>
                                    <button className="btn btn-warning" style={{margin: "10px", paddingLeft:"130px", paddingRight:"150px"}} onClick={() => this.similar()}> Display Products With Similar Scores </button>

                                </form>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>

            </div>
        );
    }
}

export default MenuComponent;