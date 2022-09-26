# Reproducable memery leak issue with jest and express-rate-limit

## How to reproduce

- First make sure to install all dependencies (`yarn install`)
- Run `npx jest index.spec.js --detect-leaks` and everything is OK!
- Uncomment lines 15-20 in index.js to add another store
- Run `npx jest index.spec.js --detect-leaks` again and now jest detects a memory leak
