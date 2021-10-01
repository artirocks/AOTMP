const { gql } = require('apollo-server');

export const typeDefs = gql`
    
    type Credentials{
      emailId:String
      password:String
    }

    type Query {
      
      loginUser(emailId:String, password:String):String
    }

    type Mutation {
      
      signUpUser(emailId:String,password:String):String
      changePassword(emailId:String, password: String): String
    }

  `;