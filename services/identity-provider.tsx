import { FabricCaServerApi } from "./fabric-ca-client-api/typescript-axios-client-generated/api";
import { Configuration } from "./fabric-ca-client-api/typescript-axios-client-generated/configuration";

const config: Configuration = {}
const instance = new FabricCaServerApi(config);

