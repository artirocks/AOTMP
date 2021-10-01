import React, { Component } from 'react';
import ProductService from '../services/ProductsService.js';

class RecommendationComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mtm: '',
            ap: '',
            sso: '',
            sbb: '',
            ha: '',
            ei: '',
            ds: '',
            as: '',
            qos: '',
            audit: '',
            secure:'',
            scale:'',
            ease:'',
            latency:'',
            typeOfService:''
        }

        this.changeTOSHandler = this.changeTOSHandler.bind(this);
        this.changeMTMHandler = this.changeMTMHandler.bind(this);
        this.changeAPHandler = this.changeAPHandler.bind(this);
        this.changeSSOHandler = this.changeSSOHandler.bind(this);
        this.changeSBBHandler = this.changeSBBHandler.bind(this);
        this.changeHAHandler = this.changeHAHandler.bind(this);
        this.changeEIHandler = this.changeEIHandler.bind(this);
        this.changeDSHandler = this.changeDSHandler.bind(this);
        this.changeASHandler = this.changeASHandler.bind(this);
        this.changeQOSHandler = this.changeQOSHandler.bind(this);
        this.changeAUDITHandler = this.changeAUDITHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeTOSHandler = (event) => {
        this.setState({ typeOfService: event.target.value });
    }

    changeMTMHandler = (event) => {
        this.setState({ mtm: event.target.value });
    }

    changeAPHandler = (event) => {
        this.setState({ ap: event.target.value });
    }

    changeSSOHandler = (event) => {
        this.setState({ sso: event.target.value });
    }

    changeSBBHandler = (event) => {
        this.setState({ sbb: event.target.value });
    }

    changeHAHandler = (event) => {
        this.setState({ ha: event.target.value });
    }

    changeEIHandler = (event) => {
        this.setState({ ei: event.target.value });
    }

    changeDSHandler = (event) => {
        this.setState({ ds: event.target.value });
    }

    changeASHandler = (event) => {
        this.setState({ as: event.target.value });
    }

    changeQOSHandler = (event) => {
        this.setState({ qos: event.target.value });
    }

    changeAUDITHandler = (event) => {
        this.setState({ audit: event.target.value });
    }

    onSubmit = (e) => {

        e.preventDefault();

        let mtm = parseFloat(this.state.mtm);
        let ap = parseFloat(this.state.ap);
        let sso = parseFloat(this.state.sso);
        let sbb = parseFloat(this.state.sbb);
        let ha = parseFloat(this.state.ha);
        let ei = parseFloat(this.state.ei);
        let ds = parseFloat(this.state.ds);
        let as = parseFloat(this.state.as);
        let qos = parseFloat(this.state.qos);
        let audit = parseFloat(this.state.audit);
        
        if(isNaN(mtm) || isNaN(ap) || isNaN(sso) || isNaN(sbb) || isNaN(ha) || isNaN(ei) || isNaN(ds) || isNaN(as) || isNaN(qos) || isNaN(audit)) {

            alert("Please Enter a valid input")
        }

        else
        {

        var features = mtm + '-' +  ap + '-' +  sso + '-' +  sbb + '-' +  ha + '-' +  ei + '-' +  ds + '-' +  as + '-' +  qos + '-' +  audit;

        console.log(features)

        ProductService.get_predictions(features).then( (res) => {
            
            console.log([res.data.secure, res.data.scale, res.data.ease, res.data.latency]);

            var f = res.data.secure + '-' + res.data.scale + '-' +  res.data.ease + '-' +  res.data.latency;
            
            console.log(f)

            ProductService.similarFeatures(f).then( (pes) => {

            console.log(pes.data)

            this.props.history.push({pathname: '/recommend-results',
            state: { tos: this.state.typeOfService, secure: res.data.secure, scale: res.data.scale, ease: res.data.ease, latency: res.data.latency, recommendations: pes.data }
            });

        });  

            

        });

        }
        
    }

    goBack() {
        this.props.history.push('/menu');
    }


    render() {
        return (
            <div id = "efficiency">

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Fill up the following parameters as per your requirements</h3>
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
                                        <label> Multi-Tenacy Model: </label>
                                        <input placeholder="Number of Tenants handled ( 1-1000 )" name="multi-tenancy" className="form-control"
                                         value={this.state.mtm} onChange={this.changeMTMHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Automated Provisioning: </label>
                                        <input placeholder="1-Low/2-Medium/3-High" name="auto-prov" className="form-control"
                                         value={this.state.ap} onChange={this.changeAPHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Single Sign On: </label>
                                        <input placeholder="0-Yes/1-No" name="sso" className="form-control"
                                         value={this.state.sso} onChange={this.changeSSOHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Subscription Based Billing: </label>
                                        <input placeholder="1-Low/2-Medium/3-High" name="sbb" className="form-control"
                                         value={this.state.sbb} onChange={this.changeSBBHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> High Availability: </label>
                                        <input placeholder="1-Low/2-Medium/3-High" name="ha" className="form-control"
                                         value={this.state.ha} onChange={this.changeHAHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Elastic Infrastructure: </label>
                                        <input placeholder="5-Strongly Agree / 4-Agree / 3-Neutral / 2-Disagree / 1-Strongly Disagree" name="ha" className="form-control"
                                         value={this.state.ei} onChange={this.changeEIHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Data Security: </label>
                                        <input placeholder="1-Low/2-Medium/3-High" name="data-secure" className="form-control"
                                         value={this.state.ds} onChange={this.changeDSHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Application Security: </label>
                                        <input placeholder="1-Low/2-Medium/3-High" name="app-secure" className="form-control"
                                         value={this.state.as} onChange={this.changeASHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Rate Of Limiting (QoS): </label>
                                        <input placeholder="Requests per second (1-100)" name="qos" className="form-control"
                                         value={this.state.qos} onChange={this.changeQOSHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Audit: </label>
                                        <input placeholder="1-Low/2-Medium/3-High" name="audit" className="form-control"
                                         value={this.state.audit} onChange={this.changeAUDITHandler}/>
                                    </div>
                            
                                    <button className="btn btn-success" onClick={this.onSubmit}> Submit </button>
                                    <button className="btn btn-danger" style={{margin:"10px"}} onClick={this.goBack.bind(this)}> Main Menu </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RecommendationComponent;