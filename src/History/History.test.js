import React from 'react';
import { shallow } from 'enzyme';
import History from './History';
import { jsxEmptyExpression } from '@babel/types';

describe('History', () => {
  
    it('should take a snapshot', () => {
      const wrapper = shallow(<History
        id: {1}
        img: {}
        name: 'B'
        description:'purchase.description'
        price: {32}
        key: {1}
        deleteitem: jest.fn()
       />);
       
      expect(wrapper).toMatchSnapshor();
    })
  });
