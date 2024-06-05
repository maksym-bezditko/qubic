import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Inject,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { Column, FilterSetting, SortSetting } from "../types";
import styled from "styled-components";

type TableProps<T> = {
  dataSource: T[];
  columns: Column[];
  title?: string;
  sortSettings?: SortSetting[];
  filterSettings?: FilterSetting;
};

export const Table = <T,>({
  title,
  dataSource,
  columns,
  sortSettings = [],
  filterSettings = { type: "Excel", ignoreAccent: true },
}: TableProps<T>) => {
  return (
    <StyledWrapper>
      {title && <StyledH2>{title}</StyledH2>}

      <GridComponent
        dataSource={dataSource}
        allowSorting
        allowFiltering
        sortSettings={{ columns: sortSettings }}
        filterSettings={filterSettings}
      >
        <ColumnsDirective>
          {columns.map((column) => (
            <ColumnDirective
              key={column.field}
              field={column.field}
              headerText={column.headerText}
              width={column.width}
              textAlign={column.textAlign}
              format={column.format}
            />
          ))}
        </ColumnsDirective>

        <Inject services={[Sort, Filter]} />
      </GridComponent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  * {
    border-color: rgb(77, 90, 104) !important;
  }
`;

const StyledH2 = styled.h2`
  color: white !important;

  padding-bottom: 1.5rem;
`;
