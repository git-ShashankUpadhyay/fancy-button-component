import React from 'react'
import Button from './Button'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  }
}
export const linkedin = () => <Button variant='linkdin'><a href='https://www.linkedin.com/in/shashank-upadhyay-b0b289243/'>Linkdin</a></Button>
export const github = () => <Button variant='github'><a href='https://github.com/git-ShashankUpadhyay'>Github</a></Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  // children: 'Primary Args',
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'secondary',
  // children: 'Secondary Args',
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary Args',
}