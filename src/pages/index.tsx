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

      <BarChart
        total={10}
        oscillation={[2, 3, 6, 8, 5, 2, 7]}
        labels={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho']}
      />
    </Flex>
  )
}
