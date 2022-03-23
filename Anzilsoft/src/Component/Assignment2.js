import React from "react";
import style from './style.css'

export default class Assignment2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      fields: [],
      Fnamefield: { value: '', error: '' },
      Lnamefield: { value: '', error: '' },
      
      tablerows: []
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    
    this.handleLastName = this.handleLastName.bind(this);
    this.addRow = this.addRow.bind(this);
  }
  handleFirstName(e) {
    this.setState({
      Fnamefield: {
        value: e.target.value,
        error: false
      }
    })
  }
 
  handleLastName(e) {
    this.setState({
      Lnamefield: {
        value: e.target.value,
        error: false
      }
    })
  }

  addRow(e) {
    e.preventDefault();
    var newdata = { fname: this.state.Fnamefield.value, lname: this.state.Lnamefield.value }
    // //take the existing state and concat the new data and set the state again
    this.setState({ tablerows: this.state.tablerows.concat(newdata), flag: true });

    const fname1 = this.state.Fnamefield;
   
    const lfname1 = this.state.Lnamefield;

    if (fname1.value !== "") {
      const newName = [...this.state.fields, fname1]
      this.setState({
        fields: newName,
        Fnamefield: {
          value: '',
          error: ''
        }
      })
    }

    
    if (lfname1.value !== "") {
      const newMail = [...this.state.fields, lfname1]
      this.setState({
        fields: newMail,
        Lnamefield: {
          value: '',
          error: ''
        }
      })
    }

  }


  render() {

    return (
      <div className="App" style={{ "border-top": "1px solid black" }}>
           <h2>Assignment - 2</h2>
      
        <form >
         First Name :-  <input
            type="text"
            placeholder=" First Name"
            value={this.state.Fnamefield.value}
            onChange={this.handleFirstName} />       <br />
          
          Last Name :- <input
            type="text"
            placeholder="Last Name"
            value={this.state.Lnamefield.value}
            onChange={this.handleLastName} />          <br />
          <div>
            <button onClick={this.addRow}>ADD</button>
          </div>
        </form>

        {this.state.tablerows.length > 0 ?
          <table style={{ "backgroundColor": "rgb(192, 217, 236)" }}>
            <thead style={{ "backgroundColor": "red", "color": "white" }}>
              <tr style={{ "height": "50px" }}>
                <th> First Name</th>
               
                <th>Last Name </th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.tablerows.map((row, index) =>
                <tr key={index}>
                  <td> <input
                    type="text"
                    value={row.fname}
                     /></td>
                  
                  <td> <input
                    type="text"
                    value={row.lname}
                     /></td>
                  
                </tr>)}
            </tbody>
          </table> : ""}
      </div>
    );
  }
}