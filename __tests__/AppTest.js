import React from 'react'
import { mount } from 'enzyme'
import App from '../src/App'

describe('App', () => {
  describe('#Text', () => {
    it('should render the text Welcome to React Native in the first tag', () => {
      const app = mount(<App/>)
      const text = app.find('Text').at(0).text();
      expect(text).toEqual('Welcome to React')
    })
  })
})