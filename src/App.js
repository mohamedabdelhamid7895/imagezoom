import React, { Component } from "react";
import {SideBySideMagnifier} from 'react-image-magnifiers';
import './styles.css';
class App extends Component {
  props = {
    alwaysInPlace: false,
    overlayOpacity: .5,
    switchSides: false,
    fillAvailableSpace: true,
    fillAlignTop: false,
    fillGapLeft: 0,
    fillGapRight: 10,
    fillGapTop: 10,
    fillGapBottom: 10
  };

 

  render() {
    const {
      alwaysInPlace,
      overlayOpacity,
      switchSides,
      fillAvailableSpace,
      fillAlignTop,
      fillGapLeft,
      fillGapRight,
      fillGapTop,
      fillGapBottom
    } = this.props;

 
    return (
      <React.Fragment>
       
         
            <SideBySideMagnifier
              className="input-position"
              imageSrc={'https://www.adobe.com/express/feature/image/convert/jpg-to-png/media_1b0ad89a4a5ad233f5708e21b5998d6638cb07929.png?width=2000&format=webply&optimize=medium'}
              largeImageSrc={'https://www.adobe.com/express/feature/image/convert/jpg-to-png/media_1b0ad89a4a5ad233f5708e21b5998d6638cb07929.png?width=2000&format=webply&optimize=medium'}
              alwaysInPlace={alwaysInPlace}
              overlayOpacity={overlayOpacity}
              switchSides={switchSides}
              zoomPosition="right"
              inPlaceMinBreakpoint={641}
              fillAvailableSpace={fillAvailableSpace}
              fillAlignTop={fillAlignTop}
              fillGapTop={fillGapTop}
              fillGapRight={fillGapRight}
              fillGapBottom={fillGapBottom}
              fillGapLeft={fillGapLeft}
               zoomContainerBorder="1px solid #222"
              zoomContainerBoxShadow="0 1px 1px rgba(0,0,0,.5)"
            />
         
      </React.Fragment>
    );
  }
}

export default App;