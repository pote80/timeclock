import React, { Component } from 'react'
import axios from 'axios'

export default class EditPunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            punch_date: '',
            punch_day: '',
            punch_time: '',
            punch_type: ''
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handlePunchChange = this.handlePunchChange.bind(this);
        this.editPost = this.editPost.bind(this);
    }

    async componentDidMount() {
        let id = this.props.match.params.id
        await axios.get(`/api/punches/${id}`)
            .then(res => {
                let punch = res.data[0]
                this.setState({ id: punch.id, punch_date: punch.punch_date, punch_day: punch.punch_day, punch_time: punch.punch_time, punch_type: punch.punch_type })
            })
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

    editPost = () => {
        const { punch_date, punch_day, punch_time, punch_type, id } = this.state;
        axios.put(`/api/punches/${id}`, { id, punch_date, punch_day, punch_time, punch_type })
            .then(window.location = '/#/')
    }

    render() {
        return (
            <div>
                <div>NewPunch</div>
                <div>
                    <form>
                        Date:
                    <input type='date' name='date' onChange={this.handleDateChange} value={this.state.punch_date} />
                        Day:
                    <select onChange={this.handleDayChange} value={this.state.punch_day}>
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
                    <input type='time' name='time' onChange={this.handleTimeChange} value={this.state.punch_time} />
                        Punch Type:
                    <select onChange={this.handlePunchChange} value={this.state.punch_type}>
                            <option value=''>--</option>
                            <option value='In'>IN</option>
                            <option value='Out'>OUT</option>
                        </select><br />
                        <button value='edit_punch' onClick={() => this.editPost()}>Edit Punch</button>
                        <button type='reset' value='cancel' onClick={() => window.location = '/#/'}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}
