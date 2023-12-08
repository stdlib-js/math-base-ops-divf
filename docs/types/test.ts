/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import divf = require( './index' );


// TESTS //

// The function returns a number...
{
	divf( 8.0, 8.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	divf( true, 5.0 ); // $ExpectError
	divf( false, 5.0 ); // $ExpectError
	divf( null, 5.0 ); // $ExpectError
	divf( undefined, 5.0 ); // $ExpectError
	divf( '5', 5.0 ); // $ExpectError
	divf( [], 5.0 ); // $ExpectError
	divf( {}, 5.0 ); // $ExpectError
	divf( ( x: number ): number => x, 5.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	divf( 5.0, true ); // $ExpectError
	divf( 5.0, false ); // $ExpectError
	divf( 5.0, null ); // $ExpectError
	divf( 5.0, undefined ); // $ExpectError
	divf( 5.0, '5' ); // $ExpectError
	divf( 5.0, [] ); // $ExpectError
	divf( 5.0, {} ); // $ExpectError
	divf( 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	divf(); // $ExpectError
	divf( 5.0 ); // $ExpectError
	divf( 5.0, 5.0, 5.0 ); // $ExpectError
}
