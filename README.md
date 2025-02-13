# Tips
## Prereqs
```
- NodeJS 14.20.0
```
## hyperledger
```
https://hyperledger-fabric-ca.readthedocs.io/en/release-1.4/users-guide.html#fabric-ca-client
```

Next todos:
use vscode extension:
https://marketplace.visualstudio.com/items?itemName=Spydra.hyperledger-fabric-debugger
https://github.com/IBM-Blockchain/blockchain-vscode-extension
https://medium.com/@lennartfr/visual-studio-code-for-hyperledger-fabric-looking-into-the-future-9624e81f568d

configure fabric by using azure.
```
https://www.npmjs.com/package/@hyperledger/fabric-gateway
https://docs.expo.io/versions/latest/react-native/activityindicator/

Implement it together with notification: https://snack.expo.io/@mainak/snackbar
FLatList: https://docs.expo.io/versions/v37.0.0/react-native/flatlist/#listemptycomponent
FlatList with previous journeys: add onPress etc.
Notifications: https://docs.expo.io/versions/latest/sdk/notifications/ to ask(*)
Location + Task Manager: https://docs.expo.io/versions/latest/sdk/location/ and https://docs.expo.io/versions/latest/sdk/task-manager/#configuration
Localization: https://docs.expo.io/versions/latest/sdk/localization/
```

# Connection settings
To have access to local server ensure the mobile device belongs to the same network and then test:
```
camino.server.org
192.168.1.174
```

```
fabric-ca-client register --caname ca.org1.example.com --id.name user1 --id.secret user1pw --id.type client --tls.certfiles ./services/crypto-config/tlsca//fabric-ca/org1/tls-cert.pem
```

```
fabric-ca-client enroll -d -u https://${CA_ADMIN_USER}:${CA_ADMIN_PASS}@${CA} --tls.certfiles ${ROOT_TLS_CERT} --home ${CAS_FOLDER} --csr.names ${SUBJECT}

fabric-ca-client enroll -u http://admin:adminpw@localhost:7054 --tls.certfiles .\services\crypto-config\peerOrganizations\org1.example.com\ca\ca.org1.example.com-cert.pem

fabric-ca-client enroll -u http://admin:adminpw@localhost:7054 --tls.certfiles /mnt/e/Azure/camino-credential-project/apps/camino-credential-piligrim-app/services/crypto-config/peerOrganizations/org1.example.com/ca/ca.org1.example.com-cert.pem

```
