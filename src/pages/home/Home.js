import React from 'react'

//components
import HeaderHomePage from '../../components/header/HeaderHomepage'
import AAILogo from '../../assets/log.svg'

//ui
import { Text, Stack } from 'office-ui-fabric-react';

//style 
import './style.css'

function Home() {
    return (
        <div id="home">
            <div style={{padding:'0em',margin:'0'}} className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <HeaderHomePage/>
                </div>
                <div style={{padding:'5em'}}>
                    <div style={{minHeight:"650px"}} className="ms-Grid-row">
                        <div style={{marginTop:"30px"}}class="ms-Grid-col ms-sm6 ms-sm6">
                            <Text style={{color:'#ffffff',height:'100%', fontSize:'60px'}} variant={'xxLarge'}><div className="portal">Software Product<br/> Recommendation <br/> System</div></Text>
                        </div>
                        <div style={{marginTop:"150px"}}class="ms-Grid-col ms-sm6 ms-sm6">
                            <img src={AAILogo} width="95%" alt="Airports Authority of India"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home