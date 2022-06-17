window.dom = {
    create(string){
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after(node,node2){
     node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node,node2){
     node.parentNode.insertBefore(node2,node)
    },
    append(parent,node){
        parent.appendChild(node)
    },
    warp(node,parent){
        dom.before(node,parent)
        dom.append(parent,node)
    },

    remove(node){
        node.parentNode.removeChild(node)   // 等价于新语法 node.remove()
        return node
    },

    empty(node){
        const arr = []
        let x = node.firstChild
        while(x){
            arr.push(dom.remove(node.firstChild))
            x = node.firstChild              
        }
        return arr
    },

    attr(node,name,value){
        if(arguments.length === 3){ 
            node.setAttribute(name,value)
        }else if(arguments.length === 2){
           return node.getAttribute(name)
        }

    },

    text(node,string){
        if(arguments.length === 2){
            if('innerHTML' in node){
                node.innerHTML = string
            }else{
                node.innerContent = string   
               }
        }else if(arguments.length === 1){
            if('innerHTML' in node){
               return node.innerHTML
            }else{
               return node.innerContent
               }
        }

    },

    html(node,string){
        if(arguments.length === 2){
            node.innerHTML = string
        }else if(arguments.length === 1){
            return node.innerHTML
        }
    },

    style(node,name,value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]   // 这里注意一下
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }
    },


    class:{                 //class是个对象  所以创建时候是 class:{}   {}里面放它的各种方法(函数)
        add(node,className){             
            node.classList.add(className)
        },    //注意对象里面的元素用逗号隔开
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
           return node.classList.contains(className)
        }
    },


    on(node,eventName,fn){        //eventName变量 表示事件名 例如事件名'click' 意思不能乱取名字 必须是事件名
        node.addEventListener(eventName,fn)
    },

    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },


    find(selector,scope){           //scope 范围的意思
        return (scope || document).querySelectorAll(selector)
    },


    parent(node){
        return node.parentNode
    },


    children(node){
        return node.children
    },

                    
    siblings(node){
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    },


    next(node){
        let x =  node.nextSibling
        while (x && x.nodeType === 3 ) {
            x = x.nextSibling
        }
         return x
    },


    previous(node){
        let x =  node.previousSibling     //前面是找弟弟 现在是找哥哥 就改个前缀即可
        while (x && x.nodeType === 3 ) {
            x = x.previousSibling
        }
         return x
    },


    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },


    index(node){
        const dd = dom.children(node.parentNode) //这里表示为node.parentNode.children 
             //思路是通过node 找到他父亲node.parentNode， 再通过dom.children找到父亲的所有儿子(包括这个node)
        let i   //外面声明i i就是个全局变量 这个i可以拿到闭合作用域i的值
        for(i=0;i<dd.length;i++){
            if(dd[i]===node){
                break
            }
        } return i    //注意return写的位置 是在那个{}外面写
             //如果let i=0写在for()里面 那么此时就return 不到i  因为作用域的问题 所以声明let i在全局
    }

}