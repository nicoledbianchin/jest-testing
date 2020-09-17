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
  
  describe('#TextInput', () => {
    it('should render a text input in testId rectangleLenghtInput', () => {
      const app = shallow(<App/>)
      const input = app.find("[testID='rectangleLengthInput']")
      expect(input).toHaveLength(1)
    })
    it('should render a text input in testId rectangleWidthInput', () => {
      const app = shallow(<App/>)
      const input = app.find("[testID='rectangleWidthInput']")
      expect(input).toHaveLength(1)
    })
  })

  describe('#Button', () => {
    it('should render a button with testID rectangleCalculateButton', () => {
      const app = shallow(<App/>)
      const button = app.find("[testID='rectangleCalculateButton']")
      expect(button).toHaveLength(1)
    })
    it('should render a button with testID rectangleCalculateButton with the text calculate', () => {
      const app = shallow(<App/>)
      const button = app.find("[testID='rectangleCalculateButton']").props().title
      expect(button).toEqual("CALCULATE")
    })
  })
})