import fetch from "node-fetch";
const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:8000';
  }

  

  

  

  // AOTMP
  async changePassword(emailId:{emailId:String},password:{password:String}) {
    const headers = {
      "content-type": "application/json",
    };
    const requestOptions = {
      method: "PUT",
      headers,
    };
    const res = await fetch(
      `http://localhost:8000/changeUserPassword/${emailId}/${password}`,
      requestOptions
    );
    return await res.json();
  }

  async loginUser(emailId:{emailId:String},password:{password:String}) {
    const headers = {
      "content-type": "application/json",
    };
    const requestOptions = {
      method: "GET",
      headers,
    };
    const res = await fetch(
      `http://localhost:8000/logIn/${emailId}/${password}`,
      requestOptions
    );
    return await res.json();
  }

  async signUpUser(emailId:{emailId:String},password:String) {
    const headers = {
      "content-type": "application/json",
    };
    const requestOptions = {
      method: "POST",
      headers,
    };
    const res = await fetch(
      `http://localhost:8000/signUp/${emailId}/${password}`,
      requestOptions
    );
    return await res.json();
  }
  
}

module.exports = UserAPI;
