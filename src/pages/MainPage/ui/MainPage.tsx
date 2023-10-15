import React, { useState } from 'react';
import reactLogo from '../../../shared/assets/react.svg'
import viteLogo from '/vite.svg'
import { AppImg } from '../../../shared/ui/AppImg';
import { AppLink } from '../../../shared/ui/AppLink';
import { Button } from '../../../shared/ui/Button';
import { Card } from '../../../shared/ui/Card';
import { Text } from '@/shared/ui/Text'


const MainPage = () => {
  const [count, setCount] = useState(0)

  const codeTxt = <>Edit <code>src/App.tsx</code> and save to test HMR</>
  return (
    <>
      <div>
        <AppLink to="https://vitejs.dev" target="_blank">
          <AppImg src={viteLogo} className="logo" alt="Vite logo" />
        </AppLink>
        <AppLink to="https://react.dev" target="_blank">
          <AppImg src={reactLogo} className="logo react" alt="React logo" />
        </AppLink>
      </div>
      <Text title='Vite + React' size='l' />
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Text text={codeTxt} />
      </Card>
      <Text className="read-the-docs" text="Click on the Vite and React logos to learn more" />
    </>
  )
}

export default MainPage;