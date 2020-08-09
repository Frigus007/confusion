import React ,{Component} from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';
class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    renderComment(comments){
        const comm=comments.map((comment)=>{
            return(
                <div key={comment.id}>
                    {comment.comment}
                    <br></br>
                    {comment.author}{comment.date}

                </div>
            );
        });
        return(
            <div>
            {comm}
            </div>
        );
    }

    render(){
        const dish=this.props.selectedDish;
        if(dish!=null){    
        return(
            <div className='row'>
                
            <div key={dish.id} className="col-sm-12 col-xs-12 col-md-5 m-1">
            <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
            </Card>
            </div> 
            
            <div className="col-sm-12 col-xs-12 col-md-5 m-1">
            <Card className='card p-3 text-left'>
                <h4>Comments</h4>
                <CardBody>
               {this.renderComment(dish.comments)}
                </CardBody>
               
               </Card>
            
            </div>
            </div>
        );
        }
        else{
            return(
                <div className='row'>

                </div>
            );
        }
    };
}
export default Dishdetail;