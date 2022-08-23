import { mount } from '@vue/test-utils'
import MyButton from './'

describe('MyButton specs', () => {
  it('sould mount', () => {
    const wrapper = mount(MyButton, {
      props: {
        text: 'My Text'
      }
    })

    expect(wrapper.text()).toContain('My Text')
  })
})
