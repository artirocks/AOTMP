const _ = require('lodash');

export const resolvers = {
  Query: {
    
    loginUser:(parent:any, args: any, {dataSources}:{dataSources :any}, info:any) => {
      return dataSources.UserAPI.loginUser(args.emailId,args.password);
    },
  },

  Mutation:{

    changePassword:(parent: any, args: any,{dataSources}:{dataSources :any}) => {
      return dataSources.UserAPI.changePassword(args.emailId,args.password);
    },

    signUpUser:(parent: any, args: any,{dataSources}:{dataSources :any}) => {
      return dataSources.UserAPI.signUpUser(args.emailId,args.password);
    },
  
  }

};
