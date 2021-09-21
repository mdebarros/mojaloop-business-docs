(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{424:function(e,t,a){"use strict";a.r(t);var o=a(23),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"technical-onboarding-of-dfsps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-onboarding-of-dfsps"}},[e._v("#")]),e._v(" Technical onboarding of DFSPs")]),e._v(" "),a("p",[e._v("At a high level, onboarding to a Mojaloop Hub requires a DFSP to focus their efforts around the following major milestones:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#api-integration"}},[e._v("Integration")]),e._v(" of their core backend with the Mojaloop Hub on the API level (this involves both coding and testing).")]),e._v(" "),a("li",[a("a",{attrs:{href:"#connecting-to-mojaloop-environments"}},[e._v("Connecting")]),e._v(" to pre-production and production environments following rigorous Mojaloop security requirements.")])]),e._v(" "),a("p",[e._v("In addition to the steps that require DFSP involvement, the Hub Operator must also perform some onboarding activities in their "),a("a",{attrs:{href:"#onboarding-in-the-hub-backend"}},[e._v("backend")]),e._v(" independent from DFSPs.")]),e._v(" "),a("p",[e._v("This section provides a high-level overview of all of these milestones.")]),e._v(" "),a("h2",{attrs:{id:"api-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-integration"}},[e._v("#")]),e._v(" API integration")]),e._v(" "),a("p",[e._v("Within the context of the Mojaloop Financial Service Provider Interoperability (FSPIOP) API, a transfer happens in three main steps:")]),e._v(" "),a("ol",[a("li",[e._v("Identifying the Payee (party lookup or discovery phase)")]),e._v(" "),a("li",[e._v("Agreeing the transfer (quote or agreement phase)")]),e._v(" "),a("li",[e._v("Executing the transfer (transfer phase)")])]),e._v(" "),a("p",[e._v("For further details on each of these phases, see "),a("strong",[e._v("Module 2 - Static demo: An end-to-end example")]),e._v(" of "),a("a",{attrs:{href:"https://learn.mojaloop.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mojaloop training course"),a("OutboundLink")],1),e._v(" "),a("strong",[e._v("MOJA-102")]),e._v(".")]),e._v(" "),a("p",[e._v("These three phases correspond to the key resources of the Mojaloop FSPIOP API:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Party lookup service")]),e._v(": Identifying the DFSP serving the Payee and the Payee itself (= the recipient of funds in a transaction) based on a Payee identifier (typically a MSISDN, that is, a mobile number).")]),e._v(" "),a("li",[a("strong",[e._v("Quotes service")]),e._v(": Requesting a quote and exchanging cryptographic proof to prepare and secure the transfer. A quote is a contract between a Payer DFSP and Payee DFSP for a particular financial transaction before the transaction is performed. It guarantees the agreement set by the Payer and Payee DFSPs about the Payer, the Payee, and transfer amount, and is valid during the lifetime of a quote and transfer of a specified financial transaction.")]),e._v(" "),a("li",[a("strong",[e._v("Transfers service")]),e._v(": Executing the transaction as per the agreed details and cryptographic proof.")])]),e._v(" "),a("p",[e._v("DFSPs can choose to:")]),e._v(" "),a("ul",[a("li",[e._v("connect directly to the Mojaloop Hub and implement the asynchronous Mojaloop version of these API services, or")]),e._v(" "),a("li",[e._v("leverage an open-source integration component (the "),a("a",{attrs:{href:"#mojaloop-sdk"}},[e._v("Mojaloop-SDK")]),e._v(" or "),a("a",{attrs:{href:"#payment-manager-oss"}},[e._v("Payment Manager OSS")]),e._v(") and implement a simplified, synchronous version of Mojaloop FSPIOP API services")])]),e._v(" "),a("p",[e._v("DFSPs with an in-house development team and experience with RESTful APIs will likely be able to manage the process internally and develop a direct connection to Mojaloop. However, it is recommended that DFSPs use one of the open-source integration components, as a direct connection requires additional code development and maintenance. Using the Mojaloop-SDK or Payment Manager OSS reduces the time it takes to integrate with the Mojaloop Hub and makes troubleshooting easier for the Hub Operator, thus reducing the overall cost of the system.")]),e._v(" "),a("p",[e._v("While the DFSP is carrying out offline development work, the Hub Operator’s role consists in answering ad-hoc questions around the specifics of the API, or - depending on the open-source tool chosen and the agreed deployment model - can even extend to doing some of the development too.")]),e._v(" "),a("h3",{attrs:{id:"open-source-tools-to-facilitate-api-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-source-tools-to-facilitate-api-integration"}},[e._v("#")]),e._v(" Open-source tools to facilitate API integration")]),e._v(" "),a("h4",{attrs:{id:"mojaloop-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mojaloop-sdk"}},[e._v("#")]),e._v(" Mojaloop-SDK")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/mojaloop/sdk-scheme-adapter",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mojaloop-SDK"),a("OutboundLink")],1),e._v(" presents a simplified, synchronous version of the Mojaloop FSPIOP API to a DFSP’s backend system, allowing DFSPs to implement a simple API internally to interface with the Mojaloop Hub, while still being compliant with the Mojaloop FSPIOP API specification for interoperable external communications.")]),e._v(" "),a("p",[e._v("The asynchronous pattern of the Mojaloop FSPIOP API (while it has many advantages) may not be suitable for client applications that operate in a synchronous request-response mode. The Mojaloop-SDK helps bridge this gap by offering a simplified request-response API, abstracting away the complexities of multiple request composition and asynchronous API details from end clients.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/mojaloop-sdk.png",alt:"Mojaloop-SDK"}})]),e._v(" "),a("p",[e._v("The Mojaloop-SDK must be downloaded from "),a("a",{attrs:{href:"https://github.com/mojaloop/sdk-scheme-adapter",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(" to the DFSP environment and integrated to the DFSP backend. It is provided as a Docker container image, and may be hosted on the same infrastructure as the core banking application or a virtual machine provisioned specifically for it. Ongoing maintenance may require some specialized support from a System Integrator trained in the software.")]),e._v(" "),a("p",[e._v("Other than a simplified API, the Mojaloop-SDK also provides the security protocols required by Mojaloop “out of the box”, by giving a simplified configuration interface to its users. This feature of the Mojaloop-SDK helps with the "),a("a",{attrs:{href:"#connecting-to-mojaloop-environments"}},[e._v("connection step")]),e._v(" of onboarding.")]),e._v(" "),a("h4",{attrs:{id:"payment-manager-oss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-manager-oss"}},[e._v("#")]),e._v(" Payment Manager OSS")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pm4ml.github.io/documents/payment_manager_oss/latest/core_connector_rest/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Payment Manager OSS"),a("OutboundLink")],1),e._v(" presents a use-case oriented, simplified, synchronous version of the Mojaloop FSPIOP API to a DFSP’s backend system. The key integration component of Payment Manager is called Core Connector, it acts as a translator between a DFSP’s core backend (CBS) and a component of Payment Manager (called Mojaloop Connector, which leverages the Mojaloop-SDK) that talks directly to the Mojaloop Hub.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/PM4ML_system_architecture.png",alt:"Payment Manager OSS"}})]),e._v(" "),a("p",[e._v("Core Connector is built in Apache Camel, a declarative Java-based language for integration engineers that does not require writing code from scratch. There is a ready-made Core Connector template available to simplify the development effort. The template provides a placeholder codebase for the API endpoints that need to be developed, and it must be customized to be aligned with the appropriate CBS technology. The flexibility provided by the template allows for Core Connector to be made to fit a DFSP’s backend, rather than the other way around.")]),e._v(" "),a("p",[e._v("The effort to customize a Core Connector template will differ depending on the chosen deployment option. When deploying Payment Manager, two options are available:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Managed and hosted by System Integrator")]),e._v(": A System Integrator deploys Payment Manager in the cloud, and syncs up the Core Connector template with the DFSP’s core backend implementation.")]),e._v(" "),a("li",[a("strong",[e._v("Self-hosted by DFSP")]),e._v(": The DFSP deploys Payment Manager on premise or in the cloud, and the customization of the Core Connector template can be done by a number of actors (depending on the outcome of an initial assessment of DFSP capabilities):\n"),a("ul",[a("li",[e._v("the System Integrator")]),e._v(" "),a("li",[e._v("the System Integrator and the vendor of the DFSP’s core backend solution")]),e._v(" "),a("li",[e._v("the DFSP and the vendor of the DFSP’s core backend solution")])])])]),e._v(" "),a("p",[e._v("Payment Manager is provided as a set of Linux container images (Docker) and may be hosted on-premise using commodity server infrastructure or in appropriate cloud infrastructure where available.")]),e._v(" "),a("p",[e._v("If the Hub Operator so chooses, it can assume a System Integrator role.")]),e._v(" "),a("p",[e._v("Given that Payment Manager incorporates Mojaloop-SDK functionality, it also implements the security layer required by Mojaloop. This feature of Payment Manager helps with the "),a("a",{attrs:{href:"#connecting-to-mojaloop-environments"}},[e._v("connection step")]),e._v(" of onboarding.")]),e._v(" "),a("h2",{attrs:{id:"connecting-to-mojaloop-environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-mojaloop-environments"}},[e._v("#")]),e._v(" Connecting to Mojaloop environments")]),e._v(" "),a("p",[e._v("Once the DFSP has completed coding, they test their integration against a lab instance in a test environment provided by the Hub. This is where the connection phase of the technical onboarding journey begins, with a new set of responsibilities for the Hub Operator.")]),e._v(" "),a("p",[e._v("The requirements around connecting are dictated by the multiple security protocols that any Mojaloop Hub and participating DFSPs must implement:")]),e._v(" "),a("ul",[a("li",[e._v("Two-way TLS with mutual X.509 authentication")]),e._v(" "),a("li",[e._v("OAuth 2.0 authentication for sessions over the Hub API gateway")]),e._v(" "),a("li",[e._v("IP-address-based whitelisting in firewall rules and API gateways")]),e._v(" "),a("li",[e._v("JSON Web Signature (JWS) signing of messages")]),e._v(" "),a("li",[e._v("Interledger Protocol (ILP) packet signing and validation")])]),e._v(" "),a("p",[e._v("If you are interested in more details, see "),a("a",{attrs:{href:"#security-in-mojaloop"}},[e._v("Security in Mojaloop")]),e._v(".")]),e._v(" "),a("p",[e._v("Putting the above security measures into practice requires extensive information sharing and technical configuration from different teams at both the DFSP and the Mojaloop Hub. There are open-source tools available for the community to facilitate this process, both for DFSPs and the Hub Operator.")]),e._v(" "),a("h3",{attrs:{id:"open-source-tools-to-facilitate-connecting-to-mojaloop-environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-source-tools-to-facilitate-connecting-to-mojaloop-environments"}},[e._v("#")]),e._v(" Open-source tools to facilitate connecting to Mojaloop environments")]),e._v(" "),a("h4",{attrs:{id:"mojaloop-sdk-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mojaloop-sdk-2"}},[e._v("#")]),e._v(" Mojaloop-SDK")]),e._v(" "),a("p",[e._v("The Mojaloop-SDK implements standard components that establish a uniform way of connecting DFSP systems to a Mojaloop Hub. It implements the following Mojaloop-compliant security functionality:")]),e._v(" "),a("ul",[a("li",[e._v("Two-way TLS with mutual X.509 authentication")]),e._v(" "),a("li",[e._v("JSON Web Signature (JWS) signing of messages")]),e._v(" "),a("li",[e._v("Generation of the Interledger Protocol (ILP) packet with signing and validation")])]),e._v(" "),a("p",[e._v("The Mojaloop-SDK can be downloaded from "),a("a",{attrs:{href:"https://github.com/mojaloop/sdk-standard-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(" hosted on the same infrastructure as the DFSP’s core banking application or a virtual machine provisioned specifically for it. Following the generation, signing, and exchange of TLS and JWS certificates, DFSPs are required to configure TLS- and JWS-related environment variables in the Mojaloop-SDK. Finally, installing the certificates in the DFSP’s firewalls and API gateway completes the certificate configuration part of the process.")]),e._v(" "),a("p",[e._v("Obtaining the Hub API gateway credentials required for collecting OAuth 2.0 tokens and configuring them in the Mojaloop-SDK via environment variables must be done manually.")]),e._v(" "),a("p",[e._v("Exchanging endpoint details with the Hub and configuring them in the Mojaloop-SDK via environment variables, as well as in firewall/gateway whitelists are manual steps too.")]),e._v(" "),a("h4",{attrs:{id:"payment-manager-oss-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-manager-oss-2"}},[e._v("#")]),e._v(" Payment Manager OSS")]),e._v(" "),a("p",[e._v("Payment Manager OSS provides all the security features that the Mojaloop-SDK provides, and more. Payment Manager comes with a Mojaloop Connection Manager (MCM) Client, which simplifies and automates certificate creation, signing and exchange, as well as the configuration of the connections required to different environments. How much of these processes is automated will differ depending on the chosen deployment option. Two options are available:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Managed and hosted by System Integrator")]),e._v(": A System Integrator deploys Payment Manager in the cloud.")]),e._v(" "),a("li",[a("strong",[e._v("Self-hosted by DFSP")]),e._v(": The DFSP deploys Payment Manager on premise or in the cloud.")])]),e._v(" "),a("p",[e._v("When a DFSP opts for the "),a("strong",[e._v("managed-hosted option")]),e._v(", the System Integrator (this role can be filled by the Hub Operator) can employ Infrastructure-as-Code and onboarding scripts to handle the following elements of the process in an automated way:")]),e._v(" "),a("ul",[a("li",[e._v("generation, signing, configuration, and installation of TLS certificates")]),e._v(" "),a("li",[e._v("IP address whitelisting in firewalls and API gateways")]),e._v(" "),a("li",[e._v("generation and configuration of client secret/key required to obtain OAuth 2.0 tokens")])]),e._v(" "),a("p",[e._v("Steps related to JWS certificates are carried out via the "),a("a",{attrs:{href:"https://pm4ml.github.io/documents/payment_manager_oss/latest/connection_wizard/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connection Wizard portal"),a("OutboundLink")],1),e._v(", an easy-to-use portal that Payment Manager provides for managing certificate and endpoint related processes in a guided way. DFSPs and the Hub Operator are required to generate JWS certificates using any tool of their preference and then share their public keys via the Connection Wizard portal. Configuring JWS certificates in Payment Manager is done via the Connection Wizard portal, while installing them in gateways is a manual step.")]),e._v(" "),a("p",[e._v("When a DFSP opts for the "),a("strong",[e._v("self-hosted option")]),e._v(", they use the "),a("a",{attrs:{href:"https://pm4ml.github.io/documents/payment_manager_oss/latest/connection_wizard/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connection Wizard portal"),a("OutboundLink")],1),e._v(" to manage certificate and endpoint related steps in a semi-automated way:")]),e._v(" "),a("ul",[a("li",[e._v("DFSPs enter their endpoint details and obtain the Hub’s endpoints from the portal. They then configure this information in Payment Manager via environment variables as well as in firewall/gateway whitelists manually.")]),e._v(" "),a("li",[e._v("DFSPs generate, sign, and configure TLS certificates at the click of a button via the Connection Wizard portal.")]),e._v(" "),a("li",[e._v("DFSPs generate JWS certificates using a tool of their choice and share and configure them in Payment Manager at the click of a button in the Connection Wizard portal.")])]),e._v(" "),a("p",[e._v("Obtaining the Hub API gateway credentials required for collecting OAuth 2.0 tokens and configuring them in Payment Manager via environment variables must be done manually.")]),e._v(" "),a("h4",{attrs:{id:"mcm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mcm"}},[e._v("#")]),e._v(" MCM")]),e._v(" "),a("p",[e._v("The Mojaloop Connection Manager (MCM) product is instrumental in simplifying and automating much of the information sharing and configuration around endpoints and certificates. MCM has an MCM Client and an MCM Server component, which talk to each other when exchanging endpoint details and certificates, and when signing Certificate Signing Requests.")]),e._v(" "),a("p",[e._v("The MCM Client is incorporated into Payment Manager, whereas the MCM Server is within the boundaries of the Hub. MCM provides a portal for the Hub Operator to submit Hub endpoint information and Hub certificates, and to retrieve DFSP endpoint and certificate details submitted by the DFSP via Payment Manager.")]),e._v(" "),a("h3",{attrs:{id:"security-in-mojaloop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-in-mojaloop"}},[e._v("#")]),e._v(" Security in Mojaloop")]),e._v(" "),a("p",[e._v("To understand what connecting a DFSP to a Mojaloop environment entails in detail, it is important to take a closer look at the security requirements of Mojaloop.")]),e._v(" "),a("p",[e._v("Mojaloop requires the following security measures to be implemented in order to protect the data exchanged between DFSPs:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Transport Layer Security")]),e._v(" is a secure mechanism for exchanging a shared symmetric key over a network between two anonymous peers, with identity verification (that is, trusted certificates). It provides confidentiality (no one has read the content) and integrity (no one has changed the content). Mojaloop requires two-way TLS mutual authentication using X.509 certificates for securing bi-directional connections. DFSPs and the Mojaloop Hub authenticate each other to ensure that both parties involved in the communication are trusted. Both parties share their public certificates with each other and then verification/validation is performed based on that.")]),e._v(" "),a("li",[e._v("Another security measure that is offered for authentication is the "),a("strong",[e._v("OAuth tokens")]),e._v(" that DFSPs are required to use when making an API call request. OAuth 2 is used to provide role-based access to Mojaloop Hub endpoints (API authorization).")]),e._v(" "),a("li",[a("strong",[e._v("IP address whitelisting")]),e._v(" reduces the attack surface of the Mojaloop Hub.")]),e._v(" "),a("li",[e._v("To protect the application level, Mojaloop implements "),a("strong",[e._v("JSON Web Signature (JWS)")]),e._v(" as defined in "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7515",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 7515 (JSON Web Signature (JWS))"),a("OutboundLink")],1),e._v(", the standard for integrity and non-repudiation. Signing messages ensures the Payer DFSP and the Payee DFSP can trust that messages shared between each other have not been modified by a third party.")]),e._v(" "),a("li",[e._v("The Mojaloop FSPIOP API implements support for the "),a("strong",[e._v("Interledger Protocol (ILP)")]),e._v(". ILP is built on the concept of conditional transfers, in which ledgers involved in a financial transaction from the Payer to the Payee can first reserve funds out of a Payer account and later commit them to the Payee account. The transfer from the Payer to the Payee account is conditional on the presentation of a fulfilment that satisfies the condition attached to the original transfer request.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/security_overview.png",alt:"Security overview"}})]),e._v(" "),a("p",[e._v("The next sections provide background information about the steps involved in connecting to a Mojaloop environment. The information provided is written in a way so that DFSPs and the Hub can rely on PKI best practices and any proprietary tools and technologies that they prefer or have access to.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("As mentioned above, using Payment Manager OSS, Mojaloop Connection Manager (MCM), and the Infrastructre-as-Code (IaC) that deploys the components making up the Mojaloop ecosystem, many of the steps in the processes described below can be done in an automated way.")])]),e._v(" "),a("h4",{attrs:{id:"creating-and-sharing-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-sharing-certificates"}},[e._v("#")]),e._v(" Creating and sharing certificates")]),e._v(" "),a("h5",{attrs:{id:"tls-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls-certificates"}},[e._v("#")]),e._v(" TLS certificates")]),e._v(" "),a("p",[e._v("Two-way or mutual TLS authentication (mTLS) relies on both parties (client and server) sharing their public certificates with each other and performing verification/validation based on that.")]),e._v(" "),a("p",[e._v("The following high-level steps describe how connection is established and data is transferred between a client and server in the case of mTLS:")]),e._v(" "),a("ol",[a("li",[e._v("The client requests a protected resource over the HTTPS protocol and the SSL/TLS handshake process begins.")]),e._v(" "),a("li",[e._v("The server returns its public certificate to the client along with a server hello.")]),e._v(" "),a("li",[e._v("The client validates/verifies the received certificate. The client verifies the certificate through the Certificate Authority (CA) for CA-signed certificates.")]),e._v(" "),a("li",[e._v("If the server certificate was validated successfully, the server requests the client certificate.")]),e._v(" "),a("li",[e._v("The client provides its public certificate to the server.")]),e._v(" "),a("li",[e._v("The server validates/verifies the received certificate. The server verifies the certificate through the Certificate Authority for CA-signed certificates.")])]),e._v(" "),a("p",[e._v("After completion of the handshake process, the client and server communicate and transfer data with each other, encrypted with the secret keys shared between the two during the handshake.")]),e._v(" "),a("img",{attrs:{src:"/TLS_connection.svg",width:"65%",height:"65%"}}),e._v(" "),a("p",[e._v("The above process requires that before connecting to any environment (pre-production or production), the DFSP and the Mojaloop Hub each complete the following steps.")]),e._v(" "),a("ol",[a("li",[e._v("Create a server certificate signed by your CA.")]),e._v(" "),a("li",[e._v("Share your server certificate and CA chain with the other party.")]),e._v(" "),a("li",[e._v("Install the other party’s CA chain in your outbound firewall (validation/verification will happen against these installed certificates).")]),e._v(" "),a("li",[e._v("Generate a Certificate Signing Request (CSR) for your TLS client certificate and share with the other party.")]),e._v(" "),a("li",[e._v("Sign the other party’s CSR using your CA.")]),e._v(" "),a("li",[e._v("Share the signed client certificate as well as your CA’s root certificate with the other party.")]),e._v(" "),a("li",[e._v("Install your own client certificate signed by the other party’s CA in your outbound API gateway.")]),e._v(" "),a("li",[e._v("Install the root certificate of the other party’s CA in your outbound API gateway.")])]),e._v(" "),a("h5",{attrs:{id:"jws-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jws-certificates"}},[e._v("#")]),e._v(" JWS certificates")]),e._v(" "),a("p",[e._v("Whenever an API client sends an API message to a counterparty, the API client should sign the message using its JWS private key. After the counterparty receives the API message, it must validate the signature with the sending party’s public JWS key. JWS is used by the receiving party to validate that the message came from the expected sender, and that it has not been modified in transit.")]),e._v(" "),a("p",[e._v("The above process requires that all DFSPs and the Mojaloop Hub itself have a JWS certificate and that before connecting to any environment (pre-production or production), the DFSP and the Mojaloop Hub each complete the following steps.")]),e._v(" "),a("ol",[a("li",[e._v("Create a keystore (to hold your certificate and private key), an asymmetric key pair (a public key and a private key), and an associated certificate that identifies you.")]),e._v(" "),a("li",[e._v("Share your JWS public key.")]),e._v(" "),a("li",[e._v("Install the other parties’ (the Hub and all other DFSPs) JWS public key in your inbound gateway.")]),e._v(" "),a("li",[e._v("Install your JWS private key in your outbound gateway.")])]),e._v(" "),a("h4",{attrs:{id:"sharing-endpoint-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharing-endpoint-information"}},[e._v("#")]),e._v(" Sharing endpoint information")]),e._v(" "),a("p",[e._v("The Mojaloop Hub and the DFSPs share endpoint information to:")]),e._v(" "),a("ul",[a("li",[e._v("whitelist the other party’s public IP addresses in firewall rules in order to allow traffic")]),e._v(" "),a("li",[e._v("configure the other party’s callback URLs in API gateways")])]),e._v(" "),a("p",[e._v("Typically, access to any incoming and outgoing traffic for a DFSP will be controlled by the relevant Security team. The DFSP’s firewall needs to be appropriately configured:")]),e._v(" "),a("ul",[a("li",[e._v("to access the Mojaloop Hub in any environment where the DFSP and the Hub interact, and")]),e._v(" "),a("li",[e._v("for the Mojaloop Hub to make callbacks to the DFSP")])]),e._v(" "),a("p",[e._v("Apart from access to and from the Hub deployed in an environment, all other public access should be blocked to prevent any unauthorized/unwarranted access.")]),e._v(" "),a("p",[e._v("Accordingly, access to the Mojaloop Hub is also regulated. DFSPs have to share their IP/IP range from which calls will be made to the Hub so that the firewall on the Hub can be configured appropriately. The Security team within the DFSP should be able to provide that information.")]),e._v(" "),a("h4",{attrs:{id:"obtaining-an-oauth-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-an-oauth-token"}},[e._v("#")]),e._v(" Obtaining an OAuth token")]),e._v(" "),a("p",[e._v("The Mojaloop Hub employs WSO2 technologies for integration between the Hub and DFSPs, and to provide a gateway to DFSPs. To connect to the various Hub environments, DFSPs must obtain access to WSO2. WSO2 offers an API Store portal where DFSPs can create API gateway accounts for application-level access, subscribe to APIs, and obtain OAuth tokens for use when interacting with the Mojaloop Hub.")]),e._v(" "),a("h2",{attrs:{id:"onboarding-in-the-hub-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-in-the-hub-backend"}},[e._v("#")]),e._v(" Onboarding in the Hub backend")]),e._v(" "),a("p",[e._v("Onboarding comprises certain steps that do not require any actions from DFSPs and are the sole responsibility of the Hub Operator. These steps are as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Configure the Hub API gateways that handle incoming and outgoing data flows from/to DFSPs. Mojaloop employs WSO2 technologies for gateway access, as well as DFSP authorization and authentication for message pass-through via the gateways. The WSO2 product stack can be deployed from code using a continuous integration and deployment (CI/CD) solution, provisioning can be done through automation scripts.")]),e._v(" "),a("li",[e._v("Create users and accounts, configure role-based access control.")]),e._v(" "),a("li",[e._v("Set up the Hub for managing the use cases supported by the Scheme:\n"),a("ul",[a("li",[e._v("Configure Hub ledgers.")]),e._v(" "),a("li",[e._v("Configure Hub notification emails.")]),e._v(" "),a("li",[e._v("Configure settlement model.")]),e._v(" "),a("li",[e._v("Onboard oracles. "),a("br"),e._v("\nMojaloop provides a "),a("a",{attrs:{href:"https://github.com/mojaloop/testing-toolkit-test-cases/tree/master/collections/hub/provisioning/MojaloopHub_Setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("provisioning script"),a("OutboundLink")],1),e._v(" to perform all of the above steps in an automated way using the "),a("a",{attrs:{href:"https://github.com/mojaloop/ml-testing-toolkit",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mojaloop Testing Toolkit (TTK)"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("li",[e._v("Set up simulator DFSPs for initial validation activities. "),a("br"),e._v("\nMojaloop provides "),a("a",{attrs:{href:"https://github.com/mojaloop/testing-toolkit-test-cases/tree/master/collections/hub/provisioning/MojaloopSims_Onboarding",target:"_blank",rel:"noopener noreferrer"}},[e._v("provisioning scripts"),a("OutboundLink")],1),e._v(" to perform this step in an automated way using the Mojaloop Testing Toolkit (TTK).")]),e._v(" "),a("li",[e._v("Set up DFSPs in the Hub backend. For each DFSP:\n"),a("ul",[a("li",[e._v("Add DFSP and create a currency for it.")]),e._v(" "),a("li",[e._v("Add callback URLs for all API services.")]),e._v(" "),a("li",[e._v("Add a Net Debit Cap and set initial Position to 0.")]),e._v(" "),a("li",[e._v("Configure DFSP notification emails. "),a("br"),e._v("\nSimilar to previous steps, the configuration of DFSP details can also be done via a provisioning script.")])])])]),e._v(" "),a("h2",{attrs:{id:"testing-and-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-and-validation"}},[e._v("#")]),e._v(" Testing and validation")]),e._v(" "),a("p",[e._v("As DFSPs moves forward in their onboarding journey, they are required to perform tests in each environment. Business validation and technical requirements both need to be met when testing. Details of business validation are defined in the Scheme Rules.")]),e._v(" "),a("p",[e._v("Here are some examples of the testing activities that DFSPs are expected to perform in the various pre-production environments:")]),e._v(" "),a("ul",[a("li",[e._v("end-to-end integration and application layer validation against simulators")]),e._v(" "),a("li",[e._v("end-to-end integration and application layer validation against real, friendly DFSPs")]),e._v(" "),a("li",[e._v("settlement process validation")]),e._v(" "),a("li",[e._v("security setup validation")]),e._v(" "),a("li",[e._v("validation of response time Service Level Agreements (SLAs)")]),e._v(" "),a("li",[e._v("performance testing")])])])}),[],!1,null,null,null);t.default=n.exports}}]);