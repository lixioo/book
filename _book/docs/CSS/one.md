# 解析 URL 时，中文乱码

decodeURIcomponent 处理

```js
export queryParams = funtion(url){
    const result = {}
    const m = decodeURIcomponent(url).split('?')[1].split('&')
    m.forEach(item =>{
        result[item.split('=')[0]]=item.split('=')[1]
    })
    return result
}

```

# 父子组件生命周期

    父组件beforeCreated
    父组件created
    父组件beforeMounted

    disanci

# common.js 和 es6 中模块引入的区别
