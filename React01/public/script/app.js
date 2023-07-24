console.log('inside app.js')

const template =React.createElement("h1",null,"this is a template")
const root = document.getElementById('app')
ReactDOM.render(template,root)