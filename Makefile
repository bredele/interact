example: node_modules components
	@NODE_PATH=lib ./bin/examples.io -e basic

node_modules: package.json
	@npm install

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: run clean
