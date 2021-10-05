import Head from 'next/head'

import { BarChart } from '../components/BarChart'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex>
      <Head>
        <title>Bchart | Bar Chart Preview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BarChart total={1500} oscillation={[10, 45, 90, 1300, 1150, 1000, 540, 610, 250, 140, 1300, 1500]} />
    </Flex>
  )
}
