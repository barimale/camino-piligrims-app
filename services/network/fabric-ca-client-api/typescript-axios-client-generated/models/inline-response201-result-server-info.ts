/* tslint:disable */
/* eslint-disable */
/**
 * Fabric CA Server API
 * Hyperledger Fabric CA Server APIs provides certificate authority services for the blockchain.
 *
 * OpenAPI spec version: 0.7.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface InlineResponse201ResultServerInfo
 */
export interface InlineResponse201ResultServerInfo {
    /**
     * The name of the CA that issued the credential
     * @type {string}
     * @memberof InlineResponse201ResultServerInfo
     */
    cAName: any;
    /**
     * Base 64 encoded PEM-encoded certificate chain of the CA's signing certificate
     * @type {string}
     * @memberof InlineResponse201ResultServerInfo
     */
    cAChain: any;
    /**
     * Base 64 encoding of proto bytes of the CA's Idemix issuer public key
     * @type {string}
     * @memberof InlineResponse201ResultServerInfo
     */
    issuerPublicKey: any;
    /**
     * Base 64 encoding of PEM-encoded bytes of the CA's Idemix issuer revocation public key
     * @type {string}
     * @memberof InlineResponse201ResultServerInfo
     */
    issuerRevocationPublicKey: any;
    /**
     * Version of the server
     * @type {string}
     * @memberof InlineResponse201ResultServerInfo
     */
    version: any;
}
