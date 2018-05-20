import Vue from 'vue'
import Router from 'vue-router'
import CityList from "@/components/Locations/CityLIst"
import Shopshow from "../page/shopshow/shopshow"
import SearchHistory from "@/components/Locations/SearchHistory"
import Login from "@/components/User/Login"
import Home from "../page/homepage/homepage"
import Search from "../page/searchpage/searchpage"
import Personal from "../page/personalpage/personalpage"
import Order from "../page/orderpage/orderpage"
import Shopcar from "../page/shopcar/shopcar"
import Balance from "../page/personalpage/balance"
import Integral from "../page/personalpage/integral"
import Coupon from "../page/personalpage/coupon/coupon"
import CouponInfor from "../page/personalpage/coupon/couponinfor"
import Download from "../page/personalpage/download"
import Servercenter from "../page/personalpage/servercenter"
import Vipcenter from "../page/personalpage/vipcenter/vip"
import Accountdetail from "../page/personalpage/accountdetail/accountdetail"
import Detail from "../page/personalpage/detail"
import Setusername from "../page/personalpage/accountdetail/setusername"
import Editaddress from "../page/personalpage/accountdetail/editaddress"
import Newaddress from "../page/personalpage/accountdetail/newaddress"
import Perchasevip from "../page/personalpage/vipcenter/perchasevip"
import Exchangevip from "../page/personalpage/vipcenter/exchangevip"
import Buyrecord from "../page/personalpage/vipcenter/buyrecord"
import VipDescription from "../page/personalpage/vipcenter/vipdescription"
import IntegralDetail from "../page/personalpage/integraldetail/intergraldetail"
import SellerDetail from "../page/personalpage/coupon/sellerdetail"
import BalanceDetail from "../page/personalpage/balacnedetail/balancedetail"
import Exchange from "../page/personalpage/coupon/exchangehongbao"
import Encourage from "../page/personalpage/coupon/encourage"
import Businessinfo from "../page/shopcar/businessinfo"
import Orderforgoods from "../page/shopcar/orderforgoods"
import OrderRemark from "../page/shopcar/orderChilds/orderRemark"
import OrderBill from "../page/shopcar/orderChilds/orderBill"
import ChooseAddress from "../page/shopcar/orderChilds/chooseAddress"
import AddAddress from "../page/shopcar/orderChilds/addAddress"
import hbHistory from "../page/personalpage/coupon/historyhongbao"
import Forget from "../page/personalpage/setpassword"
import SearchAddress from "../page/shopcar/orderChilds/searchAddress"
import SearchAddresstwo from "../page/personalpage/accountdetail/searchAddress"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
    path: "/home",
    name: "Home",
    component: Home
  },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/shopcar",
      name: "Shopcar",
      component: Shopcar,
      children: [{
        path: "businessinfor",
        name: "Businessinfo",
        component: Businessinfo
      }]
    },
    {
      path: "/personal",
      name: "Personal",
      component: Personal
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    },
    {
      path: '/CityList',
      name: 'CityList',
      component: CityList
    },
    {
      path: "/shopshow",
      name: "Shopshow",
      component: Shopshow
    },
    {
      path: '/city/:id',
      name: 'SearchHistory',
      component: SearchHistory
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: "/balance",
      name: "Balance",
      component: Balance,
      children: [{
        path: "balancedetail",
        component: BalanceDetail
      }]
    },
    {
      path: "/integral",
      name: "Integral",
      component: Integral,
      children: [{
        path: "integraldetail",
        name: "IntegralDetail",
        component: IntegralDetail
      }]
    }, {
      path: "/coupon",
      name: "Coupon",
      component: Coupon,
      children: [{
        path: 'couponinfor',
        name: 'CouponInfor',
        component: CouponInfor
      },
        {
          path: 'hbHistory',
          name: 'hbHistory',
          component: hbHistory
        },
        {
          path: "sellerdetail",
          component: SellerDetail
        }, {
          path: "exchange",
          component: Exchange
        },
        {
          path: "encourage",
          component: Encourage
        }
      ]
    },
    {
      path: "/forget",
      name: "Forget",
      component: Forget
    },
    {
      path: "/download",
      name: "Download",
      component: Download
    },
    {
      path: "/servercenter",
      name: "Servercenter",
      component: Servercenter
    },
    {

      path: "/vipcenter",
      name: "Vipcenter",
      component: Vipcenter,
      children: [{
        path: "exchangevip",
        name: "Exchangevip",
        component: Exchangevip
      },
        {
          path: "buyrecord",
          name: "Buyrecord",
          component: Buyrecord
        },
        {
          path: "vipdescription",
          name: "VipDescription",
          component: VipDescription
        }
      ]
    },
    {
      path: "/perchasevip",
      name: "Perchasevip",
      component: Perchasevip,
    },
    {
      path: "/accountdetail",
      name: "Accountdetail",
      component: Accountdetail,
      children: [
        {
          path: 'setusername',
          name: Setusername,
          component: Setusername
        },
        {
          path: 'editaddress',
          name: "Editaddress",
          component: Editaddress,
          children: [
            {
              path: "newaddress",
              name: "Newaddress",
              component: Newaddress,
              children: [
                {
                  path: "addDetail",
                  name: "SearchAddresstwo",
                  component: SearchAddresstwo
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: "/servercenter/:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/orderforgoods",
      name: "Orderforgoods",
      component: Orderforgoods,
      children: [
        {
          path: "orderRemark",
          name: "OrderRemark",
          component: OrderRemark
        },
        {
          path: "orderbill",
          name: "OrderBill",
          component: OrderBill
        },
        {
          path: "chooseAddress",
          name: "ChooseAddress",
          component: ChooseAddress,
          children: [
            {
              path: "addAddress",
              name: "addAddress",
              component: AddAddress,
              children: [
                {
                  path: "searchAddress",
                  name: "SearchAddress",
                  component: SearchAddress
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
