This is a IT product Service Recommender System.

CreateDataset.ipynb => This notebook creates a synthetic dataset which we have used in our backend and training of the 
		       machine learning model under Federated Settings

FederatedLearning.ipynb => This notebook explains the Exploratory Data Analysis and overall training of the global model with client models
			   under Federated Settings. Four models each for Security, Scalability, Ease Of Use, Latency are trained under 
			   Federated Settings.

mnistAlpha_0.1_FL.ipynb => This notebook is an example of how pseudo labellings can be used in our problem statement to introduce
			   semi-supervised learning with only 10% labelled data.

React code base =>

npx create-react-app fl-aotmp            =>  Create the project

npm install bootstrap --save             =>  Install Bootstrap

npm intall react-router-dom              =>  For Router, Switch

< Install Other required Dependencies >

npm start

restApiProduct.ipynb                  =>     Host api end points as server using colab


=> Copy Generated Public URL and enter in  PRODUCT_API_BASE_URL  in services/ProductsService.js  file.  Eg : const PRODUCT_API_BASE_URL = "http://9d78-34-86-177-191.ngrok.io";

=> Sign up the form

=> Log In

=> Follow as directed in the demo video.