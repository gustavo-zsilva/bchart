import Head from 'next/head'

import { BarChart } from '../lib/components/BarChart'
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
        bgColor="gray.700"
        columnsColor="yellow.500"
        borderRadius="3rem"
      />
    </Flex>
  )
}
