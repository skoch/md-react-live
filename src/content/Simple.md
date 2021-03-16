# Usage

`scope` is a prop of the `LiveProvider` which contains any Components that are used. In this case, we would need to pass in both the `Header` and `Card` components.

## Simple

```jsx
<div>
  <Header title="Header Component" />
  <Card title="FPO Card" description="Pretium molestie ultricies neque phasellus proin nam lectus lacinia hac varius dictum convallis dui laoreet" />
</div>
```

## Class Example

```jsx
class HeaderDemo extends React.Component {
  render() {
    return (
      <div>
        <Header title="Header Component" />
        <Card title="FPO Card" description="Pretium molestie ultricies neque phasellus proin nam lectus lacinia hac varius dictum convallis dui laoreet" />
      </div>
    );
  }
}

<HeaderDemo />;
```
