node{
	stage("SCM Checkout"){
		git "https://github.com/arbaazahmad16/ahmad16-repo"
	}
	stage("Compile-Package"){
		sh 'mvn package'
	}
}
