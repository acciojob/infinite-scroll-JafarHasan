//your code here!
const list=document.getElementById('infi-list');
function createList(cnt) {
	for(let i=0;i<cnt;i++){
		const li=document.createElement('li');
		li.textContent=`Item ${list.children.length+1}`
		list.appendChild(li)
	}
	
}
createList(10);
list.addEventListener('scroll',function() {
	if(this.scrollTop+this.clientHeight>=this.scrollHeight){
		createList(2);
	}
})

