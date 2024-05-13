node{
	stage("SCM Checkout"){
		git "https://github.com/arbaazahmad16/ahmad16-repo"
	}
	stage("Compile-Package"){
		// Get maven home path
		def mvnHome = tool name: 'maven-1', type: 'maven'
		sh "${mvnHome}/bin/mvn package"
	}
	stage("Notification-Slack"){
		slackSend baseUrl: 'https://hooks.slack.com/services/', 
		channel: 'jenkins-pipeline-demo', 
		color: 'good', 
		message: 'Welcome to my slack notification using jenkins pipeline !!!', 	
		teamDomain: 'My-AWS-Slackworkspace.slack.com', 
		tokenCredentialId: 'slack-demo', 
		username: 'javahomecloud'
	}
}
