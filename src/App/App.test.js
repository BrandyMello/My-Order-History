import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

describe('App', () => {
  
  it('should take a snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshor();
  })
});
