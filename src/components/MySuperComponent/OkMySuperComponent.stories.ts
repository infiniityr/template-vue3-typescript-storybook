import { Story } from '@storybook/vue3'
import OkMySuperComponent from './'
import readme from './OkMySuperComponent.md'

export default {
  title: 'COMPONENT/OkMySuperComponent',
  component: OkMySuperComponent,
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  },
  argTypes: {
    // Define stories args properties
    // `on{property}` are consider has event handler
  }
}

const Template: Story = args => ({
  components: { OkMySuperComponent },
  setup () {
    return { args }
  },
  template: '<ok-my-super-component v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  // Define args
}
