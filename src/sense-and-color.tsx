import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components"
import senseAndColorTheme from './theme/sense-and-color-theme';

export const SenseAndColor = () => (
  <ChakraProvider theme={senseAndColorTheme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
    </Box>
  </ChakraProvider>
)
