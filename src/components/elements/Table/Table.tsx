import React from 'react'
import { Table as AntTable, TableProps } from 'antd'

// The reason of this abstraction is to use elements
// from a single source so that if we'd like to change
// UI library or design we change it on a sole place
export function Table<RecordType extends object = any>(props: TableProps<RecordType>) {
	return <AntTable {...props} />
}
