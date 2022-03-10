import * as React from 'react';
import AppDemo1 from '@/react18-demo/demo1/app';
import UseTransitionDemo from '@/components/use-transition-demo';
import UseDefaultDemo from '@/components/use-deferred-value-demo';
const CONTENT = {
  'demo': <AppDemo1 />,
  'use-transition-demo': <UseTransitionDemo />,
  'use-deferred-value-demo': <UseDefaultDemo />,
}

function Content({ page, resource }) {
  const time = resource.delay.read()

  return (
    time && (
      <div className="tab-content">
        This content is for page "{page}" after {time.toFixed()}
        ms.
        <div>{CONTENT[page]}</div>
      </div>
    )
  )
}

export default Content
