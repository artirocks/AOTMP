import React, { Component } from 'react';

class RecommendationResult extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount() {

    }

    goToInputs() {
        this.props.history.push('/recommend-products');
    }

    render() {
        return (
            <div>

                <h2 className="text-center">Recommendations</h2>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" id = "efficiency">
                            <h3 className="text-center">Your desired product will have these ratings</h3>
                            <div className="card-body">

                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Security </th>
                                            <th> Scalability</th>
                                            <th> Ease Of Use</th>
                                            <th> Latency</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{this.props.location.state.secure}</td>
                                            <td>{this.props.location.state.scale}</td>
                                            <td>{this.props.location.state.ease}</td>
                                            <td>{this.props.location.state.latency}</td>
                                        </tr>
                                    </tbody>

                                </table>
                                  

                            </div>
                            
                            

                            <button className="btn btn-warning" style={{margin:"20px"}} onClick={() => this.goToInputs()}> Try Next Inputs </button>
                        </div>
                    </div>
                    <div>
                        <br/>
                        <br/>
                        <h3 className="text-center">Recommended Products Based on your Desired Inputs</h3>
                            
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Product ID </th>
                                    <th> Type of Service </th>
                                    <th> Multi-Tenancy Model</th>
                                    <th> Automated Provisioning</th>
                                    <th> Single Sign On</th>
                                    <th> Subscription Based Billing</th>
                                    <th> High Availability</th>
                                    <th> Elastic Infrastructure</th>
                                    <th> Data Security</th>
                                    <th> Application Security </th>
                                    <th> Requests per Second (QoS) </th>
                                    <th> Audit </th>
                                    <th> Score </th>

                                </tr>
                            </thead>

                            <tbody>
                                {
                                    Object.keys(this.props.location.state.recommendations).map((key, index) => ( 
                                        <tr>
                                        
                                            <td>{this.props.location.state.recommendations[key]['Service Id']}</td>
                                            <td>{this.props.location.state.tos}</td>
                                            <td>{this.props.location.state.recommendations[key]['Multi-Tenancy model']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Automated Provisioning']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Single Sign On']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Subscription Based Billing']}</td>
                                            <td>{this.props.location.state.recommendations[key]['High Availability']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Elastic Infrastructure']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Data Security']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Application Security']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Rate Limiting/QoS']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Audit']}</td>
                                            <td>{this.props.location.state.recommendations[key]['Score']}</td>
                                            
                                        
                                        </tr>
                                      ))
                                }
                            </tbody>

                        </table>


                    </div>
                </div>

            </div>
        );
    }
}

export default RecommendationResult;