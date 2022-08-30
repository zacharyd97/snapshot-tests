import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
import GitHubCard from './__snapshots__/GitHubCard';

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GitHubCard stapshot', () => {
  const tree = renderer.create(<GitHubCard/>).toJSON()
  expect(tree).toMatchSnapshot()
}) 
