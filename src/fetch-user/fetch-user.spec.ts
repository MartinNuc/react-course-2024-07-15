import { fetchUser } from './fetch-user';
import axios from 'axios';

jest.mock('axios');

const axiosMock = axios as jest.Mocked<typeof axios>;

it('fetches user data', async () => {
  const response = { data: { id: 1, name: 'Martin' } };
  axiosMock.get.mockResolvedValue(response);

  expect(await fetchUser()).toEqual({ id: 1, name: 'Martin' });
});
