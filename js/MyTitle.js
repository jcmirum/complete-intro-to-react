
var MyTitle = React.createClass({
  render () {
    return (
      div(null,
         h1(null, this.props.title)
      )
    )
  }
})

ReactDOM.render(MyFirstComponent, document.getElementById('app'))

var MyTitleFact = React.createFactory(MyTitle)
var MyFirstComponent = (
  div, null,

  // change MyTitle's inside h1
  h1({ style: {color: this.props.color} }, this.props.title)

  // change MyFirstComponent inside div
  MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
  MyTitleFact({title: 'Use props everywhere!', color: 'mediumaquamarine'}),
  MyTitleFact({title: 'Props are the best!', color: 'peru'})

)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))