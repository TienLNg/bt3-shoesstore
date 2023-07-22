import React, { Component } from "react";
import Shoesitem from "./shoes-item";
import data from "./data.json";
import Xemchitiet from "./xem-chi-tiet";
import GioHang from "./gio-hang";

export default class Shoesstore extends Component {
  state = {
    spChiTiet: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },

    gioHang: [],
  };

  handleChangeSanPhamChiTiet = (sp) => {
    this.setState({
      spChiTiet: sp,
    });
  };

  handleAddSanPham = (sp) => {
    const indexSp = this.state.gioHang.findIndex((item) => sp.id === item.id);
    let newGioHang = [];

    // -1: chưa có trong giỏ hàng
    if (indexSp === -1) {
      sp.soLuong = 1;
      newGioHang = [...this.state.gioHang, sp];
    } else {
      sp.soLuong += 1;

      this.state.gioHang.splice(indexSp, 1, sp);

      newGioHang = this.state.gioHang;
    }

    this.setState({
      gioHang: newGioHang,
    });
  };

  handleDeleteSp = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa hay không")) {
      const newGioHang = this.state.gioHang.filter((item) => item.id !== id);

      this.setState({
        gioHang: newGioHang,
      });
    }
  };

  handleChangeQuantity = (params) => {
    const { quantity, id } = params;


    const sanPham = this.state.gioHang.find((item) => item.id === id);

    if (!sanPham) return;
    
    if (sanPham.soLuong === 1 && quantity === -1) {
      this.handleDeleteSp(id);
    }else{

      sanPham.soLuong += quantity;
      
      this.setState({
        gioHang: this.state.gioHang,
      })
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title">Shoes Store</h1>

          <div className="row">
            {data.map((item) => {
              return (
                <Shoesitem
                  onAddSanPham={this.handleAddSanPham}
                  onChangeSanPham={this.handleChangeSanPhamChiTiet}
                  shoes={item}
                  key={item.id}
                />
              );
            })}
          </div>

          <div className="mt-5">
            <Xemchitiet sanPham={this.state.spChiTiet} />
          </div>
          <div className="mt-5">
            <GioHang
              onChangeQuantity={this.handleChangeQuantity}
              onDeleteSp={this.handleDeleteSp}
              gioHang={this.state.gioHang}
            />
          </div>
        </div>
      </div>
    );
  }
}
