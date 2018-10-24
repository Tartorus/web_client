import React from 'react'
import { urlsConstants } from '../../_constants';
import { request } from '../../_helpers';
import './ideas.css'

class Ideas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ideasList: []
        }
    }

    componentWillMount(){
        request.get(urlsConstants.get_ideas)
            .then(response => {
                if (response.status === 200){
                    response.json().then(data => {
                        let ideas = data.idea_info_list;
                        if (ideas) {
                            this.setState({ideasList: ideas})
                        }
                    })
                }
                else {
                    console.warn(response);
                }
            })
    }

    renderIdea(idea){
        let duration = Number((idea.matdays / 365).toFixed(2));
        return (
            <div className='col-md-4 col-sm-6 col-xs-12 idea'>
                <img className='idea__image' src={idea.image_url}/><h3>{idea.name}</h3><br/>
                <div className='idea__desc'>
                    <b>{idea.idea_yield}% на {duration} года</b><br/>
                    Цена продажи: {idea.offer_price}<br/>
                    Цена покупки: {idea.bid_price}
                </div>
            </div>
        )
    }

    createIdeaList(){
        var list  = [];
        if (this.state.ideasList.length > 0){
            this.state.ideasList.forEach(idea => {
                list.push(this.renderIdea(idea))
            })
        };
        return list;
    }

    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {this.createIdeaList()}
                </div>
            </div>
        );
    }
}

export { Ideas };
