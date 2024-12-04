# Build for the web

In order to build the `three-d` examples for the web, you can follow these steps. All commands should run in this `web/` directory.

1. Make sure you have both `Rust` and `npm` and `wasm-pack` ("cargo install wasm-pack") installed.

2. Run

```console
$ npm install
```

```console
$ npm run build
```

4. Run

```console
$ npm run serve
```

5. Open `http://localhost:8080` in a browser


# Build locally

1. Just build like you would a regular cargo project
``` console
$ cargo build
```

2. You can run it via
``` console
$ cargo run
``` 

or in optimized mode via
``` console
$ cargo run --release
``` 

# Debug
1. You can use VSCode Debugger (CodeLLDB) to debug it with the provided launch configuration