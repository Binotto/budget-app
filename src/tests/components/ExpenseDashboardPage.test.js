import React from 'react';
import { shallow } from 'enzyme';
import ExpensedDashboardPage from '../../components/ExpensedDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpensedDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
