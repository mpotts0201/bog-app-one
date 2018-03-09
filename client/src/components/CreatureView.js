import React, { Component } from 'react';


class CreatureView extends Component {

    state = {
        creature: []
    }
    
    render() {
        const creature = this.props.creature

        const oneCreature = creature.find((monster)=>{
           return monster._id === this.props.match.params.id
        })

        console.log(oneCreature)

        return (

            <div>
                <h1>{oneCreature && oneCreature.name}</h1>
            </div>
        )



    }


}

export default CreatureView;