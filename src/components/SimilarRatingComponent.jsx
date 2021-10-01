import React, { Component } from 'react';

class SimilarRatingComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recommendations:{}
        }

    }

    componentDidMount() {
        
        this.setState({recommendations: this.props.location.rating_recommendations});

        console.log(this.state.recommendations);

    }

    goBack() {
        this.props.history.push('/similar-products');
    }

    render() {
        return (
            <div>

                <h2 className="text-center">Similar Products Based On Given Rating</h2>
                <br/>
                <br/>
                <br/>
                <div className="container">

                <button className="btn btn-danger" style={{margin:"10px"}} onClick={()=> this.goBack()}> Back </button>

                    <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Product ID </th>
                                    <th> Type Of Service </th>
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
                                    Object.keys(this.props.location.state.rating_recommendations).map((key, index) => ( 
                                        <tr>
                                            
                                            <td>{this.props.location.state.rating_recommendations[key]['Service Id']}</td>
                                            <td>{this.props.location.state.tos}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Multi-Tenancy model']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Automated Provisioning']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Single Sign On']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Subscription Based Billing']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['High Availability']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Elastic Infrastructure']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Data Security']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Application Security']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Rate Limiting/QoS']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Audit']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Security']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Scalability']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Ease Of Use']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Latency']}</td>
                                            <td>{this.props.location.state.rating_recommendations[key]['Score']}</td>
                                        
                                        </tr>
                                      ))
                                      
                                }
                            </tbody>

                        

                        </table>

                        <button className="btn btn-danger" style={{margin:"10px"}} onClick={()=> this.goBack()}> Back </button>

                </div>

            </div>
        );
    }
}

export default SimilarRatingComponent;