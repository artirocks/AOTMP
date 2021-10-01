from fastapi import FastAPI
import pandas as pd
import numpy as np
from keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:8080/products",
    "http://localhost:8080/"

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



data = pd.read_csv('D:/fl-aotmp/src/dataset/Dataset.csv')
col_list = data.columns.values.tolist()

print(data)
app = FastAPI()


@app.get('/model-predictions/{modelInput}')
def get_predictions(modelInput:list):

    inputArray = np.array(modelInput)

    minvals = [1,1,0,1,1,1,1,1,1,1]
    maxvals = [1000,3,1,3,3,5,3,3,100,3]

    for i in range(len(modelInput)):
        modelInput[i] = (modelInput[i]-minvals[i])/(maxvals[i]-minvals[i])

    model_secure = load_model('models/security/Security.h5')
    model_scale = load_model('models/scalability/Scalability.h5')
    model_ease= load_model('models/ease_of_use/Ease Of Use.h5')
    model_latency = load_model('models/latency/Latency.h5')

    outmin = [1,1,1,1]
    outmax = [3,3,5,5]

    secure = model_secure.predict(modelInput)
    scale = model_scale.predict(modelInput)
    ease = model_ease.predict(modelInput)
    latency = model_latency.predict(modelInput)

    secure = round(secure * (outmax[0]-outmin[0]) + outmin[0])
    scale = round(scale * (outmax[1]-outmin[1]) + outmin[1])
    ease = round(ease * (outmax[2]-outmin[2]) + outmin[2])
    latency = round(latency * (outmax[3]-outmin[3]) + outmin[3])

    mp1 = {1:"Low", 2:"Medium", 3:"High"}
    mp2 = {1:"Strongly Disagree", 2:"Disagree", 3:"Neutral", 4:"Agree", 5:"Strongly Agree"}
    mp3 = {1:"Very High", 2:"High", 3:"Medium", 4:"Low", 5:"Very Low"}
    
    preds = {}
    preds['secure'] = mp1[secure]
    preds['scale'] = mp1[scale]
    preds['ease'] = mp1[ease]
    preds['latency'] = mp1[latency]
    
    return preds


@app.get('/efficiency-product/{product_id}')
def efficiencyProducts(product_id:str):
    
    product_info = {}

    for i in range(data.shape[0]):

        if data.iloc[i,0] == product_id:
            for j in range(data.iloc[i,:].shape[0]):
                product_info[col_list[j]] = data.iloc[i,j]
            break
    
    return product_info


@app.get('/similar-features/{outpuFeatures}')
def similarFeatures(outputFeatures):
    
    similar_products = []

    for i in range(data.shape[0]):
        
        if data['Security'].iloc[i] == outputFeatures['Security'] and data['Scalability'].iloc[i] == outputFeatures['Scalability'] and data['Ease Of Use'].iloc[i] == outputFeatures['Ease Of Use'] and data['Latency'].iloc[i] == outputFeatures['Latency']:

            product_info = {}

            for j in range(data.iloc[i,:].shape[0]):
                product_info[col_list[j]] = data.iloc[i,j]

            similar_products.append(product_info)


    return similar_products

@app.get('/similar-rating/{rating}')
def similarRating(rating:float):

    similar_products = []
    buffer = 3
    
    for i in range(data.shape[0]):

        if abs(data['Score'].iloc[i] - rating) < buffer:
            
            product_info = {}

            for j in range(data.iloc[i,:].shape[0]):
                product_info[col_list[j]] = data.iloc[i,j]
            
            similar_products.append(product_info)
    
    return similar_products