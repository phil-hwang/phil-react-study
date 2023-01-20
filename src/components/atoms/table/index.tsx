import React, {CSSProperties, useEffect, useState} from "react";

type colGroupProps = {
  widthList: string[]
};

export type FieldType = {
  key: string,
  label: string,
  formatter?: (value: any, values?: any) => any,
  width?: string,
  style?: CSSProperties,
};

export type tableProps = {
  fieldTypes: FieldType[],
  data?: any[],
  onRowClick?: (record: any) => void;
};


const ColGroup = ({ widthList }: colGroupProps) => {
  return (
    <colgroup>
      {
        widthList.map((width, index) => <col key={ index } width={ width }/>)
      }
    </colgroup>
  );
};

const TableHeader = ({ fieldTypes }: tableProps) => {
  return (
    <thead>
    <tr>
      {
        fieldTypes.map((fieldType, index) => <th key={index}>{ fieldType.label }</th>)
      }
    </tr>
    </thead>
  )
};

const TableBody = ({ fieldTypes, data, onRowClick }: tableProps) => {
  const handleRowClick = (item: any) => {
    if (!!onRowClick) {
      onRowClick(item);
    }
  };

  return (
    <tbody className={ !data || !data.length ? 'empty' : '' }>
    {
      !!data && data.length ?
        data.map((item, index) =>
          <tr key={ index } onClick={ event => handleRowClick(item) } style={ !!onRowClick ? {cursor: 'pointer'} : {} }>
            {
              fieldTypes.map(fieldType =>
                <td key={ fieldType.key } style={ fieldType.style }>
                  { !!fieldType.formatter ? fieldType.formatter(item[fieldType.key], item) : item[fieldType.key] }
                </td>
              )
            }
          </tr>
        )
        : <tr>
          <td colSpan={fieldTypes.length} rowSpan={4}   >
            데이터가 존재하지 않습니다.
          </td>
        </tr>
    }
    </tbody>
  )
};



const Table = (props: tableProps) => {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, []);

  if (!showChild) {
    return null
  }

  return (
    <div className="table-wrap">
      <table className="table-basic">
        <ColGroup widthList={ props.fieldTypes.map(fieldType => !!fieldType.width ? fieldType.width : '0%') }  />
        <TableHeader fieldTypes={ props.fieldTypes }/>
        <TableBody fieldTypes={ props.fieldTypes } data={ props.data } onRowClick={ props.onRowClick } />
      </table>
    </div>
  )
};

export default Table;