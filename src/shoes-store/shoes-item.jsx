import React, { Component } from 'react'

export default class Shoesitem extends Component {
  render() {

    const item = this.props.shoes;
    
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">${item.price}</p>
            <div className="d-flex gap-1">
              <button
                // onClick={() => {
                //   //1. chaỵ hàm này
                //   onChangeSanPham(item); // 2. gọi onChangeSanPham
  
                //   // onChangeSanPham gọi thì nó sẽ gọi handleChangeSanPhamChiTiet
                // }}
                className="btn btn-primary"
              >
                Xem Chi Tiết
              </button>
  
              <button
                // onClick={() => {
                //   onAddSanPham(item);
                // }}
                className="btn btn-primary"
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
