import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

Date.now = jest.fn(() => 1487076708000)
Math.random = jest.fn(() => 0.5);
