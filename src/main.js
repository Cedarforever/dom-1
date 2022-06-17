console.log('hi');
const  div1 = dom.create("<div>222 <span>999<span>1</span></span></div>");
console.log(div1);
const div2 = dom.after(test,div1)
const div3 = dom.append(div1,test2)

const div4 = dom.create("<div id='parent11'> </div>")
dom.warp(test2,div4)


const aa = document.querySelector('#aaa')  //因为前面是id='aaa'  如果是class='aaa' 则是 .aaa
                                  //重点就是我声明一个变量aa 去获得了这个元素 然后再删除、打印
console.log(aa)  //这里能打印出   
dom.remove(aa)
console.log(aa) //这里也能打印了


const ab = dom.empty(test3)
console.log(ab)


dom.attr(test,'title','hi i am Cedar')
const div6 = dom.attr(test,'title')
console.log(div6)
console.log(`div6: ${div6} `)


dom.text(test,'这是我第一次写文本内容')
const div7 = dom.text(test)
console.log(div7)


dom.html(okk,'上善若水 善天下')


dom.style(window.ab,'color','red')
dom.style(window.ab,{color:'blue'})
let cc =  dom.style(window.ab,'color')
console.log(cc)


dom.class.add(abc,'same')
dom.class.add(abc,'yellow')
dom.class.remove(abc,'yellow')
dom.class.has(abc,'same')
let a = dom.class.has(abc,'same')
console.log(a)

let fn = ()=>{console.log('点击了')}
dom.on(abc,'click', fn)
dom.off(abc,'click',fn)


const i = dom.find('#testDiv1')[0]
console.log(i)
const i1 = dom.find('.pp',i)[1]
console.log(i1)


const p11 = dom.find('.pp')[0]
console.log(dom.parent(p11))


const p12 = dom.find('#testDiv1')[0]
const p13 = dom.children(p12)
console.log(p13)


dom.siblings(dom.find('.pp')[1])


const z1 = dom.find('.pp')[2]
const z2 = dom.next(z1)
console.log(z2)
console.log(dom.previous(z1))


const tt = dom.find('#testDiv1')[0]   //这里必须加个[] 不加找的就是数组！！ 加了[]表示找到某一个
dom.each(tt.children,(n)=>dom.style(n,'color','red'))  //这里的n表示一个占位！！就好比函数里面写变量


const e1 = dom.find('.pp')[2]   //还是老规矩 我得先找到这个元素 所以必须加[2]  不然这找到的是个数组！！！
const e2 = dom.index(e1)
console.log(e2)