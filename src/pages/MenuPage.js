import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import { StoreContext } from "../store"
import MenuList from "../components/MenuList";
const { Header, Content, Footer } = Layout;
function MenuPage() {
  const { state: { menuList } } = useContext(StoreContext);
  return (
    <Layout className="container main-layout">
      
      <Layout className="">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <MenuList menus={ menuList}/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MenuPage;
