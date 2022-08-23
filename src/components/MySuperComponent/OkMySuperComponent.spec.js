import { mount } from '@vue/test-utils'
import OkMySuperComponent from './'

describe('OkMySuperComponent', () => {
  it('renders main components', () => {
    const wrapper = mount(OkMySuperComponent)
    expect(wrapper).toBeInstanceOf(Object)
  })
})
