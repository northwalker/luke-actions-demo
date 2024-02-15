import App from './App';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
test('Always true test', () => {
  expect(true).toBe.true;
});

test('Heading should be Vite + React', async () => {
  render(<App />);

  const headingElement = await screen.getByText('Vite + React');
  expect(headingElement).toBeInTheDocument();
});

test('Handle count button correct', async () => {
  render(<App />);

  const button = await screen.findByRole('button');
  expect(button.innerHTML).toBe('count is 0');

  await user.click(button);
  await user.click(button);

  expect(button.innerHTML).toBe('count is 2');
});
