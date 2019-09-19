// test function 

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};

LinkedList.prototype.size = function () {
  var current = this.head;
  var count = 0;

  while (current !== null) {
    count++;
    current = current.next
  }

  return count;
}

LinkedList.prototype.prepend = function (val) {
  var NewNode = {
    data: val,
    next: this.head
  }

  this.head = NewNode;
}

LinkedList.prototype.append = function (val) {
  var newNode = {
    data: val,
    next: null
  }
  if (this.isEmpty()) {
    this.head = newNode;
    return;
  }
  var current = this.head;

  while (current.next != null) {
    current = current.next;
  }

  current.next = newNode;

};

LinkedList.prototype.contains = function (val) {
  var current = this.head;
  while (current != null) {
    if (current.data === val) {
      return true;
    }
    current = current.next;
  }
  return false;
}

LinkedList.prototype.remove = function (val) {
  if (!this.contains(val)) {
    return
  }
  if (this.head.data === val) {
    this.head = this.head.next;
    return;
  }

  var prev = null;
  var current = this.head;

  while (current.data !== val) {
    prev = current;
    current = current.next;
  }

  prev.next = current.next;

};

LinkedList.prototype.removeIndex = function(val){
  if(this.head === null){return;}
  if(!this.contains(val)){return;}
  let size = this.size();
  var current = this.head;
  for(let i=0; i<size; i++){
    while(i!==val){
      current=current.next
    }
  }  
  return;
}

LinkedList.prototype.print = function () {
  var output = '{';
  var current = this.head;

  while (current !== null) {
    output += current.data;
    if (current.next !== null) {
      output += ', ';
    }
    current = current.next;
  }
  output += '}'
  console.log(output);
}

function GenerateList(val) {
  var list = new LinkedList();
  for (let i = 0; i < val; i++) {
    let ran = Math.round(Math.random() * 10);
    list.append(ran);
  }
  list.print();
  return list;
}

var list = GenerateList(12);



// test area ========function end ==========================

// });


LinkedList.prototype.RemoveDuplicate = function () {
  var size = this.size();
  if (size == 1 || size == 0) { return }
  var values = [];
  var current = this.head;
  console.log(current.data + "   test")
  for (let i = 0; i < size; i++) {
    if (values.includes(current.data)) {
      console.log("repeat  " + current.data);
      var repeat = current.data;
      this.remove(repeat);
      current = current.next;
    }
    else {
      values.push(current.data);
      console.log(values);
      current = current.next;
    }
  }
  this.print();
}

list.print();
list.RemoveDuplicate();
list.print();
