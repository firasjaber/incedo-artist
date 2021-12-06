test:
	echo "Specifiy an option"

build:
	docker build -t artists-api -f Dockerfile .

run:
	docker run -p 9000:9000 --name=artists -d artists-api

start:
	$(MAKE) build && $(MAKE) run

stop:
	docker stop artists && docker rm artists