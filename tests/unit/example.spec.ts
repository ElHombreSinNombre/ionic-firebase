import { mount } from '@vue/test-utils'
import Cars from '@/views/cars.vue'

describe('cars.vue', () => {
  it('renders cars view', () => {
    const wrapper = mount(Cars)
    expect(wrapper.text()).toMatch('cars')
  })
})
