import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
  return ({
    type: SET_PURCHASE_DETAIL,
    payload: _id
  })
}

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: 'A004890012',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Bobby Wilson \n 1234 West State Street',
          // name: 'Bobby Wilson',
          // shippingAddress: '1234 West State Street'
        }
      },
      {
        _id: 1,
        total: 42.42,
        orderNumber: 'SUIO909809',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'James Brown \n 156 East Oak Drive',
        //   name: 'James Brown',
        //   shippingAddress: '156 East Oak Drive'
        }
      },
      {
        _id: 2,
        total: 5.27,
        orderNumber: 'YETR908987',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'John Black \n 486 Pine Street',
          // name: 'John Black',
          // shippingAddress: '486 Pine Street'
        }
      },
      {
        _id: 3,
        total: 18.23,
        orderNumber: 'BNAS809809',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Robert Red \n 954 Cedar Street',
          // name: 'Robert Red',
          // shippingAddress: '954 Cedar Street'
        }
      },
      {
        _id: 4,
        total: 25.65,
        orderNumber: 'MKIJE98980',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Susan White \n 782 Fir Wood Ave',
          // name: 'Susan White',
          // shippingAddress: '782 Fir Wood Ave'
        }
      },
      {
        _id: 5,
        total: 56.45,
        orderNumber: 'UEKJLA980989',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Nancy Grey \n 3546 Redwood Ave',
          // name: 'Nancy Grey',
          // shippingAddress: '3546 Redwood Ave'
        }
      },
      {
        _id: 6,
        total: 19.34,
        orderNumber: 'JEUJNA098908',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Thomas Ash \n 48952 Birch Ash Drive',
          // name: 'Thomas Ash',
          // shippingAddress: '48952 Birch Ash Drive'
        }
      },
      {
        _id: 7,
        total: 12.95,
        orderNumber: 'PAOEN89789',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Jennifer Green \n 45698 Cherry Maple Ave',
          // name: 'Jennifer Green',
          // shippingAddress: '45698 Cherry Maple Ave'
        }
      }
    ]
  })
}
