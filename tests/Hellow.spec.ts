import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import  Hellow  from '../components/Hellow.vue'

describe('Hellow', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Hellow)
    expect(wrapper.vm).toBeTruthy()
  })
})