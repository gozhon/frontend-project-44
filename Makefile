install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-games:
	node bin/brain-calc.js

publish: 
	npm publish --dry-run

code-quality: code-format code-fix
	npx eslint .

code-fix:
	npx eslint . --fix

code-format:
	npx prettier --write .