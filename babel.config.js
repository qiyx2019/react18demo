module.exports = {
  presets: [
    ["@babel/preset-env",{
      "useBuiltIns":"usage",
      "corejs":{
        "version":3,
        "proposals":true
      },
      "targets":{
        "chrome":"58",
        ie:"11"
      }
    }],
    ['@babel/preset-flow'],
    ['@babel/preset-react', {targets: {node: 'current'}}] // add this
  ]
};