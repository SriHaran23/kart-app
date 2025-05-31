import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ProductImageZoom = ({ src,alt }) => (
  <ReactImageMagnify
    {...{
      smallImage: {
        alt: alt,
        isFluidWidth: true,
        src: src,
      },
      largeImage: {
        src: src,
        width: 1800,
        height: 2000,
      },
      enlargedImageContainerDimensions: {
        width: '130%',
        height: '100%',
      },
      isHintEnabled: true,
      shouldUsePositiveSpaceLens: true,
    }}
  />
);

export default ProductImageZoom;
