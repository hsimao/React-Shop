import React, { Component } from 'react';
import './directory.style.scss';

import MenuItem from '../MenuItem/menuItem.component';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sectoins: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    };
  }

  render() {
    const { sectoins } = this.state;
    return (
      <div className='directory'>
        {/* 若傳遞的 props 與變數相同名稱, 可直接用解構方式 */}
        {sectoins.map(({ id, ...allProps }) => (
          <MenuItem key={id} {...allProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
