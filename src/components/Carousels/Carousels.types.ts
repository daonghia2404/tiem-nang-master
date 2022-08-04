export type TCarouselsProps = {
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  centerMode?: boolean;
  variableWidth?: boolean;
  slidesPerRow?: number;
  responsive?: Array<any>;
  onDragging?: (dragging: boolean) => void;
};
