import 'styled-components';
import {ITheme} from "./theme/theme";

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}