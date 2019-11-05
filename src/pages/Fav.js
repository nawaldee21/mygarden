import React from 'react'

class MovieRow extends React.Component {
    constructor(props) {
        super(props)
        this.addFavorite = this.addFavorite.bind(this)
        this.state = {
            isFaved: false,
        }
        addFavorite() {
            this.setState({isFaved: true})
            // const fav = "".concat(baseURL, 'movie/', this.props.movie.id ,'?api_key=', APIKEY) 
            myFavorite.push(fav)
        }
        render() {
            const isFaved = this.state.isFaved;
          
    
            if (isFaved) {
                movie = <IsNotFav  mylist={this.props.mylist} posterSrc={this.props.posterSrc} onClick={this.deleteFavorite}/>
            } else {
                movie = <IsFav movie={this.props.movie} posterSrc={this.props.posterSrc} onClick={this.addFavorite}/>
            }
        }
    }
}


extends default Fav; 