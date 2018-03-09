import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatureView from './CreatureView'

class HomeView extends Component {

   


    render() {

        return (
            <div>
                {
                    this.props.creature.map((monster, i) => {
                        return (
                            <div>
                                <Link to={`/creatures/${monster._id}`}><h1>{monster.name}</h1></Link>

                                
                            </div>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default HomeView;