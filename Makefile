
# Docker image and tag
IMAGE := ghcr.io/aliezan/personal-portfolio
TAG := latest

# Run the container
.PHONY: run
run:
	docker run --rm -it -p 3000:3000 $(IMAGE)

# Build the container
.PHONY: build
build:
	docker build . -t $(IMAGE):$(TAG)

# Stop the running container
.PHONY: stop
stop:
	docker stop $(shell docker ps -q --filter ancestor=$(IMAGE))

# View container logs
.PHONY: logs
logs:
	docker logs $(shell docker ps -q --filter ancestor=$(IMAGE))

# Open a shell in the running app container
.PHONY: shell
shell:
	docker exec -it $(shell docker ps -q --filter ancestor=$(IMAGE)) sh

# Clean up Docker resources
.PHONY: clean
clean:
	docker system prune -f