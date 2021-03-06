
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders learn react link', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toBeTruthy()
  // console.log(wrapper.debug()) -- prints the whole dom in the console as a string .debug() does this
});
