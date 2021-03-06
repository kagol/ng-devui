import { Component, OnInit } from '@angular/core';
import { TableWidthConfig } from 'ng-devui/data-table';
import { originSource, SourceType } from '../mock-data';

@Component({
  selector: 'd-mutil-styles',
  templateUrl: './mutil-styles.component.html',
  styleUrls: ['./mutil-styles.component.scss']
})
export class MutilStylesComponent implements OnInit {
  headerBk = false;
  striped = false;

  activeBorder = '';
  borderItems = [
    {
      id: '',
      title: '正常'
    },
    {
      id: 'borderless',
      title: '无边框'
    },
    {
      id: 'bordered',
      title: '全边框'
    }
  ];

  activeSize = 'sm';
  sizeItems = [
    {
      id: 'sm',
      title: '标准尺寸'
    },
    {
      id: 'md',
      title: '中尺寸'
    },
    {
      id: 'lg',
      title: '大尺寸'
    }
  ];

  activeLayout = 'fixed';
  layoutItems = [
    {
      id: 'fixed',
      title: 'fixed'
    },
    {
      id: 'auto',
      title: 'auto'
    }
  ];

  constructor() { }

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
      {
        field: 'firstName',
        header: 'First Name',
        fieldType: 'text'
      },
      {
        field: 'lastName',
        header: 'Last Name',
        fieldType: 'text'
      },
      {
        field: 'gender',
        header: 'Gender',
        fieldType: 'text'
      },
      {
        field: 'dob',
        header: 'Date of birth',
        fieldType: 'date'
      }
    ]
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: '#',
      width: '50px'
    },
    {
      field: 'firstName',
      width: '100px'
    },
    {
      field: 'lastName',
      width: '100px'
    },
    {
      field: 'gender',
      width: '50px'
    },
    {
      field: 'dob',
      width: '300px'
    }
  ];

  ngOnInit() {
  }

  layoutChange(layout) {
    if (layout === 'auto') {
      this.tableWidthConfig = [];
    } else {
      this.tableWidthConfig = [
        {
          field: '#',
          width: '50px'
        },
        {
          field: 'firstName',
          width: '100px'
        },
        {
          field: 'lastName',
          width: '100px'
        },
        {
          field: 'gender',
          width: '50px'
        },
        {
          field: 'dob',
          width: '300px'
        }
      ];
    }
  }
}
