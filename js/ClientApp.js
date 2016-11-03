const div = React.DOM.div
const h1 = React.DOM.h1

const MyTitle = React.createClass({ //component class
  render(){  //render method
    return(
      div(null,
        h1(null, 'Check out this Component!')
        )
      )
  }
})

const MyFirstComponent = (div(null,
  React.createElement(MyTitle, null),
  React.createElement(MyTitle, null),
  React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))