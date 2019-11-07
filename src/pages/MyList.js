import React, {Component} from 'react';



class MyList extends Component{
    render(){
        const naw=this.props.mylist.map((item, index)=>{
                return (
                    <div>
                        <img key={index} src={item}/>
                        <button onClick={() => this.props.clearItem(item)}>delete</button>
                    </div>
                )   
            
        })
        return(
            <div>
               {naw}
               <button onClick={() => this.props.clearList()}> delete all</button>
            </div>
        )
    }

}
export default MyList;
