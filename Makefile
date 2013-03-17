JADE=$(shell find node_modules -name "jade" -type f)
CLIENT_JADE=$(shell find node_modules -name "clientjade" -type f)
DEPLOY=deploy

jade:
	$(JADE) -O $(DEPLOY) app/index.jade
	if [ ! -e $(DEPLOY)/scripts ]; then mkdir $(DEPLOY)/scripts; fi
	$(CLIENT_JADE) app/scripts/*.jade > $(DEPLOY)/scripts/templates.js

js:
	cp app/scripts/*.js $(DEPLOY)/scripts/

libs:
	cp lib/*.js $(DEPLOY)/scripts/

deploy: clean jade js libs

clean:
	rm -rf $(DEPLOY)
