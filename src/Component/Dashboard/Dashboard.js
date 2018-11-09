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
      let res = await axios.get('/api/punches')
            .then(res => this.setState({ punches: res.data }))
            console.log(res)
    }

    handleDelete = index => {
        axios.delete(`/api/punches/${index}`)
            .then(res => this.setState({ items: res.data }))
        console.log('Deleted')
    }

    render() {
        const punch = this.state.punches
        return (
            <div>
                <div>Dashboard</div>
                <div>
                    <ul>
                        {punch.map((punch, index) => {
                            console.log(punch)
                            return <Punch punch={punch} handleDelete={this.handleDelete} index={index}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}