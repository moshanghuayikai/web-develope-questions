/**
* 编程类操作
* @author aierui
* @Email aieruishi@gmail.com
*/

// Closures
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures

function init(){
	let name = 'aierui';
	// name 是一个被init创建的局部变量
	function displayName(){// displayName() 是一个内部函数,
		alert(name) //  一个闭包使用在父函数中声明的变量
	}
	displayName();
}

init();



//去重、排序、常用库函数实现其原理

// 采用 indexOf
Array.prototype.unique = function(){
	var result = [];

	this.forEach(function(v){
		if(result.indexOf(v) <0 ){
			result.push(v)	
		}
	})

	return result;
}



// 去重、利用hash表去重，这是一种空间换时间的方法

Array.prototype.unique = function(){
	var result= [],hash = {};

	this.forEach(function(val,index){
		if(!hash[v]){
			hash[v] = true
			result.push(v)
		}
	})

	return result;
}


// 上面的方法存在一个bug，对于数组[1,2,’1’,’2’,3]，去重结果为[1,2,3]，原因在于对象对属性索引时会进行强制类型转换，arr[‘1’]和arr[1]得到的都是arr[1]的值，因此需做一些改变：

Array.prototype.unique = function(){
    var result = [],hash = {};
    
    this.forEach(function(v){
        var type = typeof(v);  //获取元素类型
        
        hash[v] || (hash[v] = new Array());
        
        if(hash[v].indexOf(type) < 0){
            hash[v].push(type);  //存储类型
            result.push(v);
        }

    });
    
    return result;
}



// 实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制
function clone(obj){
	var o;
	
	switch(typeof obj) {
		case 'undefined':
			break;
		case 'string':
			o = obj + ''
			break;
		case 'number':
			o = obj - 0
			break;
		case 'boolean':
			o = obj
			break;
		case 'object':
			if(obj === null){
				o = null
			}else{
				if(Object.prototype.toString.call(obj).slice(8, -1) == 'Array'){
						o = [];
						for (var i = 0; i < obj.length; i++) {
							o.push(clone(obj[i]))
						}
				}else{
					o = {}
					for (key in obj) {
						if (obj.hasOwnProperty(key)) {
							o[key] = clone(obj[key])
						}
					}

				}
			}
			break;
		default:
			o = obj
	}

	return o;
}




//  实现一个forEach函数，即可遍历数组，也可以遍历对象
function forEach(obj, fn){
	var key;
	if (obj instanceof Array) {
	  obj.forEach(function(item, index){
	    fn(index, item)
	  })
	}else{
	  for(key in obj){
	    if (obj.hasOwnProperty(key)) { // 注意这里的 hasOwnProperty 是自己的属性还是圆型链上的
	      fn(key, obj[key])
	    }
	  }
	}
}



// 实现 bind() 
// bind() 方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
// bind() 作用有两个，1、绑定this， 2、柯里化

Function.prototype.bind = function(that)
{
	if(typeof this !== 'function'){
		throw new TypeError()
	}

	var args = Array.prototype.slice.call(arguments, 1),
		_bind = this,
		f = function () {},
		bounding = function () {
			//采用 apply(this, []) 方式调用 
			return _bind.apply(
					this instanceof f ? this : that,// 这里这个 this 即是 调用方的 function 
					args.concat(Array.prototype.slice.call(arguments))
				);
		}

	// 设置原型链
	f.prototype = this.prototype;
	bounding.prototype = new f();

	return bounding;
}



// 手写数组扁平化（[1,2,3,[1,2,3],[2,[3,4],3]]>[1,2,3,1,2,3,2,3,4,3]）算法；


function flatten (arr){
	return arr.toString().split(',');
}



// 随机数

function randMember(length)
{
	if (length == undefined) {
		length = 10
	}

	var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var str = "";
  for (var i = 0; i < length; i++) {
      str += chars.substr(Math.ceil(Math.random() * chars.length), 1);
  }
  return str;
}



//

function randomArray(length){
	var i,index,temp,arr=[length];
	length = typeof(length) === 'undefined' ? 9 : length;

	for(i = 1; i <= length; i ++){
		arr[i - 1] = i;
	}

	for(i = 1; i <= length; i++){
		index = parseInt(Math.random() * (length - 1)) + 1;

		if(index != i){
			temp = arr[i];
			arr[i] = arr[index];
			arr[index] = temp;
		}
	}
}




/*============ 排序算法 ==============
*／

// 冒泡排序(Bubble Sort)


*/


// 快速排序
		//排序过程只需要三步：
		//　1.在数据集之中，找一个基准点
　　 //  2.建立两个数组，分别存储左边和右边的数组
　　 //  3.利用递归进行下次比较


function quickSort(arr){
		if(arr.length <= 1) return arr;  //如果数组只有一个数，就直接返回；

		var index = Math.floor(arr.length/2);  //找到中间数的索引值，如果是浮点数，则向下取整

		var key = arr.splice(index,1)[0];  //找到中间数的值

		var left = [],right = [];

		arr.forEach(function(v){
		v <= key ? left.push(v) : right.push(v); //基准点的左边的数传到左边数组、右边的数传到右边数组
		});

		return quickSort(left).concat([key],quickSort(right)); //递归不断重复比较
}







