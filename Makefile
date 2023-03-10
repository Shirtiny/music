.DEFAULT_GOAL := build

init:
	@echo "Initialising the project"
	@sudo chmod -R 777 .scripts
	@./.scripts/init.sh

build_arch: test
	@echo "โ"

clean:
	@echo "๐ Cleaning..."
	@rm -Rf dist

clean_all:
	@echo "๐งจ Clean all"
	@rm -Rf node_modules package-lock.json yarn.lock

test:
	@echo "Testing..."
	@./.scripts/test.sh

build: init clean test
	@echo "๐ฉโ๐ญ Building..."
	@./.scripts/build.sh

version:
	@echo "๐ฉ Version..."

publish: version build
	@echo "๐ฆ Publish package..."

start:
	yarn dev
