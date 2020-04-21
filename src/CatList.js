// write your CatList component here
import React from 'react'

export default class CatList extends React.Component{
    render(){
        return (
            <div>
                {this.props.loading ? <h3>Content Loading...</h3> : null}
                {this.props.catPics.map(pic => 
                    <img src={pic.url} alt='CAT'></img>
                )}
            </div>
        )
    }
}