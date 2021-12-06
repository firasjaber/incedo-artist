test:
	echo "Specifiy an option"

build:
	docker build -t artists-api -f Dockerfile .

run:
	docker run -p 9000:9000 -d artists-api