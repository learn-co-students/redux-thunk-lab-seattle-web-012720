import React, { Component } from 'react';
import CatList from './CatList'
import { connect} from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
  componentDidMount(){
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.cats)
    return (
      <div>
        <h1>CatBook</h1>
        <CatList loading={this.props.loading} catPics={this.props.cats}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
