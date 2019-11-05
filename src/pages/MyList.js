import React, {Component} from 'react';
class MyList extends Component{
    render(){
        const naw=this.props.mylist.map((item, index)=>{
                return    <img key={index} src={item}/>
            
        })
        return(
            <div>
               {naw}
               <button
            </div>
        )
    }

}
export default MyList;
