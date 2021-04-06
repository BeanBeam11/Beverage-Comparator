import { useContext,useState} from "react";
import {StoreContext} from "../store";
import MenuItem from "./MenuItem";
import {menuContentSet} from "../actions";
import {Select} from 'antd';
import { getJSON } from "../api";
const {Option} =Select;
function handleChange(value) {
  
}

export default function MenuList({menus}) {
const {dispatch} = useContext(StoreContext);
const onClickMenu=(value)=>{ 
    menuContentSet(dispatch,getJSON(value.key));
    console.log(value.key);
}

  return (
    <>
    <Select
            className="menu-select"
            labelInValue
            defaultValue={{ value: 'KBK' }}
            style={{ width: 250 }}
            onChange={onClickMenu}
          >
            <Option value="/kebuke">可不可熟成紅茶</Option>
            <Option value="/fiftylan"> 五十嵐</Option>
            <Option value="macu">麻古茶坊</Option>
            <Option value="milkshop">迷克夏</Option>
            <Option value="Ching-Shin">清心福全</Option>
          </Select>
    <div className="menu">
      <div className="menu-title">
        <p className="menu-title-name">品項</p>
        <p className="menu-title-price">價格</p>
        <p className="menu-title-compare">加入比較</p>
      </div>
         
            
            <MenuItem menu={menus}/>

        
        </div>
    </>
       
     
  );
}

