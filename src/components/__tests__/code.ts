import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import code from '../codeView/code.vue'

describe('code', () => {
  it('renders properly', () => {
    const wrapper = mount(code, { props: { modelValue: 'const data = {num:123}' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
