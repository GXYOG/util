//获取类型
export function getType(param) {
	return Object.prototype.toString.call(param).slice(8, -1)
}

//是否为null
export function isNull(param) {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Null'
}

//是否undefined
export function isUndefined(param) {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Undefined'
}

//是否数组
export function isArray(param) {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Array'
}

//是否对象
export function isObj(param) {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Object'
}

//是否函数
export function isFunction(param) {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Function'
}

//是否字符串
export function isString(param) {
	return Object.prototype.toString.call(param).slice(8, -1) === 'String'
}

//是否数字
export function isNumber(param) {
	return Object.prototype.toString.call(param).slice(8, -1) === 'Number'
}

//是否为空
export function empty(param) {
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
