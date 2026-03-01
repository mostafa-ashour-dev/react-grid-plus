export type GridProps<T> = {
  data?: T[];
  cols?: number;
  gap?: number;
  maxItems?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  scrollable?: boolean;
  scrollDir?: "vertical" | "horizontal";
  footer?: {
    text: string;
    href: string;
  };
  className?: string;
  loading?: boolean;
  loadingComponent?: React.ReactNode;
  hideFooter?: boolean;
  scrollFit?: boolean;
};

export {};
