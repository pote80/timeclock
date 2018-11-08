import React, { Component } from 'react'

export default class NewPunch extends Component {
    constructor() {
        super()
        this.state = {
            date: '',
            day: '',
            time: '',
            punchType: ''
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange=(e)=>{
        this.setState({date: e.target.value})
        console.log(this.state.date)
    }

    handleDayChange=(e)=>{
        this.setState({day: e.target.value})
        console.log(this.state.day)
    }

    handleTimeChange=(e)=>{
        this.setState({time: e.target.value})
        console.log(this.state.time)
    }

    handlePunchChange=(e)=>{
        this.setState({punchType: e.target.value})
        console.log(this.state.punchType)
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
                            <option value='sunday'>Sunday</option>
                            <option value='monday'>Monday</option>
                            <option value='tuesday'>Tuesday</option>
                            <option value='wednesday'>Wednesday</option>
                            <option value='thursday'>Thursday</option>
                            <option value='friday'>Friday</option>
                            <option value='saturday'>Saturday</option>
                        </select><br />
                        Time:
                    <input type='time' name='time' onChange={this.handleTimeChange} />
                        Punch Type:
                    <select onChange={this.handlePunchChange}>
                            <option value=''>--</option>
                            <option value='in'>IN</option>
                            <option value='out'>OUT</option>
                        </select><br />
                        <button type='submit' value='create_punch'>Create Punch</button>
                        <button type='reset' vlaue='cancel'>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}
