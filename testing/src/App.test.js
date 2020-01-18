import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import App from './App';

describe("<App />", () => {
  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Asyncronous code", () => {
  it("length of users array should be 10", async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
    expect(users.data.length).toBe(10);
  });

  it("users should have a name", () => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      console.log(res.data[0].name)
      expect(res.data[0].name).toBeTruthy();
    })
    .catch((err) => {
      console.error(err)
    })
  });
});
