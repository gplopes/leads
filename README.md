# Packages DX

### Eslint

##### 1. Eslint Config Only:

Based only on the classic configuration file and all the plugins are installed directly on the project.

_E.g:_
[Toby uses common config](/packages/toby)

[Toby's package](/packages/toby/package.json)

##### 2. Eslint Plugin +:

More programmatically way to handle the rules and plugins, this way only `eslint-plugin-leads` is necessary to be installed and all the rest will be managed by the plugin

_E.g:_
[Billy uses plugin+](/packages/billy)

[Billy's package](/packages/billy/package.json)

---

### Why

Unfortunately, **Eslint** does not support sharable configs between configs out-of-the-box, and forces to download all the plugins.

**The Plugin** uses the `CLIEngine` to build the eslint config and inspect what are the plugins use.

---

### Process

1. Create the classic configs and rules: [Config & Rules](/eslint-plugin-leads/configs)

2. After config is built, the plugin inspect all plugins and load all custom rules locally. _All the 3rd party rules are imported now as local rules_

3. The rule's name receives a prefixed so it matches to the custom rules

##### Figure e.g:

```js
// eslint-plugin1.js
{
  rules: {
    'no-async': () => ...
  }
}

// after loading it locally
{
  rules: {
    'plugin1/no-async': () => ..
  }
}
```

```js
// classic eslint config
{
  plugins: [plugin1, plugin2]
  rules: {
    'plugin1/no-async': OFF
  }
}

// after transformation
{
  plugins: []
  rules: {
    'leads/plugin1/no-async': OFF
  }
}
```
