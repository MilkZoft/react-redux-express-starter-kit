// NPM Dependencies
import 'jsdom-global/register';
import React from 'react';
import { assert } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import configureStore from '../src/frontend/configureStore';

// Reducers
import rootReducer from '../src/frontend/reducers/app';

const initialState = loadFixture('frontend/initialState.json');

// Global methods
global.assert = assert;
global.loadComponent = loadComponent;
global.loadFixture = loadFixture;
global.mount = mount;
global.setup = setup;
global.setupRedux = setupRedux;
global.shallow = shallow;
global.sinon = sinon;
global.exists = exists;
global.equals = equals;

function loadComponent(componentPath) {
  try {
    const Component = require(`../src/frontend/components/${componentPath}`);

    return Component.default;
  } catch (e) {
    throw e;
  }
}

function loadFixture(fixture) {
  const content = require(`./fixtures/${fixture}`);

  return content;
}

function setup(Component, props = {}) {
  return shallow(<Component {...props} />);
}

function setupRedux(Component, props = {}) {
  const store = configureStore({
    initialState: initialState
  }, rootReducer);

  return mount(<Provider store={store}><MemoryRouter><Component {...props} /></MemoryRouter></Provider>);
}

function exists(element) {
  return element && element.length === 1;
}

function equals(value1, value2) {
  return value1 === value2;
}
