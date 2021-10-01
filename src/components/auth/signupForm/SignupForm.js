import React, { Component } from 'react'

//ui
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Text, PrimaryButton, MessageBar, MessageBarType } from 'office-ui-fabric-react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Card } from '@uifabric/react-cards';

//apollo client
import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';

//header
import HeaderHomePage from '../../header/HeaderHomepage'

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

class SignupForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            emailId:"",
            password:"",
        }
    }

    onChange = (ev,option) => {
        this.setState({
            role: option.key
        })
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFileChange=(e) => {
        this.setState({
            [e.target.name]:e.target.files[0]
        })
    }

    render() {

        const {
            emailId,
            password,
        } = this.state;
        return (
            <Mutation mutation={SIGNUP}>
                { (signup, {loading, error, data}) => {
                    if(error) console.log(error);
                    if(data)console.log(data.createUser)
                    return (
                    <>
                    <HeaderHomePage/>
                        { emailId && data ? (
                            <>
                                <div className="ms-Grid-row" style={{paddingBottom:'300px'}}>
                                    <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.pivot}`}>
                                        <Card styles={styles.cardStyles}>
                                            <Card.Section>                
                                            {error ? <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close" >There is an error processesing your request</MessageBar>:null}
                                            <Text variant={'xxLarge'}>You have signed up Successfully</Text>
                                            </Card.Section>
                                        </Card >
                                    </div>
                                </div>
                            </>
                        ):(
                        <>
                        <div className="ms-Grid-row" style={{paddingBottom:'300px'}}>
                        <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.pivot}`}>
                            <Card styles={styles.cardStyles}>
                                <Card.Section>                
                                {error ? <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close" >There is an error processesing your request</MessageBar>:null}
                                <Text variant={'xxLarge'}>Signup Request Form</Text>
                                <TextField
                                    disabled={loading} 
                                    name="emailId" 
                                    value={emailId} 
                                    onChange={this.handleChange} 
                                    label="Email"
                                />
                                <TextField
                                    disabled={loading} 
                                    name="password"
                                    type="password" 
                                    value={password} 
                                    onChange={this.handleChange} 
                                    label="Password"
                                />
                                <PrimaryButton 
                                    disabled={loading} 
                                    text="Submit" 
                                    onClick={() => {
                                        // var image = this.decodeBase64Image(signImage);
                                        signup({variables: {emailId,password}})
                                    }}
                                />
                                </Card.Section>
                            </Card>
                        </div>
                    </div>
                    </>
                    )};
                    </>
                    )
                }}
            </Mutation>
        )
    }
}
export default SignupForm

const SIGNUP = gql`
mutation signUpUser(
    $emailId:String
    $password:String
){
    signUpUser(
        
            emailId:$emailId
            password:$password
        
    )
}`;
  