import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App'

describe('App', () => {
  describe('#Text', () => {
    it('should render the world length in testID rectangleLengthText', () => {
      const app = shallow(<App/>)
      const text = app.find("[testID='rectangleLengthText']").dive().text()
      expect(text).toEqual('Length')
    })
    it('should render the world width in testId reactangleWidthText', () => {
      const app = shallow(<App/>)
      const text = app.find("[testID='rectangleWidthText']").dive().text()
      expect(text).toEqual('Width')
    })
  })
  
  // describe('#TextInput', () => {

  // })
})