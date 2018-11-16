import React, { Component } from 'react'
import axios from 'axios'
import Punch from '../Punch/Punch'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            punches: []
        }
    }

    async componentDidMount() {
        await axios.get('/api/punches')
            .then(res => this.setState({ punches: res.data }))
    }

    handleDelete = (id) => {
        axios.delete(`/api/punches/${id}`)
            .then(res => this.setState({ punches: res.data }))
        console.log('Deleted')
    }

    render() {
        const punch = this.state.punches
        return (
            <div className='punches'>
                <div className='header'>My Punches</div>
                <div>
                    <ul>
                        {punch.map((punch, index) => {
                            return <Punch punch={punch} handleDelete={() => this.handleDelete(punch.id)} index={index} />
                        })}
                    </ul>
                </div>
                <div><button onClick={() => window.location = '/#/newpunch'}>New Punch</button></div>
            </div>
        )
    }
}