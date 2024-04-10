import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={0.5}
    width={325}
    height={434}
    viewBox="0 0 325 434"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="65" y="0" rx="0" ry="0" width="260" height="260" />
    <rect x="65" y="270" rx="0" ry="0" width="260" height="54" />
    <rect x="65" y="344" rx="14" ry="14" width="260" height="44" />
  </ContentLoader>
);
