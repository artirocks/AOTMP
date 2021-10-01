
import React, { Component } from 'react';
import ProductService from '../services/ProductsService.js';

class SimilarProductComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rating: '',
            secure: '',
            scale: '',
            ease: '',
            latency:'',
            tos1:'',
            tos2:'',
        }

        this.changeTOS1Handler = this.changeTOS1Handler.bind(this);
        this.changeTOS2Handler = this.changeTOS2Handler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.changeSecureHandler = this.changeSecureHandler.bind(this);
        this.changeScaleHandler = this.changeScaleHandler.bind(this);
        this.changeEaseHandler = this.changeEaseHandler.bind(this);
        this.changeLatencyHandler = this.changeLatencyHandler.bind(this);
        this.featureBased = this.featureBased.bind(this);
        this.scoreBased = this.scoreBased.bind(this);
    }

    changeTOS1Handler = (event) => {
        this.setState({ tos1: event.target.value });
    }

    changeTOS2Handler = (event) => {
        this.setState({ tos2: event.target.value });
    }

    changeRatingHandler = (event) => {
        this.setState({ rating: event.target.value });
    }

    changeSecureHandler = (event) => {
        this.setState({ secure: event.target.value });
    }

    changeScaleHandler = (event) => {
        this.setState({ scale: event.target.value });
    }

    changeEaseHandler = (event) => {
        this.setState({ ease: event.target.value });
    }

    changeLatencyHandler = (event) => {
        this.setState({ latency: event.target.value });
    }

    goBack() {
        this.props.history.push('/menu');
    }

    featureBased = (e) => {

        e.preventDefault();

        if(this.state.secure == '' || this.state.scale == '' || this.state.ease == '' || this.state.latency == '') {
            alert("Please enter a valid input");
        }

        else
        {

        var f = this.state.secure + '-' + this.state.scale + '-' +  this.state.ease + '-' +  this.state.latency;

        ProductService.similarFeatures(f).then( (res) => {

            console.log(res.data)

            if(Object.keys(res.data).length === 0) {
                alert("No matching recommendations found! Please Check your input again");
            }
    
            else {
                this.props.history.push({
                    pathname:'/similar-features',
                    state: {tos:this.state.tos2, feature_recommendations: res.data}
                })
            }


        });

        }

    }

    scoreBased = (e) => {
        
        e.preventDefault();

        if(isNaN(parseFloat(this.state.rating)))
        {
            alert("Please enter a valid input")
        }

        else
        {

        ProductService.similarRating(this.state.rating).then( (res) => {

            if(Object.keys(res.data).length === 0) {
                alert("No matching recommendations found! Please Check your input again");
            }
            
            else{
                this.props.history.push({
                    pathname:'/similar-rating',
                    state: {tos:this.state.tos1, rating_recommendations:res.data}
                })
            }
            
        });
        }
    }

    render() {
        return (
            <div id = "efficiency">
                <h2 className="text-center">Similar Products</h2>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h4 className="text-center">Get Similar Products based on single rating (0-100) </h4>
                            <div className="card-body">

                                <form>

                                    <div className="form-group">
                                        <label for="typeOfService">Choose Type of Service:</label>
                                        <select id="tos" name="tos" value={this.state.tos1} onChange={this.changeTOS1Handler}>
                                        <option value="NA">Select</option>
                                        <option value="Cloud Services">Cloud Services</option>
                                        <option value="Web Hosting">Web Hosting</option>
                                        <option value="Security Services">Security Services</option>
                                        <option value="Gaming Services">Gaming Services</option>
                                        </select>
                                    
                                    <br/>
                                    <br/>

                                    </div>
                                    
                                    <div className="form-group">
                                        <label> Product Score: </label>
                                        <input placeholder="Score (0-100)" name="score" className="form-control"
                                         value={this.state.rating} onChange={this.changeRatingHandler}/>
                                    </div>

                                    <button className="btn btn-success" style={{marginTop:"5px"}} onClick={this.scoreBased}> Submit </button>

                                </form>
                            </div>
                            
                            <h4 className="text-center">Get Similar Products Based on Security, Scalability, Ease Of Use, Latency</h4>
                            <div className="card-body">

                                <form>

                                    <div className="form-group">
                                        <label for="typeOfService">Choose Type of Service:</label>
                                        <select id="tos" name="tos" value={this.state.tos2} onChange={this.changeTOS2Handler}>
                                        <option value="NA">Select</option>
                                        <option value="Cloud Services">Cloud Services</option>
                                        <option value="Web Hosting">Web Hosting</option>
                                        <option value="Security Services">Security Services</option>
                                        <option value="Gaming Services">Gaming Services</option>
                                        </select>
                                    
                                    <br/>
                                    <br/>

                                    </div>

                                    <div className="form-group">
                                        <label> Security: </label>
                                        <input placeholder="Low/Medium/High" name="secure" className="form-control"
                                         value={this.state.secure} onChange={this.changeSecureHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Scalability: </label>
                                        <input placeholder="Low/Medium/High" name="scale" className="form-control"
                                         value={this.state.scale} onChange={this.changeScaleHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Ease Of Use: </label>
                                        <input placeholder="Strongly Disagree/Disagree/Neutral/Agree/Strongly Agree" name="ease" className="form-control"
                                         value={this.state.ease} onChange={this.changeEaseHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Latency: </label>
                                        <input placeholder="Very Low/Low/Medium/High/Very High" name="latency" className="form-control"
                                         value={this.state.latency} onChange={this.changeLatencyHandler}/>
                                    </div>

                                    <button className="btn btn-success" style={{marginTop:"5px"}} onClick={this.featureBased}> Submit </button>

                                </form>
                            </div>
                            <button className="btn btn-danger" onClick={this.goBack.bind(this)}> Main Menu </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SimilarProductComponent;