import { FabricCaServerApi } from "./fabric-ca-client-api/typescript-axios-client-generated/api";
import { Configuration } from "./fabric-ca-client-api/typescript-axios-client-generated/configuration";
import * as configurationProfile from "./connectionProfile.json";

export const SignIn = async (): Promise<string> => {
    const config: Configuration = {
        username: "admin",
        password: "adminpw"
    };

    const Instance = new FabricCaServerApi(config);

    try {
        const result = await Instance.apiV1CainfoGet();
        console.log(result);

    } catch (error) {
        console.log(error);
    }

    debugger
    return "secret";
}

export const SignOut = () => {
    
}

export const SignUp = async (): Promise<string> => {
    return "id";
}
