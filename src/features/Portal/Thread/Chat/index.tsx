import { Suspense, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { SkeletonList } from '@/features/Conversation';

import ChatInput from './ChatInput';
import ChatList from './ChatList';

interface ConversationProps {
  mobile?: boolean;
}

const Conversation = memo<ConversationProps>(({ mobile }) => (
  <Flexbox height={'100%'}>
    <Suspense
      fallback={
        <Flexbox flex={1} height={'100%'}>
          <SkeletonList mobile={mobile} />
        </Flexbox>
      }
    >
      <ChatList mobile={mobile} />
    </Suspense>
    <ChatInput />
  </Flexbox>
));

export default Conversation;
