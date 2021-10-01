import React, { Component } from 'react';

class EfficiencyResultComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount() {

    }

    goBack() {
        this.props.history.push('/efficiency-products');
    }

    render() {
        return (
            <div>

                <h2 className="text-center">Product Information</h2>
                <br/>
                <br/>
                <br/>
                <div className="container" >

                    <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Type Of Service </th>
                                    <th> Product ID </th>
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
                                    <th> Security </th>
                                    <th> Scalability </th>
                                    <th> Ease Of Use </th>
                                    <th> Latency </th>
                                    <th> Score </th>

                                </tr>
                            </thead>

                            <tbody>
                                {   
                                    <tr>
                                        <td>{this.props.location.state.tos}</td>
                                        {   
                                            
                                            Object.keys(this.props.location.state.recommendations).map((key, index) => ( 

                                                    <td>{this.props.location.state.recommendations[key]}</td>
                                            ))

                                            
                                            
                                        }
                                    </tr>

                                }
                            </tbody>

                        

                        </table>

                        <button className="btn btn-danger" style={{margin:"10px"}} onClick={this.goBack.bind(this)}> Back </button>
                </div>

            </div>
        );
    }
}

export default EfficiencyResultComponent;