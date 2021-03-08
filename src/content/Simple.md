# Usage

`scope` is a prop of the `LiveProvider` which contains any Components that are used. In this case, we are passing in the `Header` component.

## Header as a React Component

```jsx
class HeaderDemo extends React.Component {
  render() {
    return <Header title="Header Component" />;
  }
}

<HeaderDemo />;
```

## Simple

```jsx
<Header title="Header Component" />
```
