import React from 'react'
import { Spin as AntSpin, SpinProps } from 'antd'

// The reason of this abstraction is to use elements
// from a single source so that if we'd like to change
// UI library or design we change it on a sole place
export function Spin(props: SpinProps) {
	return <AntSpin {...props} />
}
