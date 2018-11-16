# What is this folder?
Components in the folder are registered **globally**, 
which means those are available in every component.
It happens **automatically**, you don't need to import them (see `_global.js`).
Global registeration is for convenience, because they will be used very frequently. 

# Naming
Please use PascalCase for file name and `.vue` for its extention.
Every component name should start from `Base` word, for example:
`BaseNavigationItem.vue`