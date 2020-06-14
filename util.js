//获取类型
export const getType = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1)
}

//是否为null
export const isNull = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Null'
}

//是否undefined
export const isUndefined = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Undefined'
}

//是否数组
export const isArray = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Array'
}

//是否对象
export const isObj = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Object'
}

//是否函数
export const isFunction = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Function'
}

//是否字符串
export const isString = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1) === 'String'
}

//是否数字
export const isNumber = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Number'
}

//是否bool
export const isBoolean = (param) => {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Boolean'
}

//是否为空
export const empty = (param) => {
	if (isBoolean(param)){
		return param
	}
	if (isNull(param)){
		return true
	}
	if (isUndefined(param)){
		return true
	}
	if (isNumber(param) && param === 0){
		return true
	}
	if (isString(param)){
		if (param.trim().length === 0){
			return true
		}
	}
	return false
}

//判断邮箱
export const isEmail = (param) =>{
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(param)
}

//判断手机号码
export const isMobile = (param) => {
	return /^1[0-9]{10}$/.test(param)
}

//范围随机数
export const rand = (min,max) => {
	if (arguments.length === 2) {
		return Math.floor(min + Math.random() * ((max + 1) - min))
	} else {
		return null;
	}
}

//数组中是否包含
export const inArray = (param,array) => {
	return array.indexOf(param) != -1 ? true : false;
}

//删除数组中某个元素
export const removeArrayElement = (ele,arr) => {
	let index = arr.indexOf(ele);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return arr;
}

//数组最大值
export const arrayMax =(arr) => {
	return Math.max(...arr); //可用Math.max.apply(null.arr)
}

//数组最小值
export const arrayMin = (arr) => {
	return Math.min(...arr);
}

//去除空格 type；1。所有空格 2.前后空格 3.前空格 4.后空格
export const trim = (str, type = 1) => {
	type = type || 1
	switch (type) {
		case 1:
			return str.replace(/\s+/g, "");
		case 2:
			return str.replace(/(^\s*)|(\s*$)/g, "");
		case 3:
			return str.replace(/(^\s*)/g, "");
		case 4:
			return str.replace(/(\s*$)/g, "");
		default:
			return str;
	}
}




