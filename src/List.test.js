import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import store from './STORE'

describe('List component', () => {

  // create an array of cards to pass into the list
  const cards = [store.allCards['a'], store.allCards['b'], store.allCards['c']]

  it('renders without crashing', () => {

    const div = document.createElement('div');

    ReactDOM.render(<List header="Header" cards={cards} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected when passed props', () => {
    const tree = renderer
      .create(<List header="Header" cards={cards} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


});