import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";
class header extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='container'>
          <div className='content'>
            <ul className='menu-left-level-1'>
              <li className='menu'>
                <a href='/' className='menu-level-1'>
                  Trang chủ
                </a>
              </li>
              <li className='menu'>
                <a className='menu-level-1'>Quần áo</a>
                <ul className='menu-left-level-2'>
                  <li className='menu-level-2'>
                    <a>Quần áo nam</a>
                  </li>
                  <li className='menu-level-2'>
                    <a>Quần áo nữ</a>
                  </li>
                </ul>
              </li>
              <li className='menu'>
                <a className='menu-level-1'>Phụ kiện</a>
              </li>
              <li className='menu'>
                <a className='menu-level-1'>Đồ điện tử</a>
                <ul className='menu-left-level-2'>
                  <li className='menu-level-2'>
                    <a>Điện thoại</a>
                  </li>
                  <li className='menu-level-2'>
                    <a>Đồ gia dụng</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className='menu-right-level-1'>
              <li className='menu'>
                <a
                  href='/you-cart'
                  className='fas fa-cart-arrow-down menu-level-1'
                  aria-hidden='true'
                >
                  {" "}
                  <ShoppingCartIcon />{" "}
                </a>
              </li>
              <li className='menu'>
                <a
                  href='/ware-house'
                  className='menu-level-1 fas fa-box-open'
                  aria-hidden='true'
                >
                  {" "}
                  <ShopIcon /> <span>Kho hàng</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
