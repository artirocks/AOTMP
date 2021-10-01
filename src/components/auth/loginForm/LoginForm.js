import React,{ useState } from 'react'

//graphql
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

//ui
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Text, PrimaryButton, MessageBar, MessageBarType } from 'office-ui-fabric-react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Card } from '@uifabric/react-cards';

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

function LoginForm(props) {

    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const LOGIN = gql`
    query loginUser($emailId: String!,$password:String!){
        loginUser(emailId:$emailId,password:$password) 
    }
  `;

    const [ loginFunction,{loading, error, data }] = useLazyQuery(LOGIN);

    if(error) {
        console.log(error);
    }
    
    if(data) {
        props.history.push('/menu')
    }

    return (
        <>
                <HeaderHomePage />
                <div className="ms-Grid-row" style={{paddingBottom:'300px'}}>
                    <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.pivot}`}>
                        <Card styles={styles.cardStyles}>
                            <Card.Section>                
                            {error ? <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close" >There is an error processesing your request</MessageBar>:null}
                            <Text variant={'xxLarge'}>Login</Text>
                            <TextField
                                disabled={loading} 
                                name="emailId" 
                                value={loginValue} 
                                onChange={(e) => {setLoginValue(e.target.value)}} 
                                label="Email"
                            />
                            <TextField
                                disabled={loading} 
                                name="password"
                                type="password" 
                                value={passwordValue} 
                                onChange={(e)=>{setPasswordValue(e.target.value)}} 
                                label="Password"
                            />
                            <PrimaryButton 
                                disabled={loading} 
                                text="Submit" 
                                onClick={() =>  {
                                        loginFunction({variables: {emailId: loginValue,password:passwordValue}})
                                    }
                                }
                            />
                            </Card.Section>
                        </Card>
                    </div>
                </div>
            </>
        
    )
}

export default LoginForm;