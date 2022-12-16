class Node {
    constructor(value=null,nextNode=null){
        this.value = value
        this.nextNode = nextNode
    }
}

class LinkedList {

    constructor(){
        this.head = null;
    }
    
    append(value){

        // Create a new node via the class with the passed value
        let node = new Node(value)
        let current;
        // In case the head of the LL is empty then add the value there
        if(!this.head){
            this.head = node;
        } else {
            // Set the current variable to the head of the LinkedList
            current = this.head

            while(current.nextNode){
                current = current.nextNode
            }
            current.nextNode = node
        }

        
    }

    prepend(value){
        this.head = new Node(value,this.head);
        
    }

    listSize(){
        
        let value = this.head;
        let counter;
        if(value === null){
            counter = 0;
        } else {
            counter = 1;
        }

        while(value!= null && value.nextNode){
            counter++
            value = value.nextNode
        }

        return counter
    }

    headValue(){
        let headValue = this.head
        return headValue
    }

    tailValue(){
        
        let lastItem = this.head

        while(lastItem!= null && lastItem.nextNode){
            lastItem = lastItem.nextNode
        }

        return lastItem
    }

    at(index){

        let currentIndex = this.head
        let loopIndex = 0;

        while(currentIndex!= null){
            
            if(loopIndex == index){
                return currentIndex
            }
            
            currentIndex = currentIndex.nextNode
            loopIndex++;

        }
    
    }

    pop(){

        if(!this.head) return null

        let currentNode = this.head
        let previousNode;

        while(currentNode.nextNode){
            previousNode = currentNode;
            currentNode = currentNode.nextNode
        }

        previousNode.nextNode = null
        
        
        
    }

    contains(value){
        
        if(!this.head) return false

        let currentNode = this.head
        let valueToCheck;

        while(currentNode){
            valueToCheck = currentNode.value;

            if(valueToCheck == value){

                return true
            }

            currentNode = currentNode.nextNode
        }

        return false;
    }

    find(value){
        
        if(!this.head) return false

        let currentNode = this.head
        let valueToCheck;
        let counter = 0;

        while(currentNode){

            valueToCheck = currentNode.value;

            if(valueToCheck == value){

                return counter
            }

            counter++;

            currentNode = currentNode.nextNode
        }

        return null;
    }

    toString(){

        if(!this.head) return false
        
        let currentNode = this.head;

        let listString;
        let listSeparator = " -> "
        
        let index = 0;

        while(currentNode){
            
            if(index != 0 && currentNode.nextNode === null){
                
                listString = listString + listSeparator + currentNode.value + listSeparator + "null"
                index ++

            } else if(index === 0 && currentNode.nextNode != null) {

                listString = currentNode.value
                index ++

            } else if(currentNode.nextNode === null && index === 0) {
                
                listString = currentNode.value + listSeparator + "null";
                index ++

            } else {

                listString = listString + listSeparator + currentNode.value
                index ++

            }

            currentNode = currentNode.nextNode

        }

        return listString

    }

    insertAt(value,index){

        let node = new Node(value)
        let currentNode = this.head;
        let previousNode;
        let loopIndex = 0;
        let followingNode;

        let currentListLength = this.listSize()-1

        if(!this.head){
            this.head = node;
            
            return
        }

        while(currentNode && index < currentListLength){
         
         
            if(loopIndex == index){
                
                followingNode = currentNode
                previousNode.nextNode = node
                currentNode = node
                currentNode.nextNode = followingNode

            }

            previousNode = currentNode;
        
            currentNode = currentNode.nextNode
            
            loopIndex++

        }

        
        while(index >= currentListLength){
         
            this.append(value)
            return
        }

    }

    removeAt(index){
        
        let currentNode = this.head;
        let previousNode;
        let loopIndex = 0;
        let followingNode;
        
        let currentListLength = this.listSize()-1
        
        console.log("logging in list length : " + currentListLength + " and index: " + index)
        
        if(index > currentListLength) return 
        

        if(currentListLength === 0 && index == 0){

            currentNode = null
            return

        }

        if(currentListLength == index){

            this.pop()            
            console.log("popped one");
            return
        }

        while(currentNode.nextNode){

            if(loopIndex == index){

                followingNode = currentNode.nextNode
                previousNode.nextNode = followingNode
                currentNode = null
                return
            }

            previousNode = currentNode;
        
            currentNode = currentNode.nextNode

            loopIndex++
        }
        
    }
        
}

let myLinkedList = new LinkedList();

myLinkedList.prepend('Daniel');
myLinkedList.append('Daniela')

// Get the head value
let headValue = myLinkedList.headValue()
console.log(headValue)

// Get the tail value
let tailValue = myLinkedList.tailValue()
console.log(tailValue)

// Check the index
let indexCheck = myLinkedList.at(1);
console.log(indexCheck)

// Check if list contains value
let checkIfContains = myLinkedList.contains("Daniel")
console.log(checkIfContains)

// Return the index of a value if the value it's in the list
let findIndexOfValue = myLinkedList.find("Daniela")
console.log(findIndexOfValue)

// Return a string of the full list
let concatenateString = myLinkedList.toString()
console.log(concatenateString)