/* PRECEDENCIA DE OPERADORES ******************************
Precedencia	Tipo de operador	Asociatividad	Operador
0	            grouping	        n/a	          (…)
1	            member	            left-to-right ….…
                                                  …[…]
                new             	n/a	        new … (…)
2	            function call	    left-to-right	…(…)
                new	                right-to-left	new …
3	            increment	        n/a	            …++
                decrement	        n/a	            …--
4	            logical-not	        right-to-left	!…
                bitwise not	        right-to-left	~…
                unary +	            right-to-left	+…
                unary negation  	right-to-left	-…
                typeof	            right-to-left	typeof …
                void	            right-to-left	void …
                delete	            right-to-left	delete …
5	            multiplication	    left-to-right	*
                division	        left-to-right	/
                modulus	            left-to-right	%
6	            addition	        left-to-right	+
                subtraction	        left-to-right	-
7	            bitwise shift	    left-to-right	<<
                                                    >>
                                                    >>>
8	            relational	        left-to-right	<
                                                    <=
                                                    >
                                                    >=
                in	                left-to-right	in
i               nstanceof	        left-to-right	instanceof
9	            equality	        left-to-right	==
                                                    !=
                                                    ===
                                                    !==
10	            bitwise-and	        left-to-right	&
11	            bitwise-xor	        left-to-right	^
12	            bitwise-or	        left-to-right	|
13          	logical-and	        left-to-right	&&
14	            logical-or	        left-to-right	||
15	            conditional	        right-to-left	… ? … : …
16	            assignment	        right-to-left	=
17	            yield	            right-to-left	yield…
18	            comma	            left-to-right	,
************************************************************/

let a = 3;
let b = 2;
let c = 1;
let d = 4;

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);
