import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="product-block"
    speed={0.5}
    width={340}
    height={530}
    viewBox="0 0 340 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="50" y="0" rx="0" ry="0" width="340" height="270" />
    <rect x="50" y="290" rx="0" ry="0" width="340" height="58" />
    <rect x="50" y="353" rx="0" ry="0" width="340" height="54" />
  </ContentLoader>
);

export default Skeleton;
