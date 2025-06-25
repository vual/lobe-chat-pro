import { Flexbox } from 'react-layout-kit';

import Files from './Files';
import Plugins from './Plugins';

const Home = () => {
  return (
    <Flexbox gap={12} height={'100%'}>
      <Files />
      <Plugins />
    </Flexbox>
  );
};

export default Home;
