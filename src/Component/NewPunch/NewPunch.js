import React, { Component } from 'react'
import axios from 'axios'

export default class NewPunch extends Component {
    constructor() {
        super()
        this.state = {
            punch_date: '',
            punch_day: '',
            punch_time: '',
            punch_type: ''
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handlePunchChange = this.handlePunchChange.bind(this);
        this.addNewPost = this.addNewPost.bind(this);
    }

    handleDateChange = (e) => {
        this.setState({ punch_date: e.target.value })
        console.log(this.state.punch_date)
    }

    handleDayChange = (e) => {
        this.setState({ punch_day: e.target.value })
        console.log(this.state.punch_day)
    }

    handleTimeChange = (e) => {
        this.setState({ punch_time: e.target.value })
        console.log(this.state.punch_time)
    }

    handlePunchChange = (e) => {
        this.setState({ punch_type: e.target.value })
        console.log(this.state.punch_type)
    }

    addNewPost = () => {
        const { punch_date, punch_day, punch_time, punch_type } = this.state;
        axios.post('/api/punches', { punch_date, punch_day, punch_time, punch_type })
            .then(window.location = '/#/')
    }

    render() {
        return (
            <div>
                <div>NewPunch</div>
                <div>
                    <form>
                        Date:
                    <input type='date' name='date' onChange={this.handleDateChange} />
                        Day:
                    <select onChange={this.handleDayChange}>
                            <option value=''>--</option>
                            <option value='Sunday'>Sunday</option>
                            <option value='Monday'>Monday</option>
                            <option value='Tuesday'>Tuesday</option>
                            <option value='Wednesday'>Wednesday</option>
                            <option value='Thursday'>Thursday</option>
                            <option value='Friday'>Friday</option>
                            <option value='Saturday'>Saturday</option>
                        </select><br />
                        Time:
                    <input type='time' name='time' onChange={this.handleTimeChange} />
                        Punch Type:
                    <select onChange={this.handlePunchChange}>
                            <option value=''>--</option>
                            <option value='In'>IN</option>
                            <option value='Out'>OUT</option>
                        </select><br />
                        <button type='submit' value='create_punch' onClick={() => this.addNewPost()}>Create Punch</button>
                        <button type='reset' value='cancel'>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}
