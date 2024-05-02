// regenerate by running
// npx @chakra-ui/cli tokens path/to/your/theme.(js|ts)
import { BaseThemeTypings } from "@chakra-ui/styled-system/dist/shared.types.js";
export interface ThemeTypings extends BaseThemeTypings {
  blur:
    | "none"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | (string & {});
  borders: "none" | "1px" | "2px" | "4px" | "8px" | (string & {});
  borderStyles: string & {};
  borderWidths: string & {};
  breakpoints: "base" | "sm" | "md" | "lg" | "xl" | "2xl" | (string & {});
  colors:
    | "base.black"
    | "base.overlayBackground"
    | "base.white"
    | "error.25"
    | "error.50"
    | "error.100"
    | "error.200"
    | "error.300"
    | "error.400"
    | "error.500"
    | "error.600"
    | "error.700"
    | "error.800"
    | "error.900"
    | "feature.25"
    | "feature.50"
    | "feature.100"
    | "feature.200"
    | "feature.300"
    | "feature.400"
    | "feature.500"
    | "feature.600"
    | "feature.700"
    | "feature.800"
    | "feature.900"
    | "icon.primaryDark"
    | "icon.primaryLight"
    | "icon.secondary"
    | "icon.disabled"
    | "icon.success"
    | "icon.warning"
    | "icon.error"
    | "icon.feature"
    | "neutral.25"
    | "neutral.50"
    | "neutral.100"
    | "neutral.200"
    | "neutral.300"
    | "neutral.400"
    | "neutral.500"
    | "neutral.600"
    | "neutral.700"
    | "neutral.800"
    | "neutral.900"
    | "neutral.950"
    | "primary.25"
    | "primary.50"
    | "primary.100"
    | "primary.200"
    | "primary.300"
    | "primary.400"
    | "primary.500"
    | "primary.600"
    | "primary.700"
    | "primary.800"
    | "primary.900"
    | "success.25"
    | "success.50"
    | "success.100"
    | "success.200"
    | "success.300"
    | "success.400"
    | "success.500"
    | "success.600"
    | "success.700"
    | "success.800"
    | "success.900"
    | "text.primary"
    | "text.secondary"
    | "text.disabled"
    | "textWhite.primary"
    | "textWhite.secondary"
    | "textWhite.disabled"
    | "warning.25"
    | "warning.50"
    | "warning.100"
    | "warning.200"
    | "warning.300"
    | "warning.400"
    | "warning.500"
    | "warning.600"
    | "warning.700"
    | "warning.800"
    | "warning.900"
    | "chakra-body-text._light"
    | "chakra-body-text._dark"
    | "chakra-body-bg._light"
    | "chakra-body-bg._dark"
    | "chakra-border-color._light"
    | "chakra-border-color._dark"
    | "chakra-inverse-text._light"
    | "chakra-inverse-text._dark"
    | "chakra-subtle-bg._light"
    | "chakra-subtle-bg._dark"
    | "chakra-subtle-text._light"
    | "chakra-subtle-text._dark"
    | "chakra-placeholder-color._light"
    | "chakra-placeholder-color._dark"
    | (string & {});
  colorSchemes:
    | "error"
    | "feature"
    | "neutral"
    | "primary"
    | "success"
    | "warning"
    | (string & {});
  fonts: "body" | "heading" | (string & {});
  fontSizes:
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | (string & {});
  fontWeights:
    | "hairline"
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black"
    | (string & {});
  layerStyles: string & {};
  letterSpacings:
    | "tighter"
    | "tight"
    | "normal"
    | "wide"
    | "wider"
    | "widest"
    | (string & {});
  lineHeights:
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "normal"
    | "none"
    | "shorter"
    | "short"
    | "base"
    | "tall"
    | "taller"
    | (string & {});
  radii:
    | "none"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "full"
    | (string & {});
  shadows:
    | "xs"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "outline"
    | "inner"
    | "none"
    | "dark-lg"
    | (string & {});
  sizes:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "12"
    | "14"
    | "16"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "72"
    | "80"
    | "96"
    | "px"
    | "0.5"
    | "1.5"
    | "2.5"
    | "3.5"
    | "max"
    | "min"
    | "full"
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "prose"
    | "container.sm"
    | "container.md"
    | "container.lg"
    | "container.xl"
    | (string & {});
  space:
    | "1"
    | "-1"
    | "2"
    | "-2"
    | "3"
    | "-3"
    | "4"
    | "-4"
    | "5"
    | "-5"
    | "6"
    | "-6"
    | "7"
    | "-7"
    | "8"
    | "-8"
    | "9"
    | "-9"
    | "10"
    | "-10"
    | "12"
    | "-12"
    | "14"
    | "-14"
    | "16"
    | "-16"
    | "20"
    | "-20"
    | "24"
    | "-24"
    | "28"
    | "-28"
    | "32"
    | "-32"
    | "36"
    | "-36"
    | "40"
    | "-40"
    | "44"
    | "-44"
    | "48"
    | "-48"
    | "52"
    | "-52"
    | "56"
    | "-56"
    | "60"
    | "-60"
    | "64"
    | "-64"
    | "72"
    | "-72"
    | "80"
    | "-80"
    | "96"
    | "-96"
    | "px"
    | "-px"
    | "0.5"
    | "-0.5"
    | "1.5"
    | "-1.5"
    | "2.5"
    | "-2.5"
    | "3.5"
    | "-3.5"
    | (string & {});
  textStyles: string & {};
  transition:
    | "property.common"
    | "property.colors"
    | "property.dimensions"
    | "property.position"
    | "property.background"
    | "easing.ease-in"
    | "easing.ease-out"
    | "easing.ease-in-out"
    | "duration.ultra-fast"
    | "duration.faster"
    | "duration.fast"
    | "duration.normal"
    | "duration.slow"
    | "duration.slower"
    | "duration.ultra-slow"
    | (string & {});
  zIndices:
    | "hide"
    | "auto"
    | "base"
    | "docked"
    | "dropdown"
    | "sticky"
    | "banner"
    | "overlay"
    | "modal"
    | "popover"
    | "skipLink"
    | "toast"
    | "tooltip"
    | (string & {});
  components: {
    Accordion: {
      sizes: string & {};
      variants: string & {};
    };
    Alert: {
      sizes: string & {};
      variants:
        | "subtle"
        | "left-accent"
        | "top-accent"
        | "solid"
        | (string & {});
    };
    Avatar: {
      sizes:
        | "2xs"
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "full"
        | (string & {});
      variants: string & {};
    };
    Badge: {
      sizes: string & {};
      variants: "solid" | "subtle" | "outline" | (string & {});
    };
    Breadcrumb: {
      sizes: string & {};
      variants: string & {};
    };
    Button: {
      sizes: "lg" | "md" | "sm" | "xs" | (string & {});
      variants:
        | "ghost"
        | "outline"
        | "solid"
        | "link"
        | "unstyled"
        | (string & {});
    };
    Checkbox: {
      sizes: "sm" | "md" | "lg" | (string & {});
      variants: string & {};
    };
    CloseButton: {
      sizes: "lg" | "md" | "sm" | (string & {});
      variants: string & {};
    };
    Code: {
      sizes: string & {};
      variants: "solid" | "subtle" | "outline" | (string & {});
    };
    Container: {
      sizes: string & {};
      variants: string & {};
    };
    Divider: {
      sizes: string & {};
      variants: "solid" | "dashed" | (string & {});
    };
    Drawer: {
      sizes: "xs" | "sm" | "md" | "lg" | "xl" | "full" | (string & {});
      variants: string & {};
    };
    Editable: {
      sizes: string & {};
      variants: string & {};
    };
    Form: {
      sizes: string & {};
      variants: string & {};
    };
    FormError: {
      sizes: string & {};
      variants: string & {};
    };
    FormLabel: {
      sizes: string & {};
      variants: string & {};
    };
    Heading: {
      sizes:
        | "4xl"
        | "3xl"
        | "2xl"
        | "xl"
        | "lg"
        | "md"
        | "sm"
        | "xs"
        | (string & {});
      variants: string & {};
    };
    Input: {
      sizes: "lg" | "md" | "sm" | "xs" | (string & {});
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {});
    };
    Kbd: {
      sizes: string & {};
      variants: string & {};
    };
    Link: {
      sizes: string & {};
      variants: string & {};
    };
    List: {
      sizes: string & {};
      variants: string & {};
    };
    Menu: {
      sizes: string & {};
      variants: string & {};
    };
    Modal: {
      sizes:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "full"
        | (string & {});
      variants: string & {};
    };
    NumberInput: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {});
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {});
    };
    PinInput: {
      sizes: "lg" | "md" | "sm" | "xs" | (string & {});
      variants: "outline" | "flushed" | "filled" | "unstyled" | (string & {});
    };
    Popover: {
      sizes: string & {};
      variants: string & {};
    };
    Progress: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {});
      variants: string & {};
    };
    Radio: {
      sizes: "md" | "lg" | "sm" | (string & {});
      variants: string & {};
    };
    Select: {
      sizes: "lg" | "md" | "sm" | "xs" | (string & {});
      variants: "outline" | "filled" | "flushed" | "unstyled" | (string & {});
    };
    Skeleton: {
      sizes: string & {};
      variants: string & {};
    };
    SkipLink: {
      sizes: string & {};
      variants: string & {};
    };
    Slider: {
      sizes: "lg" | "md" | "sm" | (string & {});
      variants: string & {};
    };
    Spinner: {
      sizes: "xs" | "sm" | "md" | "lg" | "xl" | (string & {});
      variants: string & {};
    };
    Stat: {
      sizes: "md" | (string & {});
      variants: string & {};
    };
    Switch: {
      sizes: "sm" | "md" | "lg" | (string & {});
      variants: string & {};
    };
    Table: {
      sizes: "sm" | "md" | "lg" | (string & {});
      variants: "simple" | "striped" | "unstyled" | (string & {});
    };
    Tabs: {
      sizes: "sm" | "md" | "lg" | (string & {});
      variants:
        | "line"
        | "enclosed"
        | "enclosed-colored"
        | "soft-rounded"
        | "solid-rounded"
        | "unstyled"
        | (string & {});
    };
    Tag: {
      sizes: "sm" | "md" | "lg" | (string & {});
      variants: "subtle" | "solid" | "outline" | (string & {});
    };
    Textarea: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {});
      variants: "outline" | "flushed" | "filled" | "unstyled" | (string & {});
    };
    Tooltip: {
      sizes: string & {};
      variants: string & {};
    };
    Card: {
      sizes: "sm" | "md" | "lg" | (string & {});
      variants: "elevated" | "outline" | "filled" | "unstyled" | (string & {});
    };
    Stepper: {
      sizes: "xs" | "sm" | "md" | "lg" | (string & {});
      variants: string & {};
    };
    Text: {
      sizes: string & {};
      variants: "bold" | "regular" | (string & {});
    };
  };
}
