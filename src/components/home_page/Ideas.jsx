import React from 'react'
import { urlsConstants } from '../../_constants';
import { request } from '../../_helpers';


class Ideas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ideasList: []
        }
    }

    componentWillMount(){
        console.log('LOAD IDEAS');
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

    createIdeaList(){
        var list  = [];
        console.log(this.state.ideasList.length);
        if (this.state.ideasList.length > 0){
            for (let i=0; i < this.state.ideasList.length; i++){

                let idea = this.state.ideasList[i];
                let duration = Number((idea.matdays / 365).toFixed(2))
                list.push(
                    <div className='well' key={idea.id}>
                        <div>{idea.name}</div>
                        <div>{idea.idea_yield}% на {duration} года</div>
                        <div>Цена продажи: {idea.offer_price}</div>
                        <div>Цена покупки: {idea.bid_price}</div>
                    </div>
                )
            }
        };
        return list;
    }

    render(){
        return (
            <div>
                {this.createIdeaList()}
            </div>
        );
    }
}

export { Ideas };
