/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Routine = require( './routine.js' );


// MAIN //

/**
* WebAssembly module to interchange two complex double-precision floating-point vectors.
*
* @name zswap
* @type {Routine}
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
*
* // Define strided arrays...
* var x = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var y = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zswap.main( x.length, x, 1, y, 1 );
* // x => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
* // y => <Complex128Array>[ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
*
* // Define a strided arrays...
* var x = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var y = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zswap.ndarray( x.length, x, 1, 0, y, -1, 2 );
* // x => <Complex128Array>[ 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
* // y => <Complex128Array>[ -5.0, -6.0, -3.0, -4.0, -1.0, -2.0 ]
*/
var zswap = new Routine();
zswap.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = zswap;
