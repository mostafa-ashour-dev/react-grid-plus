# React Grid

A high-performance, flexible grid component for rendering large lists of items efficiently.


## Key Features

- **Responsive Columns**: Automatically adjusts grid layout (2-6 columns)
- **Flexible Spacing**: Configurable gap sizes for item spacing
- **Dual Scroll Modes**: Support for both vertical and horizontal scrolling
- **Pagination Support**: Show limited items with a "view more" footer
- **Loading States**: Built-in loading component display
- **Type-Safe**: Full TypeScript support with generic types
- **Tailwind CSS**: Uses Tailwind utility classes for styling


## Installation

```bash
npm install react-grid
```

## Usage

### Basic Example

```tsx
import { Grid } from 'react-grid';

interface Item {
  id: number;
  title: string;
  description: string;
}

const items: Item[] = [
  { id: 1, title: 'Item 1', description: 'Description 1' },
  { id: 2, title: 'Item 2', description: 'Description 2' },
  // ... more items
];

export default function MyComponent() {
  return (
    <Grid<Item>
      data={items}
      cols={3}
      gap={4}
      renderItem={(item) => (
        <div key={item.id} className="p-4 border rounded">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      )}
    />
  );
}
```

### Advanced Example with Scrolling

```tsx
<Grid<Item>
  data={items}
  cols={4}
  gap={2}
  scrollable={true}
  scrollDir="horizontal"
  scrollFit={true}
  maxItems={12}
  footer={{ text: 'View All Items', href: '/all-items' }}
  renderItem={(item, index) => (
    <div key={item.id}>
      <h3>{item.title}</h3>
    </div>
  )}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | `undefined` | Array of items to render in the grid. Can be any data type. |
| `renderItem` | `(item: T, index: number) => React.ReactNode` | **Required** | Function that renders each item. Receives the item and its index. |
| `cols` | `number` | `3` | Number of columns in the grid. Supports values 2-6. Applies Tailwind `grid-cols-{n}` classes. |
| `gap` | `number` | `4` | Spacing between grid items. Supports values 2, 4, 5, 6. Applies Tailwind `gap-{n}` classes. |
| `scrollable` | `boolean` | `false` | Enables scrolling behavior. When true, combined with `scrollDir` to determine scroll direction. |
| `scrollDir` | `"vertical" \| "horizontal"` | `"horizontal"` | Direction of scrolling. Use `"vertical"` for vertical scroll or `"horizontal"` for horizontal scroll. |
| `scrollFit` | `boolean` | `false` | Applies overflow and size constraints based on the tallest/widest item. Works with `scrollDir` for responsive sizing. |
| `maxItems` | `number` | `undefined` | Maximum number of items to display. If set and `data.length` exceeds this, a footer link is shown. |
| `footer` | `{ text: string; href: string }` | `undefined` | Custom footer link configuration. If not provided, defaults to "View {count} more" text. |
| `hideFooter` | `boolean` | `false` | Hides the footer link even when `maxItems` is set and items exceed the limit. |
| `loading` | `boolean` | `false` | Shows the loading component when true. Useful for data loading states. |
| `loadingComponent` | `React.ReactNode` | `<span>Loading...</span>` | Custom component to display while loading. Only shown when `loading` is true. |
| `className` | `string` | `""` | Additional Tailwind CSS classes to apply to the grid container. |
