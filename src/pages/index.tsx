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

      <BarChart />
    </Flex>
  )
}
