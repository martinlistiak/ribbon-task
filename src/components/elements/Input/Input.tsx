import React from 'react'
import { Input as AntInput, InputProps } from 'antd'

// The reason of this abstraction is to use elements
// from a single source so that if we'd like to change
// UI library or design we change it on a sole place
export function Input(props: InputProps) {
	return <AntInput {...props} />
}
