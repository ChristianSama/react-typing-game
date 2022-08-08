import { server } from './src/mocks/server';
import "whatwg-fetch";
// import 'isomorphic-fetch'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())