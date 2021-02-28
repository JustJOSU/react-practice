import React from 'react';
import { shallow } from 'enzyme';

import Input from '../examples/Input';

describe('<Input>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Input name="test_name" />);
        }).not.toThrow();
    });

    describe('contact <input>', () => {
        it('renders one input', () => {
            const wrapper = shallow(<Input name="test_name"/>);
            expect(wrapper.find('input')).toHaveLength(1);
            expect(wrapper.find('label')).toHaveLength(1);
        })
    })

    it('has one element', () => {
        const wrapper = shallow(<Input name="test_name"/>);
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toHaveLength(1);
    })

    it('assigns the prop value and type', () => {
        const expectedValue = "123";
        const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
        expect(wrapper.find('input').prop('value')).toBe(expectedValue);
        const { type, value } = wrapper.find('input').props();
        expect(value).toBe(expectedValue);
        expect(type).toBe('text');
    })
})