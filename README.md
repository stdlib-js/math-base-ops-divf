<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# divf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Divide two single-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import divf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-divf@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-ops-divf/tags). For example,

```javascript
import divf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-divf@v0.2.1-deno/mod.js';
```

#### divf( x, y )

Divides two single-precision floating-point numbers.

```javascript
var v = divf( -1.0, 5.0 );
// returns ~-0.2

v = divf( 2.0, 5.0 );
// returns ~0.4

v = divf( 0.0, 5.0 );
// returns 0.0

v = divf( -0.0, 5.0 );
// returns -0.0

v = divf( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import rand from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import divf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-divf@deno/mod.js';

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = rand( -50, 50 );
    y = rand( -50, 50 );
    console.log( '%d / %d = %d', x, y, divf( x, y ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/ops/addf`][@stdlib/math/base/ops/addf]</span><span class="delimiter">: </span><span class="description">compute the sum of two single-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/math-base/ops/div`][@stdlib/math/base/ops/div]</span><span class="delimiter">: </span><span class="description">divide two double-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/math-base/ops/mulf`][@stdlib/math/base/ops/mulf]</span><span class="delimiter">: </span><span class="description">multiply two single-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/math-base/ops/subf`][@stdlib/math/base/ops/subf]</span><span class="delimiter">: </span><span class="description">subtract two single-precision floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-divf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-divf

[test-image]: https://github.com/stdlib-js/math-base-ops-divf/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-ops-divf/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-divf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-divf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-divf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-divf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-divf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-ops-divf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-ops-divf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-ops-divf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-ops-divf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-ops-divf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-ops-divf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-divf/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/ops/addf]: https://github.com/stdlib-js/math-base-ops-addf/tree/deno

[@stdlib/math/base/ops/div]: https://github.com/stdlib-js/math-base-ops-div/tree/deno

[@stdlib/math/base/ops/mulf]: https://github.com/stdlib-js/math-base-ops-mulf/tree/deno

[@stdlib/math/base/ops/subf]: https://github.com/stdlib-js/math-base-ops-subf/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
