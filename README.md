Just the millionth node project-template, because none of the existing ones fit my needs. Ultra lightweight.

Production-dependencies:

- Awilix
- Winston
- Dotenv

Dev-dependencies:

- Typescript
- Lint
- Jest

---

Just run this, change the package-information and modify the lint-rules if you want.
Use with [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

```shell script
function init_project() {
    TARGET_DIR=${1:-.}
    git clone https://github.com/leonbrandt/node-ts-boilerplate.git $TARGET_DIR
    cd $TARGET_DIR
    rm -rf .git
    ncu -u
    npm install
}
```

```shell script
init_project my-awesome-project
```
