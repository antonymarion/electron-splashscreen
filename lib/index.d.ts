export { default as reportReady } from './report-ready';
export { default as Office } from './templates/office';
export { default as Dolphin } from './templates/dolphin';
export { default as Simple } from './templates/simple';
export interface IProps {
    mainWindow: any;
    color?: any;
    icon?: any;
    width?: number;
    height?: number;
    url?: any;
    image?: any;
    brand?: any;
    productName?: any;
    logo?: any;
    website?: any;
    text?: any;
    backgroundColor?: string;
}
export declare const initSplashScreen: ({
  mainWindow,
  color,
  icon,
  width = 600,
  height = 400,
  url,
  image,
  brand,
  productName,
  logo,
  website,
  text,
  backgroundColor
}: IProps) => void;
