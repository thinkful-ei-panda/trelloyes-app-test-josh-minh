import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('<Card />', () => {

  const props = {
    key: "test_id",
    title: "Card title",
    content: "Card content"
  }

  it('renders without crashing', () => {

    const div = document.createElement('div');

    ReactDOM.render(<Card {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


});