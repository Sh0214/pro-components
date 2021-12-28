import Field from '@ant-design/pro-field';
import type { TreeSelectProps } from 'antd';
import { waitTime } from '../../util';
import React from 'react';

export function TreeSelectDemo(
  props: TreeSelectProps<any> & {
    request?: (...args: any) => any;
  },
  ref: any,
) {
  const { request, value, ...fieldProps } = props;
  return (
    <Field
      ref={ref}
      fieldProps={{
        fieldNames: {
          label: 'title',
        },
        allowClear: true,
        showSearch: true,
        labelInValue: true,
        multiple: true,
        autoClearSearchValue: true,
        treeNodeFilterProp: 'title',
        filterTreeNode: true,
        open: true,
        ...fieldProps,
      }}
      value={value}
      mode="edit"
      valueType="treeSelect"
      request={async () => {
        request?.();
        await waitTime(100);
        return [
          {
            title: 'Node1',
            value: '0-0',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-0',
              },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            children: [
              {
                title: 'Child Node3',
                value: '0-1-0',
              },
              {
                title: 'Child Node4',
                value: '0-1-1',
              },
              {
                title: 'Child Node5',
                value: '0-1-2',
              },
            ],
          },
        ];
      }}
    />
  );
}

export default React.forwardRef(TreeSelectDemo);
