example: node_modules components
	./bin/examples.io -p 8000 -e basic

node_modules: package.json
	@npm install

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: run clean
