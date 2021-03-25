## Usage

`scope` is a prop of the `LiveProvider` which contains any Components that are used. In this case, we would need to pass in both the `Header` and `Card` components.

### Simple

```jsx
<div>
  <Header title="Header Component" />
  <Card title="Card Component" description="Pretium molestie ultricies neque phasellus proin" />
</div>
```

### Class Example

```jsx
class DemoExample extends React.Component {
  render() {
    return (
      <div>
        <Header title="Header Component" />
        <Card title="Card Component" description="Pretium molestie ultricies neque phasellus proin" />
      </div>
    );
  }
}

<DemoExample />;
```

### Function Example

```jsx
const DemoExample = () => {
    return (
      <div>
        <Header title="Header Component" />
      </div>
    );
}

<DemoExample />;
```
