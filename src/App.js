import React, { Component } from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';

import logo from './logo.svg';
import './App.css';

const ImageTransformations = ({width, rgb, selectedShirt, text}) => {
  return (
    <Image publicId={selectedShirt.main+'.jpg'}>
      <Transformation width={width} crop="scale"/>
    </Image>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    const defaultShirt = {id: 1, main: 'shirt_only', underlay: 'model2', overlay: ''};
    this.state = {
      shirts: [
        defaultShirt,
        {id: 2, main: 'laying-shirt', underlay: '', overlay: ''},
        {id: 3, main: 'hanging_t-shirt', underlay: '', overlay: 'hanger'}
      ],
      text: ' ',
      selectedShirt: defaultShirt,
      background: {rgb:{r:255,g:255,b:255}}
    };
  }

  selectedShirt(thumb) {
    this.setState({selectedShirt: thumb}, _ => this.forceUpdate())
  }

  render() {
    const rgb = this.state.background.rgb;
    return (
      <div className="App">
        <CloudinaryContext cloudName="christekh">
          <div className="imageDemoContainer">
            <div className="mainImage">
              <ImageTransformations
                width="600"
                rgb={rgb}
                selectedShirt={this.state.selectedShirt}
                text={this.state.text}/>
            </div>
    
          </div>
        </CloudinaryContext>
      </div>
    );
  }
}

export default App;
