import {createTheme} from 'react-data-table-component';
import React from 'react';


createTheme('solarized', {
    text: {
      primary: '#373F32',
      secondary: '#AFA7A7',
    },
    background: {
      default: '#FFFFFF',
    },
    head:{
      background:'#AFA7A7'
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#E4ECDE',
    },
    rdt_TableHead:{
      color: '#82FF34'
    },
    rdt_TableHeadRow:{
      color: '#82FF34'
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });
  
  createTheme('darkTable', {
    text: {
      primary: '#FFFFFF',
      secondary: '#AFA7A7',
    },
    background: {
      default: ' #58A5CB',
    },
    head:{
      background:'rgba(1,1,1,1)'
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#E4ECDE',
    },
    rdt_TableHead:{
      color: 'rgba(1,1,1,1)'
    },
    rdt_TableHeadRow:{
      color: 'rgba(1,1,1,1)'
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });
  
  