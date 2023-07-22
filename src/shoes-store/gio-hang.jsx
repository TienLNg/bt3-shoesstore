import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { gioHang, onDeleteSp, onChangeQuantity } = this.props;
    return (
      <div>
        <h1>Giỏ hàng</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{}}>
            {gioHang.map((sp) => {
              return (
                <tr key={sp.id}>
                  <td>{sp.name}</td>
                  <td>{sp.price}</td>
                  <td>
                    <img
                      style={{
                        width: 100,
                      }}
                      src={sp.image}
                      alt=".."
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        onChangeQuantity({
                          quantity: 1,
                          id: sp.id,
                        });
                      }}
                      className="btn btn-success"
                      style={{
                        fontSize: 20,
                      }}
                    >
                      +
                    </button>
                    <span
                      style={{
                        fontSize: 20,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                    >
                      {sp.soLuong}
                    </span>
                    <button
                      onClick={() => {
                        onChangeQuantity({
                          quantity: -1,
                          id: sp.id,
                        });
                      }}
                      className="btn btn-success"
                      style={{
                        fontSize: 20,
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>${sp.soLuong * sp.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        onDeleteSp(sp.id);
                      }}
                      className="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
