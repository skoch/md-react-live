## Usage

No matter the format of the examples we must have a React element to render at the end of the examples. During the transplilation, we will be injecting a "return" statement which is necessary for `react-live` to render properly.

First, we need to read this markdown file and put the contents of the example files in place of the linked files. Then we will use the resulting markdown file to render the contents of the examples as a live code editor using `react-live`.

### A Simple Example

The most basic of examples; the one that just has the component itself.

```jsx
{ "react": "./src/examples/simple-example.tsx" }
```

### A Function Example

Still quite basic; a function.

```jsx
{ "react": "./src/examples/function-example.tsx" }
```

### Class Example

Different flavor; class / React Component

```jsx
{ "react": "./src/examples/class-example.tsx" }
```
