import React, { Component } from 'react';
class Statefull extends Component {
    state = {
        warna: "hitam"
    }
    gantiWarna = () => {
        this.setState({
            warna: "biru"
        })
    }
    render = () =>  {
        return (
            <div>
            <h1>warna laptopku {this.state.warna}</h1>
            <button onClick={() => this.gantiWarna()}>Ubah jadi biru</button>
            </div>
        )
    }
}

export default Statefull;