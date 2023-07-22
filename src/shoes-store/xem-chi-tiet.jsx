import React, { Component } from 'react'

export default class Xemchitiet extends Component {
    render() {
        const { sanPham } = this.props;
        // const sanPham = this.props.sanPham;
    
        // console.log(sanPham);
    
        return (
          <div>
            <div className="row">
              <div className="col-4">
                <h2>{sanPham.name}</h2>
                <img
                  style={{
                    width: "100%",
                  }}
                  src={sanPham.image}
                  alt=".."
                />
              </div>
              <div className="col-8">
                <h2>Thông tin chi tiết</h2>
                <table className="table">
                  <tbody>
                     <tr>
                      <td>Price:</td>
                      <td>${sanPham.price}</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                      <td>{sanPham.description}</td>
                    </tr>
                    <tr>
                      <td>More Description:</td>
                      <td>{sanPham.shortDescription}</td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
}
