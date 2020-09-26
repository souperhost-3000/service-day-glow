import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// possibly
// import * as enzyme from 'enzyme';
// const Adapter = require ('enzyme-adapter-react-16') ;
// enzyme.configure({ adapter: new Adapter() });

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
//   clear: jest.fn(),
// };
// global.localStorage = localStorageMock;
