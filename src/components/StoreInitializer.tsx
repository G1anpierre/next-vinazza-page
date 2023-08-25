'use client'

import { useRef } from 'react'
import { useStore } from '@/store/zustand'

export const StoreInitializer = ({ homepage }) => {
  const initialized = useRef(false)
  if (!initialized.current) {
    useStore.setState({ homepage })
    initialized.current = true
  }
  return null
}
