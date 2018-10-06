import React, { Component } from 'react'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
            type: ''
        }
    }
    render() {
        const { type } = this.state
        return (
            <section id="track" className="wow fadeInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Rastrear donativos</h1>
                            <form autoComplete="off">
                                <FormControl>
                                    <InputLabel htmlFor="donation-type">Medio de donación:</InputLabel>
                                    <Select
                                        value={type}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'type',
                                            id: 'donation-type',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>- Seleccione</em>
                                        </MenuItem>
                                        {this.types.map(function (item) {
                                            return <MenuItem value={item.id}>{item.label}</MenuItem>
                                        })}
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Track
