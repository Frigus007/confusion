import React ,{Component} from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="coll-12 col-md-5">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}  />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }

}