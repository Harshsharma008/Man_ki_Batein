import config from '../config/config'
import {Client,Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account; // we cannot declare it here as it works after setting the endpoint and project id to client


    constructor(){
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectId);
            this.account = new Account(this.client);
    }
    //async -> jab tk y khatam nahi hota tb tk aage nahi jayga
    async createAccount({email,password,name}){
        // eslint-disable-next-line no-useless-catch
        try{  // it can not be run so try and catch
                const userAccount = await this.userAccount.create(ID.unique(),email,password,name);
                if(userAccount) {
                    //call another method
                return this.login({email,password});
                }
                else{
                    return userAccount;
                }

        } catch(e) {
            throw e;
        }
    }
    async login({email,password}){
        try {
           return  await this.account.createEmailSession(email,password);  
        } catch (error) {
            console.log(error);
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            return error
        }
       
       
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
           console.log(error);
        }
    }
}

const authService = new AuthService(); // object creation of the AuthService

export default authService;   // directly export the object so that we can use it directly 