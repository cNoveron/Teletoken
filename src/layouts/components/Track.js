import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { DateFormatInput } from 'material-ui-next-pickers'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        width: '100%',
        backgrounColor: 'red'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Track extends Component {
    constructor(props) {
        super(props)
        this.types = [
            { id: 1, label: 'Portal de empleados' },
            { id: 2, label: 'Banamex (Depósito sucursal)' },
            { id: 3, label: 'Centro de atención telefónica CAB' },
            { id: 5, label: 'Bancanet' },
            { id: 7, label: 'Banamex (cajeros automáticos)' },
            { id: 10, label: 'iZettle dispositivos celulares' },
            { id: 11, label: 'Terminal Electrónica' },
            { id: 12, label: 'Farmacias del ahorro' },
            { id: 13, label: 'Telcel' },
            { id: 14, label: 'Telmex' },
            { id: 16, label: 'Alcancía Digital Teletón' },
            { id: 17, label: 'Donativo en Teleton.org' },
        ]
        this.state = {
            type: '',
            date: ''
        }
    }

    handleChange = event => {
        console.log('event.target', event.target)
        this.setState({ [event.target.name]: event.target.value });
    }

    setDate = (date) => this.setState({ date })

    render() {
        const { type, date } = this.state
        return (
            <section id="track" className="wow fadeInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Monitorear mi donativo</h1>
                            <form autoComplete="off">
                                <FormControl className="select-type">
                                    <InputLabel htmlFor="donation-type">Medio de donación:</InputLabel>
                                    <Select
                                        value={type}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'type',
                                            id: 'donation-type',
                                        }}
                                        className=""
                                    >
                                        <MenuItem value="">
                                            <em>- Seleccione</em>
                                        </MenuItem>
                                        {this.types.map(function (item) {
                                            return <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>

                                <hr />

                                {type && (
                                    <FormControl className="select-type">
                                        <InputLabel htmlFor="date-input" id="date-input">Fecha:</InputLabel>
                                        <DateFormatInput name="date-input" 
                                            value={date} 
                                            onChange={this.setDate} />
                                    </FormControl>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default withStyles(styles)(Track);
