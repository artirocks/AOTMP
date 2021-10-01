from fastapi import FastAPI
import requests
import json
from typing import Any, Dict, AnyStr, List, Union
  
app = FastAPI()

JSONObject = Dict[AnyStr, Any]
JSONArray = List[Any]
JSONStructure = Union[JSONArray, JSONObject]

@app.get('/')
def home():
    return {"message": "welcome to the Server !"}

@app.get('/logIn/{emailId}/{password}')
def get(emailId:str,password:str):
    f = open('./credentials/credentials.json',)
    data = json.load(f)
    f.close()
    for userInfo in data['credentials']:
        if(userInfo["emailId"]==emailId and userInfo["password"]==password):
            return "true"
    return "false"

@app.put('/changeUserPassword/{emailId}/{password}')
def forgotPassword(emailId:str,password:str):
    f = open('./credentials/credentials.json',)
    data = json.load(f)
    f.close()
    for userInfo in data['credentials']:
        if(userInfo["emailId"]==emailId):
            userInfo["password"] = password
    a_file = open("./credentials/credentials.json", "w")
    json.dump(data, a_file)
    a_file.close()
    return "Password is changed !"

@app.post("/signUp/{emailId}/{password}")
async def root(emailId:str,password:str):
    f = open('./credentials/credentials.json',)
    data = json.load(f)
    f.close()
    credential = {"emailId": emailId,"password" : password}
    data['credentials'].append(credential)
    a_file = open("./credentials/credentials.json", "w")
    json.dump(data, a_file)
    a_file.close()
    return "Successfully Signed Up"