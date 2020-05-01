import React, { Component } from "react";
import "./App.css";
import DataTable, { createTheme } from "react-data-table-component";
import customStyles1 from "./Components/Style1";
import DataService from "./DataService";
import InfiniteScroll from "react-infinite-scroll-component";
import Buttons from "./Components/buttons";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      bgColor: "#D7D3D3",
      align:true,
      fontSize: customStyles1 
    };
    this.pageObj = {
      page: 0,
      size: 20,
    };
    this.columns = [
      { name: "ID", selector: "id", right:this.state.align, width: "6%", sortable: true },
      {
        name: "AlbumId",
        selector: "albumId",
        right: this.state.align,
        allowOverFlow: true,
        width: "10%",
        sortable: true,
      },
      {
        name: "Image",
        width: "20%",
        center: true,
        cell: (d) => <img height="38x" width="38px" alt={d.url} src={d.url} />,
      },
      { name: "Title", selector: "title", center: true, width: "33.25%" },
      {
        name: "Thumbnail Url",
        cell: (d) => (
          <a target="_blank" href={d.thumbnailUrl}>
            {d.thumbnailUrl}
          </a>
        ),
        width: "auto",
      },
    ];
    
  }
    
  async componentDidMount() {
    this.loadData();
  }
  async loadData() {
    let newData = await DataService.fetchData(this.pageObj);
    let neededData = this.state.datas.concat(newData);
    this.setState({ datas: neededData });
    this.pageObj.page += 1;
  }
  loadMoreData = () => {
    this.loadData();
  };
  dark = (newColor) => {
    this.setState({ bgColor: newColor });
  };
  light = (newColor) => {
    this.setState({ bgColor: newColor });
  };
  large=(newFont)=>{
    this.setState({fontSize:newFont});
  }
  small=(newFont)=>{
    this.setState({fontSize:newFont});
  }
  

  render() {
    const data = this.state.datas;
    const bgColor = this.state.bgColor;
    const fontSize=this.state.fontSize;
    return (
      <div style={{ backgroundColor: bgColor }}>
        <Buttons changeDark={this.dark.bind(this)}
        changeLight={this.light.bind(this)}
        large={this.large.bind(this)}
        small={this.small.bind(this)}
        />
        <DataTable
          noHeader
          responsive="true"
          columns={this.columns}
          data={data}
          key={data.id}
          style={{
            margin: "0% 1% 2% 2%",
            width: "95%",
            overflowY: "auto",
          }}
          highlightOnHover="true"
          selectableRows="true"
          fixedHeader
          selectableRowsVisibleOnly="true"
          selectableRowsHighlight="true"
          customStyles={fontSize}
        />
        <InfiniteScroll
          dataLength={this.state.datas.length}
          next={this.loadMoreData}
          hasMore={this.loadMoreData}
          scrollThreshold='0.005'
          initialScrollY='2'
          loader={<h5 style={{textAlign:"center"}}>Loading...</h5>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        />
      </div>
    );
  }
}