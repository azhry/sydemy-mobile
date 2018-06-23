import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-img-cache', () => {
  const mockComponent = require('react-native/jest/mockComponent')
  return {
    CustomCachedImage: mockComponent('Image'),
    CachedImage: mockComponent('Image'),
  }
});

jest.mock('react-native-camera', () => {
  return {
    Aspect: () => {}
  }
});

it('renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});
