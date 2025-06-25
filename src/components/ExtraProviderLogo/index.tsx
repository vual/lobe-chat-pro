import { Midjourney } from '@lobehub/icons';
import { memo } from 'react';

export interface ExtraProviderLogoProps {
  id: string;
  type: 'color' | 'combine';
}

const ExtraProviderLogo = memo<ExtraProviderLogoProps>(({ id, type }) => {
  return (
    <>
      {type === 'combine' && (
        <div style={{ color: 'rgb(8, 8, 8)' }}>
          {id === 'midjourney' && <Midjourney.Combine size={24} />}
        </div>
      )}
      {type === 'color' && (
        <div style={{ color: 'rgb(8, 8, 8)' }}>
          {id === 'midjourney' && <Midjourney size={24} />}
        </div>
      )}
    </>
  );
});

export default ExtraProviderLogo;
