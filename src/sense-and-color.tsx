import * as React from "react"
import {
  Box,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components"
import { ThemeProvider } from './providers/theme-provider';

export const SenseAndColor = () => (
  <ThemeProvider>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
    </Box>
  </ThemeProvider>
)
