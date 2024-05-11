node{
	stage("SCM Checkout"){
		git "https://github.com/arbaazahmad16/ahmad16-repo"
	}
	stage("Compile-Package"){
		// Get maven home path
		def mvnHome = tool name: 'maven-1', type: 'maven'
		sh "${mvnHome}/bin/mvn package"
	}
i}
