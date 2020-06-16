# Atlas API
Atlas is a proposal for a collateral-free cryptocurrency loaning platform for the Ethereum blockchain. 
Borrowers input their personal information asked in the contracts section, and that information is split into public and private keys; RSA encryption / decryption is performed on the backend to simulate the actions of a bank or credit-checking API upon successfully decrypting the borrowers credentials. 

# Backend API for Atlas-Frontend

This API is publicly accessible from a local server instance via ngrok local tunneling. Its custom URL is appended to the Solidity contracts and React.js interfaces.

# Run Instructions
TBD.
1. ngrok installation
2. npm install
3. node app.js
4. ./ngrok http 8080 from location where ngrok was installed
5. To be Ran with React and ethereum-bridge (see atlas-frontend repository)