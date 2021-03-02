# Usage
`scope` needs to be passed in as an argument to the `LiveProvider` which contains any Components that are used. In this case, we are passing in `Header`.

## Header as a React Component

```jsx
class HeaderDemo extends React.Component {
    render() {
      return <Header title="Header Component" />;
  }
}
```

## Simple
```jsx
<Header title="Header Component" />
```
