import React from "react";

export default class FormElement extends React.Component {

    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        Nama: ${this.state.nama}
        Jurusan: ${this.state.jurusan}
        Gender: ${this.state.gender}
        Alamat: ${this.state.alamat}
        Member: ${this.state.member ? "YES" : "NO"} 
        `)
    }

    render() {
        return(

            <div style={{margin: '100px auto',width: '400px', border: '1px solid black', padding: '20px'}}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama: <input type="text" name="nama" defaultValue={this.props.nama}
                        onChange={e => this.setState({nama: e.target.value})} />
                    </label>
                    <br />
                    <label>
                        Jurusan: <select name="jurusan" onChange={e => this.setState({jurusan: e.target.value})}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual </option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Jenis Kelamin: 
                        <input type="radio" value="Laki-Laki" name="gender"
                        onChange={e => this.setState({gender: e.target.value})} /> Laki-Laki
                        <input type="radio" value=  "Perempuan" name="gender"
                        onChange={e => this.setState({gender: e.target.value})} /> Perempuan
                    </label>
                    <br />
                    <label>
                        Alamat: <textarea cols="30" rows="10" name="alamat"
                        onChange={e => this.setState({alamat: e.target.value})}/>
                    </label>
                    <br />
                    <label>
                        Member: <input type="checkbox" name="member"
                        onChange={e => this.setState({member: e.target.checked})}/>
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}