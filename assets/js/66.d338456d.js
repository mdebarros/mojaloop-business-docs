(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{477:function(e,t,o){"use strict";o.r(t);var a=o(23),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"release-management"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#release-management"}},[e._v("#")]),e._v(" Release management")]),e._v(" "),o("p",[e._v("Release management handles the processes around managing, planning, scheduling, and controlling a software change through deployment and testing across various environments.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("The processes described in this section represent best practices and act as recommendations for organizations fulfilling a Hub Operator role.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("This section references a “Mojaloop Support team”: a team dedicated to running Support services for the technical operations of a Mojaloop Hub. Note that this team can be either an insourced or an outsourced unit, depending on the level of expertise or capacity within your organization. If you decide to outsource Support functions, there are organizations within the Mojaloop community that provide different levels of Support as a service. (For more information and referrals, contact the Mojaloop Foundation.)")])]),e._v(" "),o("h2",{attrs:{id:"release-components-and-environments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#release-components-and-environments"}},[e._v("#")]),e._v(" Release components and environments")]),e._v(" "),o("p",[e._v("When accepting new releases from Mojaloop Open Source for Switch services and other components that are needed, the releases are taken through a series of testing activities in progressively higher environments, starting with development/QA environments and ending with production-level testing.")]),e._v(" "),o("p",[e._v("The recommended environment setup comprises of multiple environments all serving different purposes, as depicted in the diagram below.")]),e._v(" "),o("img",{attrs:{src:"/release_mgmt.png",width:"80%",height:"80%"}}),e._v(" "),o("p",[e._v("A Hub-specific implementation of Mojaloop is built on a number of service components (Mojaloop OSS, extensions or other components, potential customizations), and releases will include new features, enhancements, or bug fixes of all of these components.")]),e._v(" "),o("img",{attrs:{src:"/release_service_components.png",width:"70%",height:"70%"}}),e._v(" "),o("h2",{attrs:{id:"development-and-testing-definition-of-done"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-and-testing-definition-of-done"}},[e._v("#")]),e._v(" Development and testing (Definition of Done)")]),e._v(" "),o("p",[e._v("Standard development and QA practices – followed by the Mojaloop Development/Product Delivery team – include the following as part of the Definition of Done. The recommendation is for the Hub Operator to adopt a similar strategy.")]),e._v(" "),o("ul",[o("li",[e._v("Unit tests developed for every piece of code written.")]),e._v(" "),o("li",[e._v("Code, unit tests, and documentation have been peer reviewed.")]),e._v(" "),o("li",[e._v("Integration tests have been developed and executed.")]),e._v(" "),o("li",[e._v("Full regression tests have been executed successfully on commit (merge to master branch).")]),e._v(" "),o("li",[e._v("Release notes have been created with the following details:\n"),o("ul",[o("li",[e._v("Description of changes")]),e._v(" "),o("li",[e._v("List of changed components/services")]),e._v(" "),o("li",[e._v("List of user stories and bugs in the release")]),e._v(" "),o("li",[e._v("Highlight of any fundamental (breaking) changes impacting any functionality, API solution, or system architecture")])])]),e._v(" "),o("li",[e._v("Deployment runbook created, with deployment and rollback instructions including environment variables, database update scripts, and deployment prerequisites.")]),e._v(" "),o("li",[e._v("Maintenance of regression test definitions, baseline test results from Mojaloop OSS, and Scheme-specific validation criteria (tests) added on top of them.")]),e._v(" "),o("li",[e._v("Maintenance of a knowledge base of any new or significant changes to functionality, products, architecture, and so on, regarding Mojaloop OSS and other components, as well as customizations done for the Scheme. The knowledge base acts as the basis of knowledge handover to the Operations team. This handover includes full review of the deployment runbook and other release artifacts, such as release packages and database scripts, which will help the Operations team greatly in day-to-day operations, validation, debugging of issues, and maintenance.")])]),e._v(" "),o("h2",{attrs:{id:"mojaloop-releases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mojaloop-releases"}},[e._v("#")]),e._v(" Mojaloop releases")]),e._v(" "),o("p",[e._v("The standard practice for Mojaloop releases is as follows:")]),e._v(" "),o("ul",[o("li",[e._v("All new versions of the individual applications, components, and microservices that make up Mojaloop, are available via Helm charts in the public repositories here: "),o("a",{attrs:{href:"https://github.com/mojaloop/helm/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/mojaloop/helm/releases"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Unit tests and some functional integration tests are produced with each component version.")]),e._v(" "),o("li",[e._v("The Mojaloop release also includes automated end-to-end regression tests. Test suites are versioned, with the version number corresponding to the version number of the Mojaloop release.")]),e._v(" "),o("li",[e._v("A release package is produced, once every Program Increment (PI), for new versions of Mojaloop. This includes upgrades to individual applications, components, and microservices within Mojaloop. "),o("br"),e._v(" "),o("br"),e._v("\nA Program Increment is a timeboxed interval during which an Agile team delivers incremental value.")]),e._v(" "),o("li",[e._v("All Mojaloop maintenance updates, new features, and bug fixes are made available to users of Mojaloop as part of the release cycles, once in each PI period.")])]),e._v(" "),o("h2",{attrs:{id:"product-releases-of-extensions-additional-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#product-releases-of-extensions-additional-components"}},[e._v("#")]),e._v(" Product releases of extensions/additional components")]),e._v(" "),o("p",[e._v("It is recommended that the standard practice for the product releases of extensions/additional components is in line with the Mojaloop release process "),o("router-link",{attrs:{to:"./release-management.html#mojaloop-releases"}},[e._v("above")]),e._v(":")],1),e._v(" "),o("ul",[o("li",[e._v("All new product versions are made available via release packages and described within the release notes.")]),e._v(" "),o("li",[e._v("A release package includes automated end-to-end tests for each product release. Test suites are versioned, with the version number corresponding to the version number of the product release.")]),e._v(" "),o("li",[e._v("Product releases are in line with the Mojaloop release cadence, once in each PI period.")]),e._v(" "),o("li",[e._v("All product maintenance updates, new features, and bug fixes are made available to client DFSPs of extensions/additional products as part of the release cycle, once in each PI period.")])]),e._v(" "),o("h2",{attrs:{id:"bugs-and-hotfixes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bugs-and-hotfixes"}},[e._v("#")]),e._v(" Bugs and hotfixes")]),e._v(" "),o("p",[e._v("Bugs and hotfixes are handled in the following way:")]),e._v(" "),o("ul",[o("li",[e._v("All bug fixes (both Mojaloop and other products) are included in the release packages.")]),e._v(" "),o("li",[e._v("Likewise, hotfixes are also provided via a release. It is not recommended to deploy hotfixes directly from the specific application package releases, as deploying only a single component of a release (as opposed to deploying the release that includes the updated component) can result in the Hub being out of sync with the application package release.")]),e._v(" "),o("li",[e._v("Bugs are tracked, managed, and prioritized as defined in the "),o("router-link",{attrs:{to:"./defect-triage.html"}},[e._v("defect triage process")]),e._v(":\n"),o("ul",[o("li",[e._v("The Service Desk tool is used for managing all bugs.")]),e._v(" "),o("li",[e._v("A Mojaloop Support Triage team with representatives from both Mojaloop and other Product Delivery and Product Management teams are involved in analyzing urgency and impact to determine prioritization of bugs, including resolution planning/scheduling and communication back to the Hub Operator.")])])],1)]),e._v(" "),o("h2",{attrs:{id:"environments-and-qa-strategy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#environments-and-qa-strategy"}},[e._v("#")]),e._v(" Environments and QA strategy")]),e._v(" "),o("p",[e._v("In order to validate a deployment of a newly released Mojaloop version against the latest other products (extensions/additional components), an environment is to be set up by the Scheme with all the components needed along with the specific configuration that the Scheme uses. This allows the QA/validation and/or Mojaloop Support teams (a team dedicated to running Support services for the technical operations of a Mojaloop Hub) to carry out the deployment and testing of Mojaloop releases against the latest versions of other products.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("The environment set up by the Mojaloop Support team for validation should follow a standard infrastructure, replicating or simulating a corresponding production setup as much as possible, so that any issues, bugs can be identified early in the process. A production setup typically includes API gateways, DMZs, cluster setup based on security zones, along with all the required components and customizations (including Scheme Rules) done by the Scheme. The Hub Operator must ensure that their production infrastructure is fully in sync with the Mojaloop Support team’s infrastructure standards.")])]),e._v(" "),o("p",[e._v("Following the successful deployment and validation of a release on the standard infrastructure and architecture, and after successfully running the latest version of Mojaloop and other products, the release is approved and can be shared/made available (via the Support Team’s client server/repo). The Hub team can then schedule the deployment into the Hub Operator’s (potentially bespoke) environment.")]),e._v(" "),o("p",[e._v("The QA strategy employed by the Mojaloop and the extension products’ Product Delivery teams ensures that new code of each and every service component has undergone comprehensive testing before it gets released. The QA strategy of the Mojaloop Support team, on the other hand, should focus on validating the deployability of the integrated service components and the interoperability of the products, guaranteeing that there is a working Mojaloop Switch, which then can be deployed in a Hub Operator’s environment.")]),e._v(" "),o("h2",{attrs:{id:"release-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#release-process"}},[e._v("#")]),e._v(" Release process")]),e._v(" "),o("p",[e._v("The recommendation for Hub implementations is to stay in line with the Mojaloop release cadence of one release every PI period and avoid deploying individual changes directly from the master branch of specific applications, components, or services within Mojaloop. This recommendation ensures that the integrity of the applications remains cleaner and in line with the source repositories.")]),e._v(" "),o("p",[e._v("For every release, the Mojaloop Support team is recommended to take the following steps:")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("Hub Operators must be informed of the target release date well ahead of time.")])]),e._v(" "),o("ol",[o("li",[e._v("The Mojaloop Support team review all release artifacts including release notes and associated documentation, and create or enhance the deployment runbook as soon as the release is made available.")]),e._v(" "),o("li",[e._v("The Mojaloop Support team conduct deployment and validation of the planned Mojaloop and other product releases in a temporary Mojaloop Support environment (using the standard Mojaloop Support infrastructure but matching the client’s – that is, the Hub Operator’s – application versions).")]),e._v(" "),o("li",[e._v("Following the successful deployment and validation of a release on the standard Mojaloop Support infrastructure and architecture, and after successfully testing the latest version of Mojaloop and other products, the release is approved and made available to the Hub Operator.")]),e._v(" "),o("li",[e._v("The Hub Operator team confirm readiness (and optionally, target deployment window) for the deployment into the Hub Operator’s Development environment. "),o("br"),e._v(" "),o("br"),e._v("\nIt is the Hub Operator’s responsibility to carry out deployment into the Development environment and subsequent validation. Alternatively, they can request Mojaloop Support to perform these activities on their behalf.")])]),e._v(" "),o("h3",{attrs:{id:"deployments-by-the-mojaloop-support-team"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deployments-by-the-mojaloop-support-team"}},[e._v("#")]),e._v(" Deployments by the Mojaloop Support team")]),e._v(" "),o("p",[e._v("If the Hub Operator requests the Mojaloop Support team to perform deployment into the Hub Operator’s Development environment, then the Mojaloop Support team sends out an email (or any other form of communication depending on the Hub Operator’s preferences) with information on the target release date, the range of features included in the release, and the deployment window. Following deployment, further communication is sent out to confirm that the deployment has been carried out, validated, and the deployment window has closed.")]),e._v(" "),o("h2",{attrs:{id:"process-flowchart"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#process-flowchart"}},[e._v("#")]),e._v(" Process flowchart")]),e._v(" "),o("img",{attrs:{src:"/release_process.png",width:"65%",height:"65%"}})])}),[],!1,null,null,null);t.default=n.exports}}]);