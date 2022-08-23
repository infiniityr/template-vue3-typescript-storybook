import { Story } from '@storybook/vue3'
import MyButton from './'

export default {
  title: 'Example/MyButton',
  component: MyButton,
  argTypes: {
    text: '',
    onClick: {},
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    }
  }
}

const Template: Story = args => ({
  components: { MyButton },
  setup () {
    return { args }
  },
  template: '<my-button v-bind="args"/>'
})

export const Example1 = Template.bind({})
Example1.args = {
  text: 'Example 1'
}

export const Example2 = Template.bind({})
Example2.args = {
  text: 'Example 2',
  color: 'secondary'
}
