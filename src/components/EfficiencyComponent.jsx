import React, { Component } from 'react';
import ProductService from '../services/ProductsService.js';

//ui
import { Card } from '@uifabric/react-cards';

//Styles
import './styles.css'
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import HeaderComponent from './HeaderComponent.jsx';
const styles = {
    cardStyles: {
        root: {
          background: 'white',
          paddingTop: 30,
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 50,
          width: '100%',
          maxWidth: '100%',
          margin: 'auto',
          marginTop: 60,
        }
    }
}

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});

class EfficiencyComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productName:'',
            typeOfService:''
        }

        this.changeProdHandler = this.changeProdHandler.bind(this);
        this.processRequest = this.processRequest.bind(this);
        this.changeTOSHandler = this.changeTOSHandler.bind(this);
    }

    changeTOSHandler = (event) => {
        this.setState({ typeOfService: event.target.value });
    }

    changeProdHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    processRequest = (e) => {

        e.preventDefault();

        if(this.state.productName == '') {
            alert("Please Enter a valid input");
        }

        else
        {

        ProductService.efficiencyProducts(this.state.productName).then( (res) => {

            console.log(res.data);

            if(Object.keys(res.data).length === 0) {
                alert("The data could not be found in our database. Please check your input or try with giving desired features in recommendation menu");
            }

            else {
                this.props.history.push({
                    pathname:'/efficiency-result',
                    state: {tos: this.state.typeOfService, recommendations:res.data}
                })
            }

        });


        
        }
        

        
    }

    goBack() {
        this.props.history.push('/menu');
    }

    render() {
        return (

            <div>
            <div id = "efficiency">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Enter your Desired Product Name</h3>
                            <div className="card-body">

                                <form>

                                    <div className="form-group">
                                        <label for="typeOfService">Choose Type of Service:</label>
                                        <select id="tos" name="tos" value={this.state.typeOfService} onChange={this.changeTOSHandler}>
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
                                        <label> Product ID: </label>
                                        <input placeholder="Product Name" name="prod-name" className="form-control"
                                         value={this.state.productName} onChange={this.changeProdHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.processRequest}> Submit </button>
                                    <button className="btn btn-danger" style={{margin:"10px"}} onClick={this.goBack.bind(this)}> Main Menu </button>
                                </form>
                            </div>
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

export default EfficiencyComponent