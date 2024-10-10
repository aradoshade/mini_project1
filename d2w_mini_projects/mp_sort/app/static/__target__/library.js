// Transcrypt'ed from Python, 2024-10-09 22:07:56
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	random.seed (seed);
	var array = list (range (number));
	random.shuffle (array);
	return array;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	var array = gen_random_int (number, seed);
	var array_str = '';
	for (var i = 0; i < len (array) - 1; i++) {
		array_str += str (array [i]) + ',';
	}
	array_str += str (array [9]) + '.';
	document.getElementById ('generate').innerHTML = array_str;
};
export var sortnumber1 = function () {
	var array = document.getElementById ('generate').innerHTML;
	var numberarray = array.__getslice__ (0, -(1), 1).py_split (',');
	var numberarray = (function () {
		var __accu0__ = [];
		for (var num of numberarray) {
			__accu0__.append (int (num));
		}
		return __accu0__;
	}) ();
	var swapped = true;
	var n = len (numberarray);
	while (swapped) {
		var new_n = 0;
		var swapped = false;
		for (var i = 0; i < n - 1; i++) {
			if (numberarray [i] > numberarray [i + 1]) {
				var swapped = true;
				var __left0__ = tuple ([numberarray [i + 1], numberarray [i]]);
				numberarray [i] = __left0__ [0];
				numberarray [i + 1] = __left0__ [1];
				var new_n = i + 1;
			}
		}
		var n = new_n;
	}
	var array_str = '';
	for (var i = 0; i < len (numberarray) - 1; i++) {
		array_str += str (numberarray [i]) + ',';
	}
	array_str += str (numberarray [9]) + '.';
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementById ('numbers').value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var array_str = (function () {
		var __accu0__ = [];
		for (var num of value.py_split (',')) {
			__accu0__.append (int (num.strip ()));
		}
		return __accu0__;
	}) ();
	var n = len (array_str);
	var swapped = true;
	while (swapped) {
		var swapped = false;
		for (var idx = 1; idx < n; idx++) {
			if (array_str [idx - 1] > array_str [idx]) {
				var __left0__ = tuple ([array_str [idx], array_str [idx - 1]]);
				array_str [idx - 1] = __left0__ [0];
				array_str [idx] = __left0__ [1];
				var swapped = true;
			}
		}
	}
	var array_str = ','.join (map (str, array_str));
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map