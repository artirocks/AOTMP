====About Our solution:
Constantly changing and evolving solutions, services and products available in the telecom, mobility, and IT management industry create sourcing, evaluation, and selection complexities that SMBs (small and mid-sized businesses) are not always equipped to address due to limited time or resources. How do SMBs more easily and efficiently sort out the thousands of options available to them?

Our solution is an IT product Service Recommender System which will help SMBs find verified solutions to simplify the sourcing, evaluation, and selection of telecom, mobility, and IT services and solutions.

====Requirements====
Python
NodeJS
JavaScript

====File Structure====
src
  -apis
     -main.ipynb
  -components
     -Efficiency
     -EfficiencyResult
     -Footer
     -Recomendation
     -SimilarFeature
     -SimilarProduct
     -SimilarRating
   -dataset
     -dataset.csv
     -dataset.json
   -services
     -ProductService


====File Description====

==Backend (Python) ===
CreateDataset.ipynb: This notebook creates a synthetic dataset which we have used in our backend and training of the machine learning model under Federated Settings

FederatedLearning.ipynb: This notebook explains the Exploratory Data Analysis and overall training of the global model with client models under Federated Settings. Four models each for Security, Scalability, Ease Of Use, Latency are trained under Federated Settings.

mnistAlpha_0.1_FL.ipynb: This notebook is an example of how pseudo labellings can be used in our problem statement to introduce semi-supervised learning with only 10% labelled data.

==Frontend (React code base) ===

Please follow these commands to create react project and install required nodejs dependencies.
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