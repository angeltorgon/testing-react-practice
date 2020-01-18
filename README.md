# React Testing Walk Through
Creating this repo to prepare to run TL hours tomorrow. 

## Snapshots
[JEST](https://jestjs.io/blog/2016/07/27/jest-14.htm)

- [] 1. install `react-test-renderer`
[] 2. import renderer into test file
`import renderer from 'react-test-renderer'` 

	3. create test in test file
```
test('should match snapshot', () => {
	const tree = renderer.create(<App />).toJSON();

	expect(tree).toMatchSnapshot();
});
```
	4. run tests usint `yarn test`
	5. jest will create snaphsot folder and save snapshot
	6. If snapshot ever mismatches actual component when rendering. 
		- enter `u` to update snapshot
		- or update file to match snapshot

## Asynchronous Code

## Mocks and Spies

## Fire Events and Async Operations
