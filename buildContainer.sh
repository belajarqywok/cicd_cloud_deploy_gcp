read -p "Hello World Demo container version (e.g. 1.0)? " version
version=${version:-1.0}
gcloud builds submit --tag gcr.io/$GOOGLE_CLOUD_PROJECT/hello-world-demo:$version .