import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { SwitchButton } from 'components/UI'
import ArrowUp from 'components/Icon/ArrowUp'
import ArrowDown from 'components/Icon/ArrowDown'

const ArrowSwitchButton = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <SwitchButton
      Icon1={ArrowUp}
      Icon2={ArrowDown}
      isSwitched={isActive}
      onClick={() => setIsActive(!isActive)}
    />
  )
}

storiesOf('Components', module).addWithChapters('SwitchButton', {
  info: `A button with two states each having a distinct icon`,
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <ArrowSwitchButton />,
        },
      ],
    },
  ],
})
