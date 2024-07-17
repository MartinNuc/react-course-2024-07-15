import { act, render, screen, waitFor } from "@testing-library/react";
import { Joke } from "./Joke";
import axios from 'axios';

jest.mock('axios');
const axiosMock = axios as unknown as jest.Mocked<typeof axios>;

describe('Joke', () => {

  beforeEach(() => {
    axiosMock.get.mockResolvedValue({
      data: {
        value: 'This is a joke'
      }
    });
  })

  it('shows disabled button while joke is fetching', () => {
    render(<Joke />);
    const fetchNextButton = screen.getByRole('button', { name: 'Load next' });
    expect(fetchNextButton).toBeDisabled();
  });

  it('fetches the joke and displayes it', async () => {
    render(<Joke />);
    expect(await screen.findByText('This is a joke')).toBeInTheDocument();
  });

})
