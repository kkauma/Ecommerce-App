import React from "react";

import SHOP_DATA from "./shop.data";

// Class Component
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
}
